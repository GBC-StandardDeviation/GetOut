import 'phaser';


export default class TitleScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }
    preload () {
        this.levels = {
            1:'level1',
            2:'level2'
        };
        this.add.image(window.innerWidth/2, window.innerHeight/2, 'Background');
    }
    create () {
        this.events.on('resize',this.resize,this);
    }
    resize(width,height){
        if (width === undefined){
            width = this.sys.game.config.width;
        }
        if (height === undefined){
            height = this.sys.game.config.height;
        }
        this.cameras.resize(width,height);
    }
    update (){



            this.scene.start('Game',{level:1, newGame: true, levels:this.levels});



    }
}
