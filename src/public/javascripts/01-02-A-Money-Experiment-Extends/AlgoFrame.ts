export class AlgoFrame {

    private canvasWidth: number;
    private canvasHeight: number;
    money: any;
    canvas: any;
    rounds: any;
    count: number;

    constructor(canvasWidth, canvasHeight) {

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.count = 0;

        this.rounds = document.getElementById('rounds');

        this.canvas = document.getElementById('canvas');
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
    }

    public getCanvasWidth() {
        return this.canvasWidth;
    }

    public getCanvasHeight() {
        return this.canvasHeight;
    }

    public render(money) {
        this.money = money;
        this.repaint();
    }

    private repaint() {
        this.count ++;
        this.rounds.innerHTML = this.count;

        let ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

        let w = this.canvasWidth / this.money.length;

        for (let i = 0; i < this.money.length; i++) {
            if (this.money[i] > 0) {
                ctx.fillStyle = '#2196F3';
                ctx.fillRect(i * w + 1, this.canvasHeight / 2 - this.money[i], w - 1, this.money[i])
            } else {
                ctx.fillStyle = '#F44336';
                ctx.fillRect(i * w + 1, this.canvasHeight / 2, w - 1, -this.money[i])
            }
        }
    }
}