import 'phaser';

export default class Portal extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x,y) {
        super(scene, x, y, 'portal',664);
        this.scene=scene;

        //enable physics
        this.scene.physics.world.enable(this);
        //add our player to the scene
        this.scene.add.existing(this);
        //scale our player

    }
}
