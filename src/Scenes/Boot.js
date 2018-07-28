import 'phaser';


export default class BootScene extends Phaser.Scene {
    constructor (key){
        super(key);
    }

    preload () {

        //load in the image
        this.load.image('Background','assets/images/background.png');

        //load in the tilemap
        this.load.tilemapTiledJSON('level1','assets/map/level1.json');
        this.load.tilemapTiledJSON('level2','assets/map/level2.json');
        //load in the spritesheet
        this.load.spritesheet('tilemap','assets/images/tilemap.png',{
            frameWidth:32, frameHeight:32
        });

        //load in our character spritesheets
        this.load.spritesheet('player','assets/sprites/player.png',{
            frameWidth:32, frameHeight:32
        });
        this.load.spritesheet('portal','assets/images/tilemap.png',{
            frameWidth:32, frameHeight:32
        });
    }

    create () {
        this.scene.start('Title');
    }

};

