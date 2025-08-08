// Basic Game Configuration for all biome and game settings
const GAME_CONFIG = {
    // Global settings
    TILE_SIZE: 64,
    SPRITE: {
        frameWidth: 64,
        frameHeight: 64,
        framesPerDirection: 3,
        animationSpeed: 10
    },

    KEYSPRESSED: {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,

        // WASD works too
        "w": false,
        "s": false,
        "a": false,
        "d": false
    },

    DIRECTIONS: {
        down: 0,
        up: 1,
        left: 2,
        right: 3
    }
};

const SEA_BACKGROUND = {
    TILE_SIZE: 256, 
    frames: 8, // How many frames there are in the tileset
    currentFrame: 0, // Starting frame from sea-tileset
    speed: 350, // Every 350ms switch frame
    lastUpdate: 0,

    update() {
        const now = Date.now();
        if (now - this.lastUpdate > this.speed) {
            this.currentFrame = (this.currentFrame + 1) % this.frames;
            this.lastUpdate = now;
        }
    },

    draw(tileSheet, ctx, camera) {
        this.update();
        
        // Calculate the range of tiles to draw
        const buffer = this.TILE_SIZE * 2;
        const startX = Math.floor((camera.x - buffer) / this.TILE_SIZE) * this.TILE_SIZE;
        const startY = Math.floor((camera.y - buffer) / this.TILE_SIZE) * this.TILE_SIZE;
        const endX = Math.ceil((camera.x + camera.width + buffer) / this.TILE_SIZE) * this.TILE_SIZE;
        const endY = Math.ceil((camera.y + camera.height + buffer) / this.TILE_SIZE) * this.TILE_SIZE;
        
        // Draw sea tiles - ALL using the same current frame
        for (let worldX = startX; worldX < endX; worldX += this.TILE_SIZE) {
            for (let worldY = startY; worldY < endY; worldY += this.TILE_SIZE) {
                const screenPos = camera.worldToScreen(worldX, worldY);
                                
                // To avoid visible gaps in screenPos
                const pixelX = Math.round(screenPos.x);
                const pixelY = Math.round(screenPos.y);

                // 8x1 png
                const sourceX = 0; // Always column 0 (single column)
                const sourceY = this.currentFrame * this.TILE_SIZE; // Row changes based on frame

                
                ctx.drawImage(
                    tileSheet,
                    sourceX, sourceY,                    
                    this.TILE_SIZE, this.TILE_SIZE,
                    pixelX, pixelY,           
                    this.TILE_SIZE, this.TILE_SIZE
                );
            }
        }
    }
}

const COLLISION = {
    caches: {},
    "HUB": {
        "s-1-": true,
        "s-2-": true,
        "s-3-": true,
        "s-4-": true
    },
    "FOREST": {},
    "ICE": {},
    "MAGMA": {},
    "BEACH": {},

    isBlocked(mapName, pixelX, pixelY) {
        const cache = this.caches[mapName];
        
        if (!cache) {
            console.log(`No collision cache for ${mapName}`);
            return true; // Default to blocked for safety
        }
        
        const tileX = Math.floor(pixelX / GAME_CONFIG.TILE_SIZE);
        const tileY = Math.floor(pixelY / GAME_CONFIG.TILE_SIZE);
                  
        // Bounds check         
        if (tileY < 0 || tileY >= cache.height || tileX < 0 || tileX >= cache.width) {             
            return true; // Out of bounds = blocked         
        } 
        
        return cache.grid[tileY][tileX];
    },
};

