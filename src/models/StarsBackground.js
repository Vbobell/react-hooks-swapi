import Star from './Star';

class StarsBackground {
    constructor(fps, numStars, windowWidth, windowHeight, canvas) {
        this.fps = fps;
        this.numStars = numStars;
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.canvas = canvas;
        this.stars = [];
    }

    init() {
        for(var i = 0; i < this.numStars; i++) {
            var x = Math.round(Math.random() * this.windowWidth);
            var y = Math.round(Math.random() * this.windowHeight);
            var opacity = Math.random() * 0.5;

            var star = new Star(x, y, opacity, this.canvas);
            
            this.stars.push(star);
        }
    }

    animate() {
        let ctx = this.canvas.getContext('2d');

        ctx.clearRect(0, 0, this.innerWidth, this.innerHeight);

        this.stars.forEach(function(star) {
            star.draw();
        });
    }
}

export default StarsBackground;