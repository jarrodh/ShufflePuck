/// <reference path="../Scripts/_references.js" />

Game = {
    map_grid: {
        width: 30,
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
        //Crafty.background('orange');

        Crafty.scene('loading');
        this.leftPaddle = Crafty.e('paddle');//.at(5, 5);
    }
}