const INTERACTION = {
    caches: {},
    
    interactableObjects: {
        "HUB": {
            "s-1-": 1,
            "s-2-": 2,
            "s-3-": 3,
            "s-4-": 4,
        }
    },
    
    messages: {
        1: [
            "I have never seen this before. What a strange statue...",
            "Wait there are some words inscribed here!",
            "This is Melville's first ever project that he did on a stock report generator.",
            "He found scanning and surveying internet sources over and over for the same information to be extremely tedious.",
            "So he built an API scraper to do it for him, cutting out loads of wasted hours!"
        ],
        2: "This is just a regular sign post.",
        3: "It's a beautiful tree with no links.",
        4: "It's a beautiful tree with no links."
    },
    
    // URLs to open for different INTERACTION
    urls: {
        1: "https://github.com/Melvilleleesy/Stock-Report-Generator",
        2: "https://github.com/Melvilleleesy/Risk-Performance-of-Portfolio",
        3: "https://github.com/Melvilleleesy/MAbacktester",
        4: "https://github.com/Melvilleleesy/Personal-Website"
    },
    
    actions: {
        1: (choice) => {
            console.log(`User chose: ${choice}`);
            if (choice === 'yes') {
                console.log("Opening external website...");
            } else {
                console.log("Staying on current page...");
            }
        },
        2: (choice) => {
            console.log(`User chose: ${choice}`);
            if (choice === 'yes') {
                console.log("Opening external website...");
            } else {
                console.log("Staying on current page...");
            }
        },
        3: (choice) => {
            console.log(`User chose: ${choice}`);
            if (choice === 'yes') {
                console.log("Opening external website...");
            } else {
                console.log("Staying on current page...");
            }
        },
        4: (choice) => {
            console.log(`User chose: ${choice}`);
            if (choice === 'yes') {
                console.log("Opening external website...");
            } else {
                console.log("Staying on current page...");
            }
        }
    },
    
getInteractionId(mapName, pixelX, pixelY) {
    console.log(`getInteractionId called with: map=${mapName}, pixel=(${pixelX}, ${pixelY})`);
    
    const cache = this.caches[mapName];
    
    if (!cache) {
        console.log("No interaction cache for map:", mapName);
        console.log("Available caches:", Object.keys(this.caches));
        return 0;
    }
    
    // Use the same offset as your collision system
    const playerTileX = Math.floor((pixelX + 32) / GAME_CONFIG.TILE_SIZE);
    const playerTileY = Math.floor((pixelY + 56) / GAME_CONFIG.TILE_SIZE);
    
    console.log(`Converted to tile coordinates: (${playerTileX}, ${playerTileY})`);
    console.log(`TILE_SIZE: ${GAME_CONFIG.TILE_SIZE}`);
    console.log(`Cache dimensions: ${cache.width} x ${cache.height}`);
    
    // Check surrounding tiles (8 directions + center)
    const directions = [
        [-1, -1], [0, -1], [1, -1],
        [-1,  0], [0,  0], [1,  0],
        [-1,  1], [0,  1], [1,  1]
    ];
    
    console.log("Checking surrounding tiles:");
    for (const [dx, dy] of directions) {
        const checkX = playerTileX + dx;
        const checkY = playerTileY + dy;
        
        if (checkX >= 0 && checkX < cache.width && checkY >= 0 && checkY < cache.height) {
            const interactionId = cache.grid[checkY][checkX];
            console.log(`  Tile (${checkX}, ${checkY}): interaction ID = ${interactionId}`);
            if (interactionId > 0) {
                console.log(`Found interaction at tile (${checkX}, ${checkY})!`);
                return interactionId;
            }
        } else {
            console.log(`  Tile (${checkX}, ${checkY}): out of bounds`);
        }
    }
    
    console.log("No interactions found");
    return 0;
},
    
    hasInteraction(mapName, pixelX, pixelY) {
        return this.getInteractionId(mapName, pixelX, pixelY) > 0;
    },
    
    triggerInteraction(mapName, pixelX, pixelY) {
        const interactionId = this.getInteractionId(mapName, pixelX, pixelY);
        console.log("Interaction ID found:", interactionId);
        if (interactionId === 0) {
            return false;
        }
        
        const message = this.messages[interactionId];
        const url = this.urls[interactionId];
        const action = this.actions[interactionId];
        
        if (message) {
            // Show message with choice option if URL or action exists
            MESSAGE_BOX.show(message, {
                showChoice: !!(url || action),
                url: url,
                callback: action
            });
        }
        
        return true;
    }
};

