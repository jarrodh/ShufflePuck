﻿// The Grid component allows an element to be located
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

Crafty.c('paddle', {
    init: function () {
        //this.requires('2D, Canvas, Grid')
        this.requires('2D, DOM, Color, Fourway, Gravity, Canvas, Grid')
                .attr({ x: 0, y: 0, w: 100, h: 100 })
                .color('#F00')
                .fourway(4)
                .gravity('Floor');
    }
});