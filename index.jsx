import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Coffee, 
  TrendingUp, 
  ShoppingCart, 
  UserPlus, 
  Star, 
  Package, 
  Trash2,
  Activity,
  User,
  Settings,
  Monitor,
  X,
  Clock,
  ChefHat,
  DollarSign,
  Crown
} from 'lucide-react';

// --- GAME CONFIGURATION ---
const INITIAL_STATE = {
  money: 15,
  beans: 20,
  coffees: 0,
  pricePerCoffee: 3,
  beanCost: 10,
  beanBatchSize: 20,
  demand: 1, 
  
  // Upgrades
  baristas: 0,
  marketingLevel: 0,
  premiumBeansLevel: 0,
  autoBeanBuyer: 0, 
  pastryChefs: 0,
  tipJar: 0,
  pastries: 0,
  
  // Stats
  totalEarned: 0,
  totalBrewed: 0,
  tutorialStep: 0, // NEW: 0=Brew, 1=Sell, 2=Beans, 3=Upgrade, 4=Done, 5=Hidden
  ticks: 0,
  goldenBeans: 0, // NEW: Prestige Currency
};

const UPGRADES = {
  barista: {
    id: 'baristas',
    name: 'Hire Barista',
    description: 'Auto-brews 1 coffee/sec.',
    baseCost: 50,
    costMultiplier: 1.15,
    icon: UserPlus,
    maxLevel: null
  },
  marketing: {
    id: 'marketingLevel',
    name: 'Marketing Campaign',
    description: 'Increases demand by 1/sec.',
    baseCost: 100,
    costMultiplier: 1.5,
    icon: TrendingUp,
    maxLevel: null
  },
  premiumBeans: {
    id: 'premiumBeansLevel',
    name: 'Premium Roast',
    description: 'Increases price by $1.50.',
    baseCost: 250,
    costMultiplier: 2.2,
    icon: Star,
    maxLevel: null
  },
  autoBean: {
    id: 'autoBeanBuyer',
    name: 'Auto-Bean Manager',
    description: 'Auto-buys beans when low.',
    baseCost: 1000,
    costMultiplier: 1,
    icon: ShoppingCart,
    maxLevel: 1
  },
  pastryChef: {
    id: 'pastryChefs',
    name: 'Hire Pastry Chef',
    description: 'Bakes 1 pastry/sec. Sells for $4.',
    baseCost: 750,
    costMultiplier: 1.4,
    icon: ChefHat,
    maxLevel: null
  },
  tipJar: {
    id: 'tipJar',
    name: 'Tip Jar',
    description: '15% chance for a $2 tip per sale.',
    baseCost: 150,
    costMultiplier: 1.8,
    icon: DollarSign,
    maxLevel: 5
  }
};

// Map layout coordinates (Percentage 0-100)
const ZONES = [
  { id: 'desk', name: 'Management PC', action: 'Open System', x: 10, y: 15, w: 15, h: 15, icon: Monitor, color: 'bg-indigo-900 border-indigo-500' },
  { id: 'machine', name: 'Espresso Maker', action: 'Brew Coffee', x: 45, y: 15, w: 12, h: 12, icon: Coffee, color: 'bg-stone-300 border-stone-400 text-stone-900' },
  { id: 'storage', name: 'Inventory', action: 'Buy Beans', x: 80, y: 15, w: 15, h: 15, icon: Package, color: 'bg-amber-900 border-amber-700' }
];

const COUNTER_Y = 50;
const COUNTER_H = 10;
const PLAYER_SPEED = 0.6;
const PLAYER_SIZE = 4; // percentage radius roughly

const getHexColor = (twClass) => {
   if (twClass.includes('blue')) return '#60a5fa';
   if (twClass.includes('emerald')) return '#34d399';
   if (twClass.includes('rose')) return '#fb7185';
   if (twClass.includes('purple')) return '#c084fc';
   return '#9ca3af';
};

