// Sea Configuration
const beachSeaTileSheet = new Image();
beachSeaTileSheet.src = 'static/images/sea-beach-tileset.png';

const beachTileSheet = new Image();
beachTileSheet.src = 'static/images/forest-tileset.png';

const BEACH_TILE_REFERENCE = {
    "d-t-l-": {x: 0, y: 0, description: "dark grass patch top left corner"},
    "d-b-l": {x: 1, y: 0, description: "dark grass patch bottom left corner"},
    "d-t-r": {x: 0, y: 1, description: "dark grass patch top right corner"},
    "d-b-r": {x: 1, y: 1, description: "dark grass patch bottom right corner"},
    "d-h": {x: 0, y: 2, description: "dark grass patch horizontal path"},
    "d-v": {x: 1, y: 2, description: "dark grass patch vertical path"},
    "d-e": {x: 0, y: 3, description: "dark grass patch empty patch"},
    "i-l-t-l": {x: 1, y: 3, description: "inner light grass patch top left corner"},
    "i-l-b-l": {x: 0, y: 4, description: "inner light grass patch bottom left corner"},
    "i-l-t-r": {x: 1, y: 4, description: "inner light grass patch top right corner"},
    "i-l-b-r": {x: 0, y: 5, description: "inner light grass patch bottom right corner"},
    "o-l-t-l": {x: 1, y: 5, description: "outer light grass patch top left corner"},
    "o-l-b-l": {x: 0, y: 6, description: "outer light grass patch bottom left corner"},
    "o-l-t-r": {x: 1, y: 6, description: "outer light grass patch top right corner"},
    "o-l-b-r": {x: 0, y: 7, description: "outer light grass patch bottom right corner"},
    "l-t-h": {x: 1, y: 7, description: "light grass patch top horizontal path"},
    "l-b-h": {x: 0, y: 8, description: "light grass patch bottom horizontal path"},
    "l-r-v": {x: 1, y: 8, description: "light grass patch right vertical path"},
    "l-l-v": {x: 0, y: 9, description: "light grass patch left vertical path"},
    "l-e": {x: 1, y: 9, description: "light grass patch empty patch"}
};

const BEACH_TILEMAP = [
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"]
]

let beachBackgroundCache = null;
let beachCacheCtx = null;
let beachCacheReady = false;

// Initialize background cache
function initializeBeachBackgroundCache() {
    beachBackgroundCache = document.createElement('canvas');
    beachBackgroundCache.width = BEACH_TILEMAP[0].length * GAME_CONFIG.TILE_SIZE; // 40 *64 = 1920
    beachBackgroundCache.height = BEACH_TILEMAP.length * GAME_CONFIG.TILE_SIZE; // 40 * 64 = 1920
    beachCacheCtx = beachBackgroundCache.getContext('2d');

    console.log(`Background Cache Initilaized: ${beachBackgroundCache.width}x${beachBackgroundCache.height}`);
}

// Render the entire tilemap to the off-screen canvas
function renderBeachBackgroundCache() {
    if (!beachTileSheet.complete || !beachBackgroundCache) {
        console.log("Waiting for tileset to load or cache to initialize...");
        return false;
    }
    
    console.log("Rendering background cache...");
    
    // Clear the cache canvas
    beachCacheCtx.fillStyle = '#0d0d0dff';
    beachCacheCtx.fillRect(0, 0, beachBackgroundCache.width, beachBackgroundCache.height);
    
    const mapWidth = BEACH_TILEMAP[0].length;
    const mapHeight = BEACH_TILEMAP.length;
    
    // Draw ALL tiles to the cache
    for (let row = 0; row < mapHeight; row++) {
        for (let col = 0; col < mapWidth; col++) {
            const tileName = BEACH_TILEMAP[row][col];
            const tileData = BEACH_TILE_REFERENCE[tileName];

            if (!tileData || tileData.x < 0 || tileData.y < 0) continue; // Skip empty/invalid tiles
            

            const tileX = tileData.x * GAME_CONFIG.TILE_SIZE;
            const tileY = tileData.y * GAME_CONFIG.TILE_SIZE;
            const worldX = col * GAME_CONFIG.TILE_SIZE;
            const worldY = row * GAME_CONFIG.TILE_SIZE;
            
            // Draw tile directly to cache canvas using stored coordinates
            beachCacheCtx.drawImage(
                beachTileSheet,
                tileX, tileY,  // Coordinates from tile reference
                GAME_CONFIG.TILE_SIZE, GAME_CONFIG.TILE_SIZE,
                worldX, worldY,
                GAME_CONFIG.TILE_SIZE, GAME_CONFIG.TILE_SIZE
            );
        }
    }
    
    beachCacheReady = true;
    console.log("Setting beachCacheReady = true");
    console.log(`beachCacheReady is now: ${beachCacheReady}`);
    return true;
}

const BEACH_MAP = {
    name: 'BEACH',        
    width: 1920, // 30        
    height: 1920, // 30
    transitions: [
        { type: 'edge', side: 'right', x: 1850, yStart: 1300, yEnd: 1400, goTo: 'HUB', startX: 30, startY: 928 }
    ],
    
    drawBackground: function(ctx, camera) {
        // Draw Sea Background
        SEA_BACKGROUND.draw(beachSeaTileSheet, ctx, camera);

        // Initialize cache if not done yet
        if (!beachBackgroundCache) {
            console.log("Initializing cache...");
            initializeBeachBackgroundCache();
        }
        
        // Render cache if tileset is loaded but cache isn't ready
        if (!beachCacheReady && beachTileSheet.complete) {
            renderBeachBackgroundCache();
        }
        
        if (beachCacheReady) {
            this.drawFromCache(ctx, camera);
        } else {
            console.log("Cache not ready, using fallback...");
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        // Draw boundaries
        this.drawBoundaries(ctx, camera);
    },
    
    drawFromCache: function(ctx, camera) {
        // Simply copy the visible portion from cache to main canvas
        ctx.drawImage(
            beachBackgroundCache,           // Source: our pre-rendered cache
            camera.x, camera.y,        // Source position in cache
            camera.width, camera.height, // Source size
            0, 0,                      // Destination position (screen top-left)
            camera.width, camera.height  // Destination size
        );
    },

    drawBoundaries: function(ctx, camera) {
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 3;
        const topLeft = camera.worldToScreen(0, 0);
        const bottomRight = camera.worldToScreen(this.width, this.height);
        
        ctx.strokeRect(topLeft.x, topLeft.y, 
                      bottomRight.x - topLeft.x, 
                      bottomRight.y - topLeft.y);
    }
};