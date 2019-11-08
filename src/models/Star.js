class Star {
    constructor(x, y, opacity, canvas) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.opacity = opacity;
        this.canvas = canvas;
        this.length = Math.floor(Math.random() * 2) + 1;
        this.factor = 1;
        this.increment = Math.random() * .03;
    }

    draw() {
        let ctx = this.canvas.getContext('2d');

        if(this.opacity > 1) {
            this.factor = -1;
        } else if(this.opacity <= 0) {
            this.factor = 1;
        }
            
        this.opacity += this.increment * this.factor;
        
        ctx.beginPath();
        ctx.fillRect(this.x, this.y , this.length, this.length);
        ctx.closePath();

        ctx.fillStyle = 'rgba(255, 255, 255, 1)';

        ctx.fill();
        
        ctx.restore();
    }
}

export default Star;