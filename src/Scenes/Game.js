import 'phaser';
import Player from '../Sprites/Player';
import Portal from '../Sprites/Portal';


export default class GameScene extends Phaser.Scene {
    constructor (key){
        super(key);
    }

    init (data) {
        this._LEVEL = data.level;
        this._LEVELS = data.levels;
        this._NEWGAME = data.newGame;
        this.loadingLevel = false;
    }

    create () {
        //listen for the resize event
        this.events.on('resize',this.resize,this);
        //listen for player input
        this.cursors=this.input.keyboard.createCursorKeys();

        //create the tilemap
        this.createMap();
        //create out player
        this.creatPlayer();
        //create the portal
        this.createPortal();
        //add collisions
        this.addCollisions();
        //update our camera
        this.fixCameras();
    }
    update(){
     this.player.update(this.cursors);
    }
    addCollisions(){
        this.physics.add.collider(this.player,this.blockedLayer);
        this.physics.add.overlap(this.player,this.portal,this.loadNextLevel.bind(this));
    }
    creatPlayer() {
        this.map.findObject('Player',(obj) => {
            if(this._NEWGAME && this._LEVEL === 1){
                if(obj.type === 'StartingPosition') {
                    this.player = new Player(this, obj.x, obj.y);
            }
            }else{
                this.player = new Player(this,obj.x, obj.y);
            }
        });
    }
    createPortal(){
        this.map.findObject('Portal',(obj) => {
            if(this._LEVEL ===1){
                this.portal = new Portal(this, obj.x, obj.y );
            }else if (this._LEVEL === 2){
                this.portal = new Portal(this, obj.x, obj.y);
            }
        });
    }
    fixCameras(){
        this.cameras.main.startFollow(this.player);
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
    createMap(){
        // add water background
        this.add.tileSprite(0,0,8000,8000,'tilemap',333);
        //create the tilemap
        this.map = this.make.tilemap({key: this._LEVELS[this._LEVEL]});
        //add tileset image
        this.tiles = this.map.addTilesetImage('tilemap');
        //create our layers
        this.backgroundLayer = this.map.createStaticLayer('Background',this.tiles,0,0);
        this.blockedLayer = this.map.createStaticLayer('Block',this.tiles,0,0);
        this.blockedLayer.setCollisionByExclusion([-1]);
        this.coverLayer = this.map.createStaticLayer('Cover',this.tiles,0,0);
    }

    loadNextLevel (){
        if(!this.loadingLevel){
            this.cameras.main.fade(500,0,0,0);
            this.cameras.main.on('camerafadeoutcomplete', () =>{
                if(this._LEVEL ===1){
                    this.scene.restart({level:2, levels:this._LEVELS, newGame:false});
                }else if (this._LEVEL ===2){
                    this.scene.restart({level:1, levels:this._LEVELS, newGame:false});
                }
            });
        }
        this.loadingLevel =true;

    }

};