const CACHE = {
    initializeBackgroundCache(width, height) {
        const backgroundCache = document.createElement('canvas');
        backgroundCache.width = width * GAME_CONFIG.TILE_SIZE;
        backgroundCache.height = height * GAME_CONFIG.TILE_SIZE;
        const cacheCtx = backgroundCache.getContext('2d');
        
        return { backgroundCache, cacheCtx }; // Return both objects
    },

    renderBackgroundCache(tileSheet, mapName, tileMap, tileReference, backgroundCache, cacheCtx, width, height) {
        if (!tileSheet.complete || !backgroundCache || !tileMap) {
            console.log("Waiting for tileset to load or cache to initialize...");
            return false;
        }
        
        // Clear the cache canvas
        cacheCtx.fillStyle = '#0d0d0dff';
        cacheCtx.fillRect(0, 0, backgroundCache.width, backgroundCache.height);

        const collisionGrid = [];
        const interactionGrid = [];
        const interactablePositions = [];

        // Draw ALL tiles to the cache
        for (let row = 0; row < height; row++) {
            const cacheRow = [];
            for (let col = 0; col < width; col++) {
                const tileName = tileMap[row][col];
                const tileData = tileReference[tileName];
                const isBlocked = (COLLISION[mapName][tileName] === true);
                cacheRow.push(isBlocked);

                if (isBlocked && INTERACTION.interactableObjects[mapName] && 
                    INTERACTION.interactableObjects[mapName][tileName]) {
                    const interactionId = INTERACTION.interactableObjects[mapName][tileName];
                    interactablePositions.push({ x: col, y: row, id: interactionId });
                }
                
                if (!tileData || tileData.x < 0 || tileData.y < 0) continue; // Skip empty/invalid tiles
            
                const tileX = tileData.x * GAME_CONFIG.TILE_SIZE;
                const tileY = tileData.y * GAME_CONFIG.TILE_SIZE;
                const worldX = col * GAME_CONFIG.TILE_SIZE;
                const worldY = row * GAME_CONFIG.TILE_SIZE;
                
                // Draw tile directly to cache canvas using stored coordinates
                cacheCtx.drawImage(
                    tileSheet,
                    tileX, tileY,  // Coordinates from tile reference
                    GAME_CONFIG.TILE_SIZE, GAME_CONFIG.TILE_SIZE,
                    worldX, worldY,
                    GAME_CONFIG.TILE_SIZE, GAME_CONFIG.TILE_SIZE
                );
            }
            collisionGrid.push(cacheRow);
        }

        // Build INTERACTION 2d array
        for (let row = 0; row < height; row++) {
            const interactionRow = [];
            for (let col = 0; col < width; col++) {
                interactionRow.push(0); // Default: no interaction
            }
            interactionGrid.push(interactionRow);
        }

        for (const obj of interactablePositions) {
            const directions = [
                [-1, -1], [0, -1], [1, -1],
                [-1,  0], [0,  0], [1,  0],
                [-1,  1], [0,  1], [1,  1]
            ];
            
            for (const [dx, dy] of directions) {
                const surroundingX = obj.x + dx;
                const surroundingY = obj.y + dy;
                
                // Bounds check
                if (surroundingX >= 0 && surroundingX < width && 
                    surroundingY >= 0 && surroundingY < height) {
                    
                    // Only mark as interactive if the tile is walkable (not blocked)
                    if (!collisionGrid[surroundingY][surroundingX]) {
                        interactionGrid[surroundingY][surroundingX] = obj.id;
                    }
                }
            }
        }

        COLLISION.caches[mapName] = {
            grid: collisionGrid,
            width: width,
            height: height
        };
        INTERACTION.caches[mapName] = {
            grid: interactionGrid,
            width: width,
            height: height
        };
        cacheReady = true;
        console.log("Background cache rendered successfully!");
        return true;
    }
};

