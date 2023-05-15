import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
    constructor() {
        super();
        // Set width and height to canvas width/height
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        // Set camera aspect ratio
        this.aspect = this.width / this.height;
        //Select minimum pixel ratio
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Update values upon resizing the window
        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width / this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        })
    }
}