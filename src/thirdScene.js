//thirdScene.js
var ThirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("Game over", "Arial", 26);
        label.setPosition(size.width / 2, size.height * 5 / 6);
        this.addChild(label, 1);

        return true;
    },
});

var dropLayer2 = cc.Layer.extend({
    sprite: null,
    // ブロックを保持しておく配列
    dropSpriteArray: null,
    // 配列の宣言　ブロックの名前を指定
    dropArray: [res.drop01_png, res.drop02_png, res.drop03_png, res.drop04_png, res.drop05_png],
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        this.dropSpriteArray = new Array();
        for (var j = 0; j < 5; j++) {
          for(var i = 0; i < 5; i++){
            var rnd  = Math.floor(Math.random() * 5);
            this.sprite = new cc.Sprite(this.dropArray[rnd]);
            cc.log(i);
            cc.log(this.dropArray[i]);
            this.sprite.attr({
                x: size.width  * 0.2 + 49 * i,
                y: size.height * 0.2 + 49 * j,
                scale: 1.0,
                rotation: 0
            });
            this.dropSpriteArray.push(this.sprite);
            // this.addChild(this.sprite);
            this.addChild(this.sprite, 0);
            //  var drop01 = cc.Sprite.create(res.drop01_png);　
            //  drop01.setPosition(size.width * i / 6, size.height / 5);　
            //  this.addChild(drop01);
          }
        }

        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
        cc.director.runScene(new MyScene());
    },
});

var ThirdScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 0, 100, 180));
        this.addChild(backgroundLayer);
        var layer3 = new ThirdLayer();
        var layer4 = new dropLayer2();

        this.addChild(layer3);
        this.addChild(layer4)
    }
});