export default function App() {
  const [gameState, setGameState] = useState(() => {
    try {
      const saved = localStorage.getItem('coffeeTycoonSaveV4');
      if (saved) {
         const parsed = JSON.parse(saved);
         // Migration: If they already have a save with money earned, skip tutorial
         if (parsed.tutorialStep === undefined) {
             parsed.tutorialStep = parsed.totalEarned > 0 ? 5 : 0; 
         }
         return parsed;
      }
    } catch (e) {}
    return INITIAL_STATE;
  });

  // UI State
  const [activeZone, setActiveZone] = useState(null);
  const [showUpgrades, setShowUpgrades] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showRebirthConfirm, setShowRebirthConfirm] = useState(false);
  const [popups, setPopups] = useState([]);
  const [customers, setCustomers] = useState([]);
  
  // NEW: Game Started State
  const [gameStarted, setGameStarted] = useState(false);
  const gameStartedRef = useRef(false);
  useEffect(() => { gameStartedRef.current = gameStarted; }, [gameStarted]);

  const customersRef = useRef([]);
  useEffect(() => { customersRef.current = customers; }, [customers]);

  const baristasRef = useRef(0);
  useEffect(() => { baristasRef.current = gameState.baristas || 0; }, [gameState.baristas]);

  const pastryChefsRef = useRef(0);
  useEffect(() => { pastryChefsRef.current = gameState.pastryChefs || 0; }, [gameState.pastryChefs]);

  const gameIdRef = useRef(0); // Tracks current game lifecycle to prevent ghost animations

  // ThreeJS Refs
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshesRef = useRef({});

  // Player Movement Refs (Refs used for 60fps movement without React re-renders)
  const playerPos = useRef({ x: 50, y: 30, angle: 0 });
  const keys = useRef({ w: false, a: false, s: false, d: false, space: false });

  const currentPrice = INITIAL_STATE.pricePerCoffee + (gameState.premiumBeansLevel * 1.5);
  const currentDemand = INITIAL_STATE.demand + gameState.marketingLevel;

  // Prestige Math
  const prestigeMultiplier = 1 + ((gameState.goldenBeans || 0) * 0.50); // +50% profit per Golden Bean!
  const pendingGoldenBeans = Math.floor(Math.sqrt((gameState.totalEarned || 0) / 1000)); 

  // Save game
  useEffect(() => {
    localStorage.setItem('coffeeTycoonSaveV4', JSON.stringify(gameState));
  }, [gameState]);

  // --- ACTIONS ---
  const handleConfirmReset = useCallback(() => {
    gameIdRef.current += 1; // Invalidates all pending timeouts
    localStorage.removeItem('coffeeTycoonSaveV4');
    setGameState(INITIAL_STATE);
    setCustomers([]);
    setPopups([]);
    playerPos.current = { x: 50, y: 30, angle: 0 };
    setShowResetConfirm(false);
    
    // Clear 3D meshes to avoid ghosts
    if (sceneRef.current && meshesRef.current) {
      for (const id in meshesRef.current) {
        if (id !== 'player' && id !== 'baristas' && id !== 'pastryChefs') {
          sceneRef.current.remove(meshesRef.current[id].mesh);
          delete meshesRef.current[id];
        }
      }
    }
  }, []);

  const handleConfirmRebirth = useCallback(() => {
    gameIdRef.current += 1;
    setGameState(prev => {
      const earnedBeans = Math.floor(Math.sqrt((prev.totalEarned || 0) / 1000));
      return {
        ...INITIAL_STATE,
        goldenBeans: (prev.goldenBeans || 0) + earnedBeans,
        tutorialStep: 5 // Skip tutorial on rebirth
      };
    });
    setCustomers([]);
    setPopups([]);
    playerPos.current = { x: 50, y: 30, angle: 0 };
    setShowRebirthConfirm(false);
    setShowUpgrades(false);
    
    // Clear 3D meshes
    if (sceneRef.current && meshesRef.current) {
      for (const id in meshesRef.current) {
        if (id !== 'player' && id !== 'baristas' && id !== 'pastryChefs') {
          sceneRef.current.remove(meshesRef.current[id].mesh);
          delete meshesRef.current[id];
        }
      }
    }
  }, []);

  const handleBuyBeans = useCallback(() => {
    setGameState(prev => {
      if (prev.money >= prev.beanCost) {
        return { 
          ...prev, 
          money: prev.money - prev.beanCost, 
          beans: prev.beans + prev.beanBatchSize,
          tutorialStep: prev.tutorialStep === 2 ? 3 : prev.tutorialStep 
        };
      }
      return prev;
    });
  }, []);

  const handleBrewCoffee = useCallback(() => {
    setGameState(prev => {
      if (prev.beans > 0) {
        return { 
          ...prev, 
          beans: prev.beans - 1, 
          coffees: prev.coffees + 1, 
          totalBrewed: prev.totalBrewed + 1,
          tutorialStep: prev.tutorialStep === 0 ? 1 : prev.tutorialStep
        };
      }
      return prev;
    });
  }, []);

  const handleBuyUpgrade = (upgradeKey) => {
    const upgrade = UPGRADES[upgradeKey];
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, gameState[upgrade.id] || 0));
    const currentLevel = gameState[upgrade.id] || 0;
    if (upgrade.maxLevel !== null && currentLevel >= upgrade.maxLevel) return;
    
    setGameState(prev => {
      if (prev.money >= cost) {
        return { 
          ...prev, 
          money: prev.money - cost, 
          [upgrade.id]: currentLevel + 1,
          tutorialStep: prev.tutorialStep === 3 ? 4 : prev.tutorialStep
        };
      }
      return prev;
    });
  };

  const handleSellUpgrade = useCallback((upgradeKey) => {
    const upgrade = UPGRADES[upgradeKey];
    
    setGameState(prev => {
      const currentLevel = prev[upgrade.id] || 0;
      if (currentLevel <= 0) return prev; // Cannot sell if you don't own it

      // Calculate the cost of the PREVIOUS level (what they paid to get to the current level)
      const paidCost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, currentLevel - 1));
      const refund = Math.floor(paidCost * 0.5); // 50% Refund
      
      return {
        ...prev,
        money: prev.money + refund,
        [upgrade.id]: currentLevel - 1
      };
    });
  }, []);

  // --- GAME LOOP (1 sec tick) ---
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTickGameId = gameIdRef.current; // Capture current lifecycle

      setGameState(prev => {
        if (!gameStartedRef.current) return prev; // Pause game logic while on Start Screen

        let next = { ...prev };
        next.ticks += 1;
        
        // Handle migration for old saves safely
        next.pastries = next.pastries || 0;
        next.pastryChefs = next.pastryChefs || 0;
        next.tipJar = next.tipJar || 0;

        let earnedThisTick = 0;
        let soldThisTick = 0;
        let brewedThisTick = 0; // NEW: Track brewing
        let bakedThisTick = 0;

        // Auto Bean
        if (next.autoBeanBuyer >= 1 && next.beans <= next.baristas && next.money >= next.beanCost) {
          const maxBatchesToBuy = Math.floor(next.money / next.beanCost);
          const batchesToBuy = Math.min(maxBatchesToBuy, Math.max(1, Math.ceil(next.baristas / next.beanBatchSize)));
          if (batchesToBuy > 0) {
            next.money -= batchesToBuy * next.beanCost;
            next.beans += batchesToBuy * next.beanBatchSize;
          }
        }

        // Auto Brew
        if (next.baristas > 0) {
          const brewAmount = Math.min(next.beans, next.baristas);
          if (brewAmount > 0) {
            next.beans -= brewAmount;
            next.coffees += brewAmount;
            next.totalBrewed += brewAmount;
            brewedThisTick = brewAmount; // Record successful brew
          }
        }

        // Auto Bake Pastries
        if (next.pastryChefs > 0) {
          next.pastries += next.pastryChefs;
          bakedThisTick = next.pastryChefs;
        }

        // Auto Sell
        const currentDemandTick = INITIAL_STATE.demand + (next.marketingLevel || 0);
        const sellAmount = Math.min(next.coffees, currentDemandTick);
        
        if (sellAmount > 0) {
          const basePrice = INITIAL_STATE.pricePerCoffee + ((next.premiumBeansLevel || 0) * 1.5);
          const pMult = 1 + ((next.goldenBeans || 0) * 0.50);
          let income = sellAmount * (basePrice * pMult);

          // Sell Pastries alongside coffee
          const pastriesToSell = Math.min(next.pastries, sellAmount);
          if (pastriesToSell > 0) {
            income += pastriesToSell * (4 * pMult); // $4 per pastry
            next.pastries -= pastriesToSell;
          }

          // Tip Jar chance
          if (next.tipJar > 0) {
            for (let i = 0; i < sellAmount; i++) {
              if (Math.random() < (0.15 + (next.tipJar * 0.05))) {
                income += (2 * pMult); // Flat $2 tip
              }
            }
          }

          next.coffees -= sellAmount;
          next.money += income;
          next.totalEarned += income;
          
          earnedThisTick = income;
          soldThisTick = sellAmount;

          // Tutorial Step 1 -> 2 (Wait for first sale)
          if (next.tutorialStep === 1) next.tutorialStep = 2;
        }

        // Visuals generation (Safe inside the setGameState callback to avoid dependency loops)
        let newPopupsToSpawn = [];
        const id = Date.now();

        if (earnedThisTick > 0) {
          const maxVisualCustomers = Math.min(soldThisTick, 15); // Tripled the visual max!
          const newCusts = Array.from({ length: maxVisualCustomers }).map((_, i) => ({
            id: `${id}-cust-${i}`,
            x: 10 + Math.random() * 80, // Spread across the whole counter better
            color: ['bg-blue-400', 'bg-emerald-400', 'bg-rose-400', 'bg-purple-400', 'bg-amber-400', 'bg-cyan-400'][Math.floor(Math.random()*6)]
          }));
          
          setCustomers(c => [...c.slice(-35), ...newCusts]); // Keep more customers visible
          
          setTimeout(() => {
            // Cancel delayed animation if the shop was demolished
            if (gameIdRef.current !== currentTickGameId) return; 

            setCustomers(c => c.filter(x => !newCusts.find(n => n.id === x.id)));
            // Money popup directly from customer location
            const newMoneyPopups = newCusts.map(c => ({ id: c.id, amount: earnedThisTick / newCusts.length, left: c.x, color: 'text-emerald-400' }));
            setPopups(p => [...p, ...newMoneyPopups]);
            
            setTimeout(() => {
              if (gameIdRef.current !== currentTickGameId) return; // Prevent ghosts
              setPopups(p => p.filter(x => !newMoneyPopups.find(n => n.id === x.id)));
            }, 1000);
          }, 2500); // Customers stay at counter a little longer
        }

        if (brewedThisTick > 0) {
          // Spawn a coffee cup popup to prove they are brewing!
          newPopupsToSpawn.push({
            id: `${id}-brew`,
            text: `+${brewedThisTick} ☕`,
            left: 45 + Math.random() * 10, // Center counter
            top: 38, // Slightly higher up
            color: 'text-amber-400'
          });
        }

        if (bakedThisTick > 0) {
          // Spawn a pastry popup
          newPopupsToSpawn.push({
            id: `${id}-bake`,
            text: `+${bakedThisTick} 🍩`,
            left: 20 + Math.random() * 10, // Over pastry case
            top: 38,
            color: 'text-orange-400'
          });
        }

        if (newPopupsToSpawn.length > 0) {
          setPopups(p => [...p, ...newPopupsToSpawn]);
          setTimeout(() => {
            if (gameIdRef.current !== currentTickGameId) return; // Prevent ghosts
            setPopups(p => p.filter(x => !newPopupsToSpawn.find(n => n.id === x.id)));
          }, 1000);
        }

        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- INPUT HANDLING ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showUpgrades) {
        if (e.key === 'Escape') setShowUpgrades(false);
        return; // Disable movement while in menu
      }
      
      const k = e.key.toLowerCase();
      if (k === 'w' || e.key === 'ArrowUp') keys.current.w = true;
      if (k === 'a' || e.key === 'ArrowLeft') keys.current.a = true;
      if (k === 's' || e.key === 'ArrowDown') keys.current.s = true;
      if (k === 'd' || e.key === 'ArrowRight') keys.current.d = true;
      if (e.key === ' ') {
        e.preventDefault();
        keys.current.space = true;
      }
    };

    const handleKeyUp = (e) => {
      const k = e.key.toLowerCase();
      if (k === 'w' || e.key === 'ArrowUp') keys.current.w = false;
      if (k === 'a' || e.key === 'ArrowLeft') keys.current.a = false;
      if (k === 's' || e.key === 'ArrowDown') keys.current.s = false;
      if (k === 'd' || e.key === 'ArrowRight') keys.current.d = false;
      if (e.key === ' ') keys.current.space = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [showUpgrades]);

  // --- MOVEMENT & COLLISION LOOP ---
  useEffect(() => {
    let animationFrameId;
    let spaceWasPressed = false;

    const gameLoop = () => {
      // 1. Calculate Input & Physics ONLY if not in a menu and game has started
      if (!showUpgrades && gameStartedRef.current) {
        let { x, y, angle } = playerPos.current;
        let dx = 0; let dy = 0;

        if (keys.current.w) dy -= PLAYER_SPEED;
        if (keys.current.s) dy += PLAYER_SPEED;
        if (keys.current.a) dx -= PLAYER_SPEED;
        if (keys.current.d) dx += PLAYER_SPEED;

        if (dx !== 0 || dy !== 0) {
          // Normalize diagonal movement
          const length = Math.sqrt(dx * dx + dy * dy);
          dx = (dx / length) * PLAYER_SPEED;
          dy = (dy / length) * PLAYER_SPEED;
          angle = Math.atan2(dy, dx) * (180 / Math.PI);
        }

        let nextX = x + dx;
        let nextY = y + dy;

        // --- COLLISIONS ---
        // Bounds
        nextX = Math.max(PLAYER_SIZE, Math.min(100 - PLAYER_SIZE, nextX));
        nextY = Math.max(PLAYER_SIZE, Math.min(100 - PLAYER_SIZE, nextY));

        // Counter Collision (Blocks movement crossing the Y=50 mark)
        const isCurrentlyBehind = y < COUNTER_Y;
        const isCurrentlyFront = y > COUNTER_Y + COUNTER_H;
        
        if (isCurrentlyBehind && nextY + PLAYER_SIZE > COUNTER_Y) {
          nextY = COUNTER_Y - PLAYER_SIZE; // Push back up
        } else if (isCurrentlyFront && nextY - PLAYER_SIZE < COUNTER_Y + COUNTER_H) {
          nextY = COUNTER_Y + COUNTER_H + PLAYER_SIZE; // Push back down
        }

        // Apply movement
        playerPos.current = { x: nextX, y: nextY, angle };
        
        // --- ZONE DETECTION ---
        let currentZone = null;
        for (const zone of ZONES) {
          // Simple AABB collision for zones
          if (
            nextX > zone.x && nextX < zone.x + zone.w &&
            nextY > zone.y && nextY < zone.y + zone.h
          ) {
            currentZone = zone;
            break;
          }
        }
        
        // Update state only if changed to avoid re-renders
        setActiveZone(prev => prev?.id !== currentZone?.id ? currentZone : prev);

        // --- ACTION HANDLING ---
        if (keys.current.space && !spaceWasPressed && currentZone) {
          if (currentZone.id === 'machine') handleBrewCoffee();
          if (currentZone.id === 'storage') handleBuyBeans();
          if (currentZone.id === 'desk') setShowUpgrades(true);
        }
        spaceWasPressed = keys.current.space;
      }

      // 2. ALWAYS Update 3D Scene (even if menu is open, so purchases show up live)
      if (window.THREE && sceneRef.current && rendererRef.current && meshesRef.current.player) {
        const THREE = window.THREE;

        // --- CINEMATIC CAMERA FOR START SCREEN ---
        if (!gameStartedRef.current) {
          const time = Date.now() / 3000;
          // Slowly orbit the shop
          cameraRef.current.position.set(Math.sin(time) * 70, 60, Math.cos(time) * 70);
          cameraRef.current.lookAt(0, 0, 0);
        } else {
          // Snap back to top-down play perspective
          cameraRef.current.position.set(0, 80, 80);
          cameraRef.current.lookAt(0, 0, 0);
        }
        
        // Update Player Position and Rotation
        const { x, y, angle } = playerPos.current;
        meshesRef.current.player.position.set(x - 50, 0, y - 50);
        meshesRef.current.player.rotation.y = -angle * (Math.PI / 180) + Math.PI / 2;

        // Sync Customers
        const activeIds = new Set(customersRef.current.map(c => c.id));
        
        customersRef.current.forEach(cust => {
          if (!meshesRef.current[cust.id]) {
            const group = new THREE.Group();
            
            // Body
            const bMat = new THREE.MeshStandardMaterial({ color: getHexColor(cust.color), roughness: 0.7 });
            const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 3.5, 16), bMat); // Wider at base
            bMesh.position.y = 1.75;
            bMesh.castShadow = true;
            group.add(bMesh);

            // Head
            const hMat = new THREE.MeshStandardMaterial({ color: '#fca5a5', roughness: 0.4 });
            const hMesh = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), hMat); // Larger head
            hMesh.position.y = 4.2;
            hMesh.castShadow = true;
            group.add(hMesh);

            // Add Arms
            const armGeo = new THREE.CylinderGeometry(0.35, 0.35, 2.2, 8);
            
            const armL = new THREE.Mesh(armGeo, bMat);
            armL.position.set(-1.5, 2.5, 0);
            armL.rotation.z = Math.PI / 6;
            armL.castShadow = true;
            group.add(armL);
            
            const armR = new THREE.Mesh(armGeo, bMat);
            armR.position.set(1.5, 2.5, 0);
            armR.rotation.z = -Math.PI / 6;
            armR.castShadow = true;
            group.add(armR);

            group.position.set(cust.x - 50, 0, 50); // Start at bottom screen edge
            sceneRef.current.add(group);
            meshesRef.current[cust.id] = { mesh: group, targetZ: 11 + Math.random() * 3, hopOffset: Math.random() * Math.PI * 2 };
          }
        });

        // Animate and Remove old customers
        const cTime = Date.now() / 150;
        for (const id in meshesRef.current) {
          if (id === 'player' || id === 'baristas' || id === 'pastryChefs') continue;
          if (!activeIds.has(id)) {
            sceneRef.current.remove(meshesRef.current[id].mesh);
            delete meshesRef.current[id];
          } else {
            const c = meshesRef.current[id];
            if (c.mesh.position.z > c.targetZ) {
              c.mesh.position.z -= 0.6; // Walk speed towards counter
              // Hopping animation while walking
              c.mesh.position.y = Math.abs(Math.sin(cTime + c.hopOffset)) * 1.5;
              c.mesh.rotation.y = Math.sin(cTime * 0.5 + c.hopOffset) * 0.2;
            } else {
              // Reached counter, stand still
              c.mesh.position.y = 0;
              c.mesh.rotation.y = 0;
            }
          }
        }

        // Sync Baristas
        if (!meshesRef.current.baristas) {
          meshesRef.current.baristas = new THREE.Group();
          sceneRef.current.add(meshesRef.current.baristas);
        }
        
        const baristaGroup = meshesRef.current.baristas;

        // Cleanup excess baristas (e.g. if player triggered a hard reset)
        while (baristaGroup.children.length > baristasRef.current) {
          baristaGroup.remove(baristaGroup.children[baristaGroup.children.length - 1]);
        }
        
        // Add newly hired baristas
        while (baristaGroup.children.length < baristasRef.current) {
          const i = baristaGroup.children.length;
          const bParent = new THREE.Group();
          
          const bMat = new THREE.MeshStandardMaterial({ color: '#f59e0b' }); // Amber color for staff
          const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 4, 16), bMat);
          bMesh.position.y = 2; 
          bMesh.castShadow = true;
          bParent.add(bMesh);

          const hMat = new THREE.MeshStandardMaterial({ color: '#fca5a5' });
          const hMesh = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 16), hMat);
          hMesh.position.y = 4.5;
          hMesh.castShadow = true;
          bParent.add(hMesh);

          // Position directly behind the counter, lined up to face customers
          const row = Math.floor(i / 8);
          const col = i % 8;
          const bX = -18 + (col * 5); // Spread along the counter width
          const bZ = -2 - (row * 4); // Right behind Z=0 back edge of counter
          
          bParent.position.set(bX, 0, bZ);
          baristaGroup.add(bParent);
        }

        // Animate Baristas (make them look busy)
        const time = Date.now() / 200;
        baristaGroup.children.forEach((b, i) => {
          b.position.y = Math.abs(Math.sin(time + i)) * 0.5; // Slight bounce
          b.rotation.y = Math.sin(time * 0.5 + i) * 0.3; // Slight twist
        });

        // Sync Pastry Chefs
        if (!meshesRef.current.pastryChefs) {
          meshesRef.current.pastryChefs = new THREE.Group();
          sceneRef.current.add(meshesRef.current.pastryChefs);
        }
        
        const chefGroup = meshesRef.current.pastryChefs;

        while (chefGroup.children.length > pastryChefsRef.current) {
          chefGroup.remove(chefGroup.children[chefGroup.children.length - 1]);
        }
        
        while (chefGroup.children.length < pastryChefsRef.current) {
          const i = chefGroup.children.length;
          const cParent = new THREE.Group();
          
          const cMat = new THREE.MeshStandardMaterial({ color: '#f3f4f6' }); // White coat
          const cMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 4, 16), cMat);
          cMesh.position.y = 2; 
          cMesh.castShadow = true;
          cParent.add(cMesh);

          const hMat = new THREE.MeshStandardMaterial({ color: '#fca5a5' });
          const hMesh = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 16), hMat);
          hMesh.position.y = 4.5;
          hMesh.castShadow = true;
          cParent.add(hMesh);

          // Chef Hat
          const hatMat = new THREE.MeshStandardMaterial({ color: '#ffffff' });
          const hatMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 1.5, 16), hatMat);
          hatMesh.position.y = 6;
          hatMesh.castShadow = true;
          cParent.add(hatMesh);

          // Position behind the pastry display (display is at x=-25)
          const row = Math.floor(i / 4);
          const col = i % 4;
          const cX = -28 + (col * 5); 
          const cZ = -2 - (row * 4); 
          
          cParent.position.set(cX, 0, cZ);
          chefGroup.add(cParent);
        }

        chefGroup.children.forEach((c, i) => {
          c.position.y = Math.abs(Math.sin(time + i)) * 0.5;
          c.rotation.y = Math.sin(time * 0.5 + i) * 0.3;
        });

        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [showUpgrades, handleBrewCoffee, handleBuyBeans]);

  // --- THREE.JS INITIALIZATION ---
  useEffect(() => {
    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = initializeScene;
      document.head.appendChild(script);
    } else {
      initializeScene();
    }

    function initializeScene() {
      if (!mountRef.current) return;
      const THREE = window.THREE;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#1c1917');
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
      camera.position.set(0, 80, 80);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.shadowMap.enabled = true;
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lights
      const ambient = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambient);
      const dirLight = new THREE.DirectionalLight(0xffdfb0, 0.8);
      dirLight.position.set(20, 50, 20);
      dirLight.castShadow = true;
      scene.add(dirLight);

      // Floor
      const floorGeo = new THREE.PlaneGeometry(100, 100);
      const floorMat = new THREE.MeshStandardMaterial({ color: '#292524' });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      scene.add(floor);

      // Counter Base
      const counterGeo = new THREE.BoxGeometry(100, 5.5, 9); 
      const counterMat = new THREE.MeshStandardMaterial({ color: '#451a03', roughness: 0.9 });
      const counter = new THREE.Mesh(counterGeo, counterMat);
      counter.position.set(0, 2.75, 5); 
      counter.castShadow = true;
      counter.receiveShadow = true;
      scene.add(counter);

      // Counter Top (Marble/White finish)
      const topGeo = new THREE.BoxGeometry(102, 0.8, 10.5); 
      const topMat = new THREE.MeshStandardMaterial({ color: '#f3f4f6', roughness: 0.1, metalness: 0.1 });
      const counterTop = new THREE.Mesh(topGeo, topMat);
      counterTop.position.set(0, 5.9, 5.2);
      counterTop.castShadow = true;
      counterTop.receiveShadow = true;
      scene.add(counterTop);

      // Pastry Display Case (Visual flair)
      const displayGroup = new THREE.Group();
      displayGroup.position.set(-25, 6.3, 5);

      const glassGeo = new THREE.BoxGeometry(14, 4, 6);
      const glassMat = new THREE.MeshStandardMaterial({ color: '#93c5fd', transparent: true, opacity: 0.3, roughness: 0.1 });
      const displayCase = new THREE.Mesh(glassGeo, glassMat);
      displayCase.position.y = 2;
      displayGroup.add(displayCase);

      const pastryGeo = new THREE.TorusGeometry(0.6, 0.3, 8, 16);
      const pastryMat = new THREE.MeshStandardMaterial({ color: '#d97706', roughness: 0.8 });
      for(let i=0; i<3; i++) {
        const pastry = new THREE.Mesh(pastryGeo, pastryMat);
        pastry.rotation.x = Math.PI / 2;
        pastry.position.set(-4 + i*4, 0.4, 0);
        pastry.castShadow = true;
        displayGroup.add(pastry);
      }
      scene.add(displayGroup);

      // Player
      const playerGroup = new THREE.Group();
      const bodyGeo = new THREE.CylinderGeometry(1.5, 1.5, 4, 16);
      const bodyMat = new THREE.MeshStandardMaterial({ color: '#2563eb' });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 2;
      body.castShadow = true;
      playerGroup.add(body);

      const headGeo = new THREE.SphereGeometry(1.2, 16, 16);
      const headMat = new THREE.MeshStandardMaterial({ color: '#e5e7eb' });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 4.5;
      head.castShadow = true;
      playerGroup.add(head);

      const noseGeo = new THREE.BoxGeometry(0.5, 0.5, 1);
      const noseMat = new THREE.MeshStandardMaterial({ color: '#d1d5db' });
      const nose = new THREE.Mesh(noseGeo, noseMat);
      nose.position.set(0, 4.5, 1.2);
      playerGroup.add(nose);

      scene.add(playerGroup);
      meshesRef.current.player = playerGroup;

      // --- INTERACTION ZONES & MODELS ---

      // 1. Management PC (Computer)
      const pcGroup = new THREE.Group();
      pcGroup.position.set(17.5 - 50, 0, 22.5 - 50);
      
      // Mat
      const pcMat = new THREE.Mesh(new THREE.BoxGeometry(15, 0.2, 15), new THREE.MeshStandardMaterial({ color: '#312e81' }));
      pcMat.position.y = 0.1;
      pcGroup.add(pcMat);

      // Desk
      const desk = new THREE.Mesh(new THREE.BoxGeometry(10, 4, 6), new THREE.MeshStandardMaterial({ color: '#1f2937' }));
      desk.position.y = 2; desk.castShadow = true; desk.receiveShadow = true;
      pcGroup.add(desk);

      // Monitor Stand
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 2), new THREE.MeshStandardMaterial({ color: '#374151' }));
      stand.position.set(0, 5, -1);
      pcGroup.add(stand);

      // Monitor Screen
      const monitor = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 0.5), new THREE.MeshStandardMaterial({ color: '#111827' }));
      monitor.position.set(0, 6.5, -1); monitor.castShadow = true;
      pcGroup.add(monitor);

      // Glowing Display
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 3.5), new THREE.MeshBasicMaterial({ color: '#4f46e5' }));
      screen.position.set(0, 6.5, -0.74);
      pcGroup.add(screen);

      // Keyboard
      const kb = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 1.2), new THREE.MeshStandardMaterial({ color: '#9ca3af' }));
      kb.position.set(0, 4.1, 1);
      pcGroup.add(kb);

      scene.add(pcGroup);

      // 2. Espresso Machine
      const espressoGroup = new THREE.Group();
      espressoGroup.position.set(51 - 50, 0, 21 - 50);

      // Mat
      const espMat = new THREE.Mesh(new THREE.BoxGeometry(12, 0.2, 12), new THREE.MeshStandardMaterial({ color: '#d6d3d1' }));
      espMat.position.y = 0.1;
      espressoGroup.add(espMat);

      // Table Base
      const eTable = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 6), new THREE.MeshStandardMaterial({ color: '#78350f' }));
      eTable.position.y = 2; eTable.castShadow = true; eTable.receiveShadow = true;
      espressoGroup.add(eTable);

      // Machine Body
      const mBody = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 4), new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.2 }));
      mBody.position.set(0, 6.5, -0.5); mBody.castShadow = true;
      espressoGroup.add(mBody);

      // Machine Top
      const mTop = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1, 5), new THREE.MeshStandardMaterial({ color: '#1f2937' }));
      mTop.position.set(0, 9.5, 0); mTop.castShadow = true;
      espressoGroup.add(mTop);

      // Spout
      const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1), new THREE.MeshStandardMaterial({ color: '#d1d5db' }));
      spout.position.set(0, 8.5, 1.5);
      espressoGroup.add(spout);

      // Coffee Cup
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 1), new THREE.MeshStandardMaterial({ color: '#ffffff' }));
      cup.position.set(0, 4.5, 1.5); cup.castShadow = true;
      espressoGroup.add(cup);

      scene.add(espressoGroup);

      // 3. Storage Area (Boxes of Beans)
      const storageGroup = new THREE.Group();
      storageGroup.position.set(87.5 - 50, 0, 22.5 - 50);

      // Mat
      const storeMat = new THREE.Mesh(new THREE.BoxGeometry(15, 0.2, 15), new THREE.MeshStandardMaterial({ color: '#78350f' }));
      storeMat.position.y = 0.1;
      storageGroup.add(storeMat);

      // Pallet
      const pallet = new THREE.Mesh(new THREE.BoxGeometry(10, 0.5, 10), new THREE.MeshStandardMaterial({ color: '#451a03' }));
      pallet.position.y = 0.45; pallet.castShadow = true; pallet.receiveShadow = true;
      storageGroup.add(pallet);

      // Boxes Function
      const makeBox = (x, y, z, rot) => {
        const box = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshStandardMaterial({ color: '#b45309' }));
        box.position.set(x, y, z); box.rotation.y = rot;
        box.castShadow = true; box.receiveShadow = true;
        storageGroup.add(box);
      };

      makeBox(-2, 2.7, -2, 0.1);
      makeBox(2, 2.7, -1, -0.2);
      makeBox(0, 2.7, 2, 0.05);
      makeBox(-0.5, 6.7, -0.5, 0.3); // Stacked on top

      scene.add(storageGroup);

      const onResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  const formatMoney = (amount) => `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="h-screen w-full bg-stone-950 font-sans select-none overflow-hidden flex flex-col relative text-stone-100">
      
      {/* START SCREEN OVERLAY */}
      {!gameStarted && (
        <div className="absolute inset-0 z-[100] bg-stone-950/60 backdrop-blur-md flex flex-col items-center justify-center p-4">
           <div className="bg-stone-900 border border-stone-700 p-6 sm:p-10 rounded-[2rem] shadow-2xl flex flex-col items-center text-center animate-[popIn_0.5s_ease-out] w-full max-w-md">
              <div className="bg-amber-600 p-5 rounded-3xl text-white mb-6 shadow-[0_10px_20px_rgba(217,119,6,0.3)]">
                <Coffee className="w-16 h-16" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600 mb-2 drop-shadow-md leading-tight">Coffee Shop</h1>
              <h2 className="text-xl sm:text-2xl font-black text-stone-400 tracking-[0.3em] uppercase mb-10">Tycoon</h2>
              
              <button 
                onClick={() => setGameStarted(true)}
                className="w-full px-8 py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-white text-xl tracking-wide transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] active:scale-95 hover:-translate-y-1"
              >
                {gameState.totalEarned > 0 ? 'CONTINUE GAME' : 'START NEW GAME'}
              </button>
              
              {gameState.totalEarned > 0 && (
                 <button
                   onClick={() => setShowResetConfirm(true)}
                   className="mt-6 text-sm font-bold text-stone-500 hover:text-red-400 transition-colors"
                 >
                   Reset Progress
                 </button>
              )}
           </div>
        </div>
      )}

      {/* HUD (Heads Up Display) */}
      {gameStarted && (
        <header className="absolute top-0 inset-x-0 z-50 p-4 flex justify-between items-start pointer-events-none animate-[popIn_0.3s_ease-out]">
          <div className="flex flex-col gap-2 pointer-events-auto">
            <div className="bg-stone-900/90 backdrop-blur border border-stone-700 p-3 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-amber-600 p-2 rounded-xl text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight leading-none mb-1">Coffee Shop</h1>
                <div className="text-xs font-bold text-stone-400">Day {Math.floor(gameState.ticks / 144) + 1}</div>
              </div>
            </div>
            <button 
              onClick={() => setShowResetConfirm(true)}
              className="self-start text-xs font-bold bg-red-900/40 text-red-400 px-3 py-1.5 rounded-lg border border-red-900 hover:bg-red-800 transition-colors"
            >
              Reset Game
            </button>
          </div>

          <div className="flex gap-2">
             {/* Inventory Stats */}
             <div className="bg-stone-900/90 backdrop-blur border border-stone-700 p-3 rounded-2xl shadow-xl flex flex-col items-end pointer-events-auto">
              <span className="text-[10px] font-bold text-stone-500 uppercase">Inventory</span>
              <div className="flex gap-4 mt-1">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-orange-400 font-bold">{gameState.pastries || 0}</span>
                  <span className="text-[10px] text-stone-400">Pastries</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-amber-500 font-bold">{gameState.beans}</span>
                  <span className="text-[10px] text-stone-400">Beans</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-stone-300 font-bold">{gameState.coffees}</span>
                  <span className="text-[10px] text-stone-400">Coffees</span>
                </div>
              </div>
            </div>

            {/* Prestige Stats */}
            {gameState.goldenBeans > 0 && (
              <div className="bg-stone-900/90 backdrop-blur border border-amber-500/30 p-3 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center gap-3 pointer-events-auto">
                <div className="bg-amber-500/20 p-2 rounded-xl border border-amber-500/50">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-0.5">Golden Beans</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-amber-400 leading-none">{gameState.goldenBeans}</span>
                    <span className="text-xs font-bold text-amber-600">({prestigeMultiplier}x)</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-stone-900/90 backdrop-blur border border-emerald-900 p-3 rounded-2xl shadow-xl flex flex-col items-end pointer-events-auto min-w-[120px]">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1">Company Funds</span>
              <span className="text-xl font-black text-emerald-400 drop-shadow-md leading-none">
                {formatMoney(gameState.money)}
              </span>
            </div>
          </div>
        </header>
      )}

      {/* TUTORIAL OVERLAY */}
      {gameStarted && gameState.tutorialStep < 5 && (
        <div className={`absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-50 p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md border-2 text-center min-w-[320px] max-w-[90%] transition-all duration-500 ${
          gameState.tutorialStep === 4 ? 'bg-emerald-900/90 border-emerald-400 animate-[popIn_0.3s_ease-out]' : 'bg-blue-900/90 border-blue-400 animate-bounce'
        }`}>
           <h3 className={`font-black text-xs uppercase tracking-widest mb-2 ${gameState.tutorialStep === 4 ? 'text-emerald-300' : 'text-blue-300'}`}>
              {gameState.tutorialStep === 4 ? 'Tutorial Complete!' : `Tutorial: Step ${gameState.tutorialStep + 1}/4`}
           </h3>
           <p className="text-white font-bold text-sm mb-3">
              {gameState.tutorialStep === 0 && "Use WASD or Arrows to walk to the red Espresso Machine and press SPACE to brew coffee."}
              {gameState.tutorialStep === 1 && "Great job! Now wait for a customer to buy the coffee. (They arrive automatically)"}
              {gameState.tutorialStep === 2 && "You made money! Walk to the brown Storage Pallet and press SPACE to order Beans."}
              {gameState.tutorialStep === 3 && "Time to expand! Walk to the Management PC and press SPACE to buy your first upgrade."}
              {gameState.tutorialStep === 4 && "You're ready to build your coffee empire! Enjoy!"}
           </p>
           {gameState.tutorialStep === 4 && (
             <button 
               onClick={() => setGameState(p => ({...p, tutorialStep: 5}))} 
               className="bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-black px-6 py-2 rounded-lg text-xs transition-colors shadow-lg active:scale-95"
             >
                Let's Go!
             </button>
           )}
        </div>
      )}

      {/* INTERACTIVE PLAY AREA (The Shop Floor) */}
      <main ref={mountRef} className="flex-1 relative bg-stone-900 overflow-hidden shadow-inner cursor-crosshair">
        
        {/* FLOATING POPUPS */}
        {popups.map(popup => (
          <div key={popup.id}
               className={`absolute z-30 font-black text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-[floatUp_1s_ease-out_forwards] ${popup.color || 'text-emerald-400'}`}
               style={{ left: `${popup.left}%`, top: popup.top ? `${popup.top}%` : `45%` }}>
            {popup.text || `+${formatMoney(popup.amount)}`}
          </div>
        ))}

        {/* INTERACTION OVERLAY PROMPT */}
        {gameStarted && activeZone && !showUpgrades && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-6 py-3 rounded-full font-black shadow-[0_10px_25px_rgba(0,0,0,0.3)] animate-bounce flex items-center gap-3 z-50">
            <span className="bg-stone-200 border-2 border-stone-400 px-2 py-0.5 rounded text-xs font-bold text-stone-600">SPACE</span>
            {activeZone.action}
          </div>
        )}

        {/* MOVEMENT INSTRUCTIONS (Hidden once user starts moving) */}
        {gameStarted && !activeZone && gameState.ticks < 10 && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-400 text-sm font-bold opacity-50 flex gap-4">
            <span>WASD / Arrows to move</span>
          </div>
        )}
      </main>

      {/* MODAL: CORPORATE UPGRADES (The Management PC) */}
      {showUpgrades && (
        <div className="absolute inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
          <div className="bg-stone-950 border border-stone-700 w-full max-w-4xl max-h-full rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[popIn_0.2s_ease-out]">
            
            {/* Modal Header */}
            <div className="bg-indigo-900 border-b border-indigo-700 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Monitor className="w-6 h-6 text-indigo-300" />
                <h2 className="text-xl font-black text-white tracking-wide">CoffeeOS Management System</h2>
              </div>
              <button 
                onClick={() => setShowUpgrades(false)}
                className="p-2 bg-indigo-950 hover:bg-red-900 hover:text-white rounded-lg text-indigo-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-stone-900">
              
              {/* REBIRTH / FRANCHISE CARD */}
              {(gameState.totalEarned > 1000 || gameState.goldenBeans > 0) && (
                <div className="mb-6 bg-gradient-to-r from-amber-900/40 to-stone-900 border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(245,158,11,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="p-4 rounded-xl bg-amber-500/20 border-2 border-amber-500/50 text-amber-400 shrink-0">
                      <Crown className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-amber-400 tracking-wide">Franchise Shop (Prestige)</h3>
                      <p className="text-sm text-stone-400 font-medium">Sell this location to earn <span className="text-amber-500 font-bold">Golden Beans</span>. Each bean gives +50% permanent profit!</p>
                      <p className="text-xs text-stone-500 mt-1">Next bean at {formatMoney(Math.pow(pendingGoldenBeans + 1, 2) * 1000)} total earned.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRebirthConfirm(true)}
                    disabled={pendingGoldenBeans <= 0}
                    className={`w-full sm:w-auto px-6 py-4 rounded-xl font-black tracking-widest transition-all shrink-0 ${
                      pendingGoldenBeans > 0
                        ? 'bg-amber-600 hover:bg-amber-500 text-stone-900 shadow-[0_0_15px_rgba(245,158,11,0.4)] active:scale-95'
                        : 'bg-stone-900 text-stone-600 border border-stone-800 cursor-not-allowed'
                    }`}
                  >
                    FRANCHISE (+{pendingGoldenBeans} BEANS)
                  </button>
                </div>
              )}

              <div className="grid gap-4">
                {Object.entries(UPGRADES).map(([key, upgrade]) => {
                  const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, gameState[upgrade.id] || 0));
                  const level = gameState[upgrade.id] || 0;
                  const isMaxed = upgrade.maxLevel !== null && level >= upgrade.maxLevel;
                  const canAfford = gameState.money >= cost && !isMaxed;
                  const Icon = upgrade.icon;
                  
                  // Calculate refund value (50% of what was paid for the current level)
                  const refundCost = level > 0 ? Math.floor((upgrade.baseCost * Math.pow(upgrade.costMultiplier, level - 1)) * 0.5) : 0;

                  return (
                    <div 
                      key={key} 
                      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        canAfford ? 'bg-indigo-900/20 border-indigo-500/50 hover:bg-indigo-900/40' : 'bg-stone-950 border-stone-800'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                        <div className={`p-4 rounded-xl border-2 shrink-0 ${canAfford ? 'bg-indigo-950 border-indigo-500 text-indigo-400' : 'bg-stone-900 border-stone-800 text-stone-600'}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`text-lg font-black ${canAfford ? 'text-white' : 'text-stone-400'}`}>{upgrade.name}</h3>
                            <span className="text-xs font-black px-2 py-0.5 rounded-md bg-black border border-stone-700 text-stone-400 shrink-0">
                              LVL {level}{upgrade.maxLevel ? `/${upgrade.maxLevel}` : ''}
                            </span>
                          </div>
                          <p className="text-sm text-stone-500 font-medium">{upgrade.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
                        {level > 0 && (
                          <button
                            onClick={() => handleSellUpgrade(key)}
                            className="w-full sm:w-auto px-4 py-3 rounded-xl font-black tracking-widest transition-all bg-red-950/50 hover:bg-red-900 text-red-400 border border-red-900/50 active:scale-95 text-xs sm:text-sm shadow-[0_0_10px_rgba(220,38,38,0.1)]"
                          >
                            SELL (+{formatMoney(refundCost)})
                          </button>
                        )}
                        <button
                          onClick={() => handleBuyUpgrade(key)}
                          disabled={!canAfford}
                          className={`w-full sm:w-auto px-6 py-4 sm:py-3 rounded-xl font-black tracking-widest transition-all ${
                            isMaxed 
                              ? 'bg-stone-900 text-stone-600 border border-stone-800 cursor-not-allowed'
                              : canAfford
                                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] active:scale-95'
                                : 'bg-stone-900 text-stone-600 border border-stone-800 cursor-not-allowed'
                          }`}
                        >
                          {isMaxed ? 'MAXIMUM' : formatMoney(cost)}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="bg-stone-950 p-4 border-t border-stone-800 flex justify-between items-center text-xs font-bold text-stone-500">
              <span>SYSTEM ONLINE</span>
              <span>Available Funds: <span className="text-emerald-500">{formatMoney(gameState.money)}</span></span>
            </div>

          </div>
        </div>
      )}

      {/* CUSTOM CONFIRM MODAL */}
      {showResetConfirm && (
        <div className="absolute inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 pointer-events-auto">
          <div className="bg-stone-900 border border-stone-700 p-6 rounded-2xl shadow-2xl max-w-sm text-center animate-[popIn_0.2s_ease-out]">
            <h2 className="text-xl font-black text-red-500 mb-2">Demolish Shop?</h2>
            <p className="text-stone-300 mb-6 font-medium">Are you sure you want to fire everyone and lose all your progress? This cannot be undone!</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowResetConfirm(false)}
                className="px-6 py-2 bg-stone-700 hover:bg-stone-600 rounded-xl font-black text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmReset}
                className="px-6 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-black text-white transition-colors shadow-lg"
              >
                Demolish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REBIRTH CONFIRM MODAL */}
      {showRebirthConfirm && (
        <div className="absolute inset-0 z-[120] bg-black/80 flex items-center justify-center p-4 pointer-events-auto backdrop-blur-sm">
          <div className="bg-stone-900 border-2 border-amber-500/50 p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.2)] max-w-md text-center animate-[popIn_0.3s_ease-out]">
            <div className="mx-auto w-16 h-16 bg-amber-500/20 border border-amber-500/50 rounded-2xl flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-2xl font-black text-amber-400 mb-2">Franchise Your Shop</h2>
            <p className="text-stone-300 mb-6 font-medium">
              You will sell your current shop and lose all money, beans, and upgrades. In exchange, you will earn <span className="text-amber-500 font-bold text-lg">{pendingGoldenBeans} Golden Beans</span>.
              <br/><br/>
              Your new multiplier will be <span className="text-emerald-400 font-bold text-lg">{((prestigeMultiplier + (pendingGoldenBeans * 0.50)) * 100).toFixed(0)}%</span>!
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowRebirthConfirm(false)}
                className="px-6 py-3 bg-stone-800 hover:bg-stone-700 rounded-xl font-black text-white transition-colors flex-1"
              >
                Keep Playing
              </button>
              <button 
                onClick={handleConfirmRebirth}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-900 rounded-xl font-black transition-colors shadow-[0_0_15px_rgba(245,158,11,0.4)] flex-1"
              >
                Franchise Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes walkUp {
          from { transform: translateY(50px) scale(0.8); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-80px) scale(1); opacity: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}
