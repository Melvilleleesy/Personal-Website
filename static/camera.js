class Camera {
    constructor(canvasWidth, canvasHeight) {
        this.width = canvasWidth;
        this.height = canvasHeight;
    }
    
    // Update camera to follow a target (like player)
    follow(target) {
        // player always in center of page
        const playerCenterX = target.x + (target.width / 2);
        const playerCenterY = target.y + (target.height / 2);
        
        this.x = playerCenterX - this.width / 2;
        this.y = playerCenterY - this.height / 2;
    }
    
    // Convert world coordinates to screen coordinates
    worldToScreen(worldX, worldY) {
        return {
            x: worldX - this.x,
            y: worldY - this.y
        };
    }
    
    // Check if something is visible on screen
    isVisible(worldX, worldY, objectWidth = 0, objectHeight = 0) {
        return worldX + objectWidth > this.x && 
               worldX < this.x + this.width &&
               worldY + objectHeight > this.y && 
               worldY < this.y + this.height;
    }
    
    // Set boundaries so camera doesn't go outside world
    setBounds(worldWidth, worldHeight) {
        this.x = Math.max(0, Math.min(this.x, worldWidth - this.width));
        this.y = Math.max(0, Math.min(this.y, worldHeight - this.height));
    }
}