const MESSAGE_BOX = {
    isVisible: false,
    messages: [],
    currentMessageIndex: 0,
    currentText: '',
    fullText: '',
    charIndex: 0,
    textSpeed: 2,
    isTyping: false,
    
    // Choice system properties
    showingChoice: false,
    selectedChoice: 0, // 0 = Yes, 1 = No
    choiceCallback: null, // Function to call when choice is made
    choiceUrl: null, // URL to open if Yes is selected
    
    // Box styling
    box: {
        height: 240,
        margin: 40,
        padding: 16,
        borderWidth: 4,
        cornerRadius: 20,
        textTopMargin: 60,
        backgroundColor: '#f8f8f8',
        borderColor: '#a1d0e0',
        textColor: '#2b4cc8',
        font: "32px 'PokemonFont', monospace",
        arrowFont: "28px 'PokemonFont', monospace",
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 3,
        
        // Choice styling
        choiceColor: '#2b4cc8',
        selectedChoiceColor: '#ff6b35', // Orange for selected choice
        choiceFont: "28px 'PokemonFont', monospace",
        selectorSymbol: '►' // Arrow pointing to selected choice
    },
    
    show(messageText, options = {}) {
        this.messages = Array.isArray(messageText) ? messageText : [messageText];
        this.isVisible = true;
        this.currentMessageIndex = 0;
        this.showingChoice = false;
        this.selectedChoice = 0;
        
        // Handle choice options
        if (options.showChoice) {
            this.choiceUrl = options.url || null;
            this.choiceCallback = options.callback || null;
        }
        
        this.startTyping(this.messages[0]);
    },
    
    startTyping(text) {
        this.fullText = text;
        this.currentText = '';
        this.charIndex = 0;
        this.isTyping = true;
    },
    
    update() {
        if (this.isTyping && this.charIndex < this.fullText.length) {
            for (let i = 0; i < this.textSpeed && this.charIndex < this.fullText.length; i++) {
                this.currentText += this.fullText[this.charIndex];
                this.charIndex++;
            }
            if (this.charIndex >= this.fullText.length) {
                this.isTyping = false;
            }
        }
    },
    
    // Handle arrow key navigation for choices
    onArrowPress(direction) {
        if (!this.showingChoice) return false;
        
        if (direction === 'up') {
            this.selectedChoice = 0; // Yes
            return true;
        } else if (direction === 'down') {
            this.selectedChoice = 1; // No
            return true;
        }
        return false;
    },
    
    onEnterPress() {
        if (!this.isVisible) return false;
        
        // If still typing, complete the text immediately
        if (this.isTyping) {
            this.currentText = this.fullText;
            this.charIndex = this.fullText.length;
            this.isTyping = false;
            return true;
        }
        
        // If showing choice, handle selection
        if (this.showingChoice) {
            if (this.selectedChoice === 0) {
                // Yes selected
                if (this.choiceUrl) {
                    window.open(this.choiceUrl, '_blank');
                }
                if (this.choiceCallback) {
                    this.choiceCallback('yes');
                }
            } else {
                // No selected
                if (this.choiceCallback) {
                    this.choiceCallback('no');
                }
            }
            this.hide();
            return true;
        }
        
        // If finished typing, go to next message or show choice
        if (this.currentMessageIndex < this.messages.length - 1) {
            this.currentMessageIndex++;
            this.startTyping(this.messages[this.currentMessageIndex]);
            return true;
        } else {
            // Last message finished, show choice if configured
            if (this.choiceUrl || this.choiceCallback) {
                this.showingChoice = true;
                this.selectedChoice = 0; // Default to Yes
                return true;
            } else {
                this.hide();
                return true;
            }
        }
    },
    
    hide() {
        this.isVisible = false;
        this.messages = [];
        this.currentMessageIndex = 0;
        this.currentText = '';
        this.fullText = '';
        this.charIndex = 0;
        this.isTyping = false;
        this.showingChoice = false;
        this.selectedChoice = 0;
        this.choiceCallback = null;
        this.choiceUrl = null;
    },
    
    drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    },
    
    draw(ctx, canvas) {
        if (!this.isVisible) return;

        const boxWidth = canvas.width - (this.box.margin * 2);
        const boxHeight = this.box.height;
        const boxX = this.box.margin;
        const boxY = canvas.height - boxHeight - this.box.margin;
        
        // Draw border
        ctx.fillStyle = this.box.borderColor;
        this.drawRoundedRect(ctx, boxX, boxY, boxWidth, boxHeight, this.box.cornerRadius);
        ctx.fill();
        
        // Draw background
        ctx.fillStyle = this.box.backgroundColor;
        this.drawRoundedRect(ctx, 
            boxX + this.box.borderWidth, 
            boxY + this.box.borderWidth, 
            boxWidth - (this.box.borderWidth * 2), 
            boxHeight - (this.box.borderWidth * 2), 
            this.box.cornerRadius - this.box.borderWidth
        );
        ctx.fill();
        
        // Draw message text
        if (!this.showingChoice) {
            ctx.font = this.box.font;
            ctx.fillStyle = this.box.textColor;
            const textX = boxX + this.box.padding;
            const textY = boxY + this.box.textTopMargin;
            const maxWidth = boxWidth - (this.box.padding * 2);
            
            this.drawShadowedText(ctx, this.currentText, textX, textY, maxWidth, 40);
            
            // Draw continuation indicator if not typing and more messages exist
            if (!this.isTyping && this.currentMessageIndex < this.messages.length - 1) {
                this.drawContinueArrow(ctx, boxX + boxWidth - 60, boxY + boxHeight - 50);
            }
        } else {
            // Draw choice interface
            this.drawChoiceInterface(ctx, boxX, boxY, boxWidth, boxHeight);
        }
    },
    
    drawChoiceInterface(ctx, boxX, boxY, boxWidth, boxHeight) {
        // Draw the question
        ctx.font = this.box.font;
        ctx.fillStyle = this.box.textColor;
        
        const questionText = "Would you like to visit the developer's website?";
        const questionX = boxX + this.box.padding;
        const questionY = boxY + 60;
        
        this.drawTextWithShadow(ctx, questionText, questionX, questionY);
        
        // Draw choices
        ctx.font = this.box.choiceFont;
        const choiceX = boxX + this.box.padding + 40;
        const yesY = boxY + 120;
        const noY = boxY + 160;
        
        // Draw Yes option
        const yesColor = this.selectedChoice === 0 ? this.box.selectedChoiceColor : this.box.choiceColor;
        ctx.fillStyle = yesColor;
        this.drawTextWithShadow(ctx, "Yes", choiceX, yesY);
        
        // Draw No option
        const noColor = this.selectedChoice === 1 ? this.box.selectedChoiceColor : this.box.choiceColor;
        ctx.fillStyle = noColor;
        this.drawTextWithShadow(ctx, "No", choiceX, noY);
        
        // Draw selector arrow
        ctx.fillStyle = this.box.selectedChoiceColor;
        const selectorX = choiceX - 30;
        const selectorY = this.selectedChoice === 0 ? yesY : noY;
        this.drawTextWithShadow(ctx, this.box.selectorSymbol, selectorX, selectorY);
    },
    
    drawShadowedText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let currentY = y;
        
        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && i > 0) {
                this.drawTextWithShadow(ctx, line, x, currentY);
                line = words[i] + ' ';
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        }
        this.drawTextWithShadow(ctx, line, x, currentY);
    },
    
    drawTextWithShadow(ctx, text, x, y) {
        const originalFillStyle = ctx.fillStyle;
        
        // Draw shadow
        ctx.fillStyle = this.box.shadowColor;
        ctx.fillText(text, x + this.box.shadowOffsetX, y + this.box.shadowOffsetY);
        
        // Draw main text
        ctx.fillStyle = originalFillStyle; // Use the color that was set before calling this function
        ctx.fillText(text, x, y);
    },
    
    drawContinueArrow(ctx, x, y) {
        const time = Date.now() * 0.005;
        const bounce = Math.sin(time) * 2;
        
        const originalFont = ctx.font;
        ctx.font = this.box.arrowFont;
        
        // Draw shadow
        ctx.fillStyle = this.box.shadowColor;
        ctx.fillText('▼', x + this.box.shadowOffsetX, y + bounce + this.box.shadowOffsetY);
        
        // Draw arrow
        ctx.fillStyle = this.box.textColor;
        ctx.fillText('▼', x, y + bounce);
        
        ctx.font = originalFont;
    }
};
