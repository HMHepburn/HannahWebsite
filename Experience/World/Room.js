import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.hannahRoom;
        this.actualRoom = this.room.scene;
        console.log(this.actualRoom);

        this.setModel();
    }

    setModel() {
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11, 0.11, 0.11);
        // COME BACK AT 2:54 TO CONTINUE
    }

    resize() {}

    update() {}
}