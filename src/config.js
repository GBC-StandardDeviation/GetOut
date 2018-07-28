import 'phaser';

export default {
    type: Phaser.AUTO,
    parent: 'Get-Out',
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt:true,
    roundPixels: true,
    physics: {
        default: 'arcade',
        arcade:{
            gravity:{y:0},
            debug:true
        }
    }
};
