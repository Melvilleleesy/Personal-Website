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
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"],
    ["d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e", "d-e"]
]

let beachBackgroundCache = null;
let beachCacheCtx = null;
let beachCacheReady = false;

const BEACH_MAP = {
    name: 'BEACH',        
    width: 2304, // 36         
    height: 2304, // 36
    transitions: [
        { type: 'edge', side: 'right', x: 2200, yStart: 1300, yEnd: 1400, goTo: 'HUB', startX: 30, startY: 1120 }
    ],
    
    drawBackground: function(ctx, camera) {
        // Draw Sea Background
        SEA_BACKGROUND.draw(beachSeaTileSheet, ctx, camera);
        
        if (!beachBackgroundCache) {
            const cacheData = CACHE.initializeBackgroundCache(36, 36);
            beachBackgroundCache = cacheData.backgroundCache;
            beachCacheCtx = cacheData.cacheCtx;
        }
        if (!beachCacheReady && beachTileSheet.complete) {
            if (CACHE.renderBackgroundCache(beachTileSheet, "BEACH", BEACH_TILEMAP, BEACH_TILE_REFERENCE, beachBackgroundCache, beachCacheCtx, 36, 36)) {
                beachCacheReady = true;
            }
        }
        
        // If cache is ready, just copy the visible portion
        if (beachCacheReady) {
            this.drawFromCache(ctx, camera);
        } else {
            // Fallback: fill with solid color while loading
            ctx.fillStyle = '#0d0d0dff';
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