// ICe Sea Configuration
const iceSeaTileSheet = new Image();
iceSeaTileSheet.src = 'static/images/sea-ice-tileset.png';

const iceTileSheet = new Image();
iceTileSheet.src = 'static/images/forest-tileset.png';

const ICE_TILE_REFERENCE = {
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

const ICE_TILEMAP = [
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

let iceBackgroundCache = null;
let iceCacheCtx = null;
let iceCacheReady = false;

const ICE_MAP = {
    name: 'ICE',      
    width: 2304, // 36         
    height: 2304, // 36
    transitions: [
        { type: 'edge', side: 'left', x: 20, yStart: 1100, yEnd: 1200, goTo: 'HUB', startX: 2200, startY: 1120  }
    ],
    
    drawBackground: function(ctx, camera) {
        // Draw Sea Background
        SEA_BACKGROUND.draw(iceSeaTileSheet, ctx, camera);

        if (!iceBackgroundCache) {
            const cacheData = CACHE.initializeBackgroundCache(36, 36);
            iceBackgroundCache = cacheData.backgroundCache;
            iceCacheCtx = cacheData.cacheCtx;
        }
        if (!iceCacheReady && iceTileSheet.complete) {
            if (CACHE.renderBackgroundCache(iceTileSheet, "ICE", ICE_TILEMAP, ICE_TILE_REFERENCE, iceBackgroundCache, iceCacheCtx, 36, 36)) {
                iceCacheReady = true;
            }
        }
        
        // If cache is ready, just copy the visible portion
        if (iceCacheReady) {
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
            iceBackgroundCache,           // Source: our pre-rendered cache
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