/// <reference path="../Scripts/_references.js" />

// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
    init: function () {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        });
    },

    // Locate this entity at the given position on the grid
    at: function (x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x / Game.map_grid.tile.width, y: this.y / Game.map_grid.tile.height };
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    }
});

//x > 1088
//y > 288
Crafty.c('ball', {
    _direction: { x: 1, y: 1 },

    init: function () {
        this.requires('2D, Color, Canvas, Collision, Grid')
            .color('blue');

        this.onHit('PlayingField', function (data) {
            console.log('PlayingField');
            if (this.x > 1088 || this.x < 32) {
                this._direction.x *= -1;
            }
            this._direction.y *= -1;
        });

        this.onHit('paddle', function (data) {
            console.log('HitPaddle');
            
            this._direction.x *= -1;

            if (data[0].obj.x < this.x) {
                console.log('Paddle on left');
            } else {
                console.log('Paddle on right');
            }
        });

        this.bind('EnterFrame', function (args) {
            if (this.hit('PlayingField')) {
                console.log('EnterFrame+PlayingField');
            }
            //else {
            //console.log('EnterFrame');
            this.shift(1 * this._direction.x, 1 * this._direction.y);
            //}

            //console.log('X: ' + this.x + ' Y: ' + this.y);
        });
    }

});

Crafty.c('paddle', {
    init: function () {
        this.requires('2D, DOM, Color, Fourway, Collision, Grid')
                .attr({ x: 0, y: 0, w: 16, h: 80 })
                .color('#F00')
                .fourway(4)
                .collision();
    }
});