/// <reference path="../Scripts/_references.js" />

Game = {
    map_grid: {
        width: (80-10), //80 gives width of 1280px reducing by a 160px (10*16) just to fit in browser for debuging
        height: 20,
        tile: {
            width: 16,
            height: 16
        }
    },

    width: function () {
        return this.map_grid.width * this.map_grid.tile.width;
    },


    height: function () {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    start: function () {
        Crafty.init(Game.width(), Game.height(), document.getElementById('game'));

        Crafty.scene('loading');
    }
}