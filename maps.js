/* FILENAME: map.js
   PURPOSE: R6 Tactical Database & Strat Generator
*/

const mapDatabase = {
    'oregon': {
        link: 'https://r6calls.com/maps/oregon',
        callouts: ['Laundry', 'Kids Dorms', 'Big Tower', 'Freezer'],
        bestOps: ['Smoke', 'Azami', 'Kaid', 'Ying'],
        strats: [
            "THE LAUNDRY TURTLE: Smoke/Mute hold downstairs. Deny the hatch drop.",
            "THE BIG TOWER FLANK: Roam heavy in Attic/Tower to cut off 2F attacks.",
            "GLAZ/YING EXECUTE: Smoke out the site and plant in the chaos."
        ]
    },
    'clubhouse': {
        link: 'https://r6calls.com/maps/clubhouse',
        callouts: ['CCTV', 'Cash', 'Garage', 'Tunnel'],
        bestOps: ['Bandit', 'Maverick', 'Valkyrie', 'Capital'],
        strats: [
            "BANDIT TRICK: Dedicate one player to actively tricking the CCTV wall.",
            "SSG ROAM: Extend defense into Bedroom/Gym to deny vertical play.",
            "MAVERICK TORCH: Make murder holes in the reinforcements instead of opening them."
        ]
    },
    'coastline': {
        link: 'https://r6calls.com/maps/coastline',
        callouts: ['Hookah', 'Billards', 'VIP', 'Penthouse'],
        bestOps: ['Doc', 'Valkyrie', 'Lion', 'Amaru'],
        strats: [
            "AGGRESSIVE PEEK: Spawn peek from Sunrise Bar or Ruins.",
            "VERTICAL PRESSURE: Buck/Sledge form above (VIP) onto Kitchen.",
            "THE RUSH: Amaru into Penthouse window immediately."
        ]
    },
    'consulate': {
        link: 'https://r6calls.com/maps/consulate',
        callouts: ['Garage', 'Piano', 'Yellow Stairs', 'Admin'],
        bestOps: ['Nomad', 'Blackbeard', 'Goyo', 'Thermite'],
        strats: [
            "YELLOW STAIRS HOLD: Use a shotgun/shield to lock down Yellow Stairs.",
            "RAPPEL HELL: Attackers hang upside down on windows. Defenders stay prone.",
            "GARAGE BREACH: Thermite/Thatcher mandatory for the main wall."
        ]
    },
    'bank': {
        link: 'https://r6calls.com/maps/bank',
        callouts: ['Open Area', 'Lockers', 'Square', 'CEO'],
        bestOps: ['Mira', 'Hibana', 'Kali', 'Pulse'],
        strats: [
            "PULSE SCAN: Play Pulse in Gold Vault to C4 the plant from below.",
            "KALI SNIPE: Hold long angles from Parking Garage into Lobby.",
            "OPEN AREA HOLD: Reinforce hatches and play Mira facing the skylight."
        ]
    },
    'chalet': {
        link: 'https://r6calls.com/maps/chalet',
        callouts: ['Snowmobile', 'Wine', 'Library', 'Mezzanine'],
        bestOps: ['Frost', 'Thatcher', 'Solis', 'Osa'],
        strats: [
            "SOLIS DENIAL: Use Solis to hunt drones in the prep phase.",
            "OSA PUSH: Use Osa shields to plant safely in the garage breach.",
            "LIBRARY CONTROL: Defenders must hold Library to protect the top floor."
        ]
    },
    'kafe': {
        link: 'https://r6calls.com/maps/kafe-dostoyevsky',
        callouts: ['Piano', 'Skylight', 'Bakery', 'Freezer'],
        bestOps: ['Castle', 'Wamai', 'Nokk', 'Zero'],
        strats: [
            "PIANO HOLD: Castle off the Piano room and waste attacker utility.",
            "SKYLIGHT DROP: Hot drop the skylight with Amaru or rapid repel.",
            "BELOW C4: Valkyrie cams in reading room for C4 kills on new hatch."
        ]
    }
};

// --- FUNCTIONS LINKED TO HTML ---

function updateStratDisplay() {
    const selector = document.getElementById('r6-map-select');
    const mapKey = selector.value;
    const data = mapDatabase[mapKey];

    if (!data) return;

    // Update UI Elements
    document.getElementById('ops-list').innerText = data.bestOps.join(' // ');
    document.getElementById('callouts-list').innerText = data.callouts.join(' - ');
    
    // Reset Strat Text
    document.getElementById('active-strat').innerText = "Select 'ROLL STRAT' to generate a plan.";
    document.getElementById('active-strat').style.color = "#555";
}

function generateStrat() {
    const selector = document.getElementById('r6-map-select');
    const mapKey = selector.value;
    const data = mapDatabase[mapKey];

    if (data) {
        // Pick random strat
        const randomStrat = data.strats[Math.floor(Math.random() * data.strats.length)];
        
        // Display it with animation effect
        const display = document.getElementById('active-strat');
        display.style.opacity = 0;
        display.innerText = randomStrat;
        display.style.color = "#22c55e"; // Success Green
        
        // Fade in
        setTimeout(() => { display.style.opacity = 1; }, 100);
    }
}

function launchR6Calls() {
    const selector = document.getElementById('r6-map-select');
    const mapKey = selector.value;
    const data = mapDatabase[mapKey];
    
    if(data) {
        window.open(data.link, 'R6StratBoard', 'width=1200,height=800,menubar=no,toolbar=no');
    }
}

// Initialize on load
window.onload = function() {
    updateStratDisplay();
};
