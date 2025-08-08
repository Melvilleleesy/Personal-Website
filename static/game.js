function startHubGame() {
    console.log("Hub game starting...");
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// initialize map
let currentMap = 'HUB';

const MAPS = {
    HUB: HUB_MAP,
    ICE: ICE_MAP,
    MAGMA: MAGMA_MAP,
    FOREST: FOREST_MAP,
    BEACH: BEACH_MAP
};

function drawBackground() {
    MAPS[currentMap].drawBackground(ctx, camera)
}

// scale to fit window
function resizeCanvas() {
    // canvas plane fills window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.display = 'block';
}

// Set size on load and when screen rotates/resizes
resizeCanvas();

// Camera assignment
const camera = new Camera(canvas.width, canvas.height);

window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

// Avatar assignment
const spriteSheet = new Image();
spriteSheet.src = 'static/images/player.png';

// Player object
const player = {
    x: (MAPS.HUB.width - 64) / 2, 
    y: (MAPS.HUB.height - 64) / 2,
    width: GAME_CONFIG.SPRITE.frameWidth,
    height: GAME_CONFIG.SPRITE.frameHeight
};

// Movement code
const FRAMES_PER_DIRECTION = 3;

let frame = 0;
let direction = 'down';
let tick = 0;

const keysPressed = { ...GAME_CONFIG.KEYSPRESSED};
const directions = GAME_CONFIG.DIRECTIONS;

function draw(currentFrame, screenX, screenY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();

    const scalingFactor = 1.25;
    const row = directions[direction];
    const scaledWidth = player.width * scalingFactor;
    const scaledHeight = player.height * scalingFactor;
    ctx.drawImage(
        spriteSheet,
        currentFrame * player.width, row * player.height,
        player.width, player.height,
        screenX, screenY,
        scaledWidth, scaledHeight
    );

    MESSAGE_BOX.draw(ctx, canvas);

    if (fadeOpacity > 0) {
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

}

let isTransitioning = false;
let fadeOpacity = 0;

function checkBiomeTransitions() {
    if (isTransitioning) return;
    
    const transitions = MAPS[currentMap].transitions;
    if (!transitions) return;
    
    for (let transition of transitions) {
        if (transition.type === 'edge') {
            let crossed = false;
            let correctDirection = false;
            
            if (transition.side === 'right') {
                crossed = player.x >= transition.x && 
                         player.y >= transition.yStart && 
                         player.y <= transition.yEnd;
                correctDirection = direction === 'right'; // Check if character is moving right also
            } 
            else if (transition.side === 'left') {
                crossed = player.x <= transition.x && 
                         player.y >= transition.yStart && 
                         player.y <= transition.yEnd;
                correctDirection = direction === 'left'; // Check if character is moving left also
            }
            else if (transition.side === 'up') {
                crossed = player.y <= transition.y && 
                         player.x >= transition.xStart && 
                         player.x <= transition.xEnd;
                correctDirection = direction === 'up'; // Check if character is moving up also
            }
            else if (transition.side === 'down') {
                crossed = player.y >= transition.y && 
                         player.x >= transition.xStart && 
                         player.x <= transition.xEnd;
                correctDirection = direction === 'down'; // Check if character is moving down also
            }
            
            // Only transition if character is moving in the direction of the edge and cross the boundary
            if (crossed && correctDirection) {
                switchBiome(transition.goTo, transition.startX, transition.startY);
                break;
            }
        }
    }
}

function switchBiome(newBiome, startX, startY) {
    if (isTransitioning) return; 
    
    isTransitioning = true;
    console.log(`Starting transition to ${newBiome} biome`);
    
    fadeToBlack(() => {
        currentMap = newBiome;
        player.x = startX;
        player.y = startY;
        camera.follow(player);
        
        fadeFromBlack(() => {
            isTransitioning = false;
            console.log(`Transition to ${newBiome} complete`);
            console.log(`Final player: (${player.x}, ${player.y})`);
            console.log(`Final camera: (${camera.x}, ${camera.y})`);
        });
    });
}

function fadeToBlack(callback) {
    fadeOpacity = 0;
    const fadeInterval = setInterval(() => {
        fadeOpacity += 0.05; // Increase darkness by 5%
        if (fadeOpacity >= 1) {
            fadeOpacity = 1;
            clearInterval(fadeInterval);
            callback();
        }
    }, 32); 
}

function fadeFromBlack(callback) {
    const fadeInterval = setInterval(() => {
        fadeOpacity -= 0.05; // Decrease darkness by 5%
        if (fadeOpacity <= 0) {
            fadeOpacity = 0;
            clearInterval(fadeInterval);
            callback();
        }
    }, 32); 
}

// to maintain constant speed across devices (240 hz)
let lastTime = 0;
const PLAYER_SPEED = 256; // pixels per second

function update(currentTime = 0) {
    // Calculate delta time in seconds
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    MESSAGE_BOX.update();

    if (MESSAGE_BOX.isVisible) {
        // Still draw the player but don't process movement
        camera.follow(player);
        const screenPos = camera.worldToScreen(player.x, player.y);
        draw(0, screenPos.x, screenPos.y); // Draw idle frame
        requestAnimationFrame(update);
        return; // Exit early, skip all movement code
    }

    let moving = false;
    const currentMapWidth = MAPS[currentMap].width - 64;
    const currentMapHeight = MAPS[currentMap].height - 64;
    console.log(`Current coordinates: (${player.x}, ${player.y})`);
    if (keysPressed.ArrowUp || keysPressed.w) {
        const nextStep = player.y - (PLAYER_SPEED * deltaTime);
        if (!COLLISION.isBlocked(currentMap, player.x + 48, nextStep + 32)) {
            if (nextStep >= -12) { 
                player.y = nextStep;
                direction = 'up';
                moving = true;
            }
        }
    } else if (keysPressed.ArrowDown || keysPressed.s) {
        const nextStep = player.y + (PLAYER_SPEED * deltaTime);
        if (!COLLISION.isBlocked(currentMap, player.x + 48, nextStep + 64)) {
            if (nextStep < currentMapHeight - 12) {
                player.y = nextStep;
                direction = 'down';
                moving = true;
            }
        }
    } else if (keysPressed.ArrowLeft || keysPressed.a) {
        const nextStep = player.x - (PLAYER_SPEED * deltaTime);
        if (!COLLISION.isBlocked(currentMap, nextStep + 24, player.y + 56)) {
            if (player.x > -12) {
                player.x = nextStep;
                direction = 'left';
                moving = true;
            }
        }
    } else if (keysPressed.ArrowRight || keysPressed.d) {
        const nextStep = player.x + (PLAYER_SPEED * deltaTime);
        if (!COLLISION.isBlocked(currentMap, nextStep + 56, player.y + 56)) {
            if (player.x <= currentMapWidth) {
                player.x = nextStep;
                direction = 'right';
                moving = true;
            }
        }
    }

    checkBiomeTransitions();

    camera.follow(player);
    const screenPos = camera.worldToScreen(player.x, player.y);

    if (moving) {
        tick++;
        if (tick % 10 === 0) {
        frame = (frame + 1) % GAME_CONFIG['SPRITE'].framesPerDirection;
        }
        draw(frame, screenPos.x, screenPos.y);
    } else {
        draw(0, screenPos.x, screenPos.y); // Always draw idle frame (center frame of row)
    }

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => { if (e.key in keysPressed) keysPressed[e.key] = true; });
document.addEventListener('keyup', (e) => { if (e.key in keysPressed) keysPressed[e.key] = false; });
document.addEventListener('keydown', (e) => { 
    if (e.key in keysPressed) {
        keysPressed[e.key] = true; 
    }
    
    if (e.key === 'Enter') {
        // First try to handle message box
        if (MESSAGE_BOX.onEnterPress()) {
            return;
        }
        
        // If no message box, try interactions
        if (typeof INTERACTION !== 'undefined') {
            INTERACTION.triggerInteraction(currentMap, player.x, player.y);
        }
    }
    
    // Handle arrow keys for choice selection
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'w' || e.key === 's') {
        if (MESSAGE_BOX.onArrowPress((e.key === 'ArrowUp') || (e.key === 'w') ? 'up' : 'down')) {
            e.preventDefault();
            return;
        }
    }
});
spriteSheet.onload = update;