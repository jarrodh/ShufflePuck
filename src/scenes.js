/// <reference path="../Scripts/_references.js" />

//$text_css = { 'size': '24px', 'family': 'Arial', 'color': 'red', 'text-align': 'center' };

//  With one argument after name scene is defined and entered
Crafty.scene('loading', function () {
    Crafty.e('2D, DOM, Text')
		.text('Loading; please wait...')
		.attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
		.textFont({ 'size': '24px', 'family': 'Arial' })
        .textColor('#DC143C')
        .css({ 'text-align': 'center' });

    //  initialise game, once everything is loaded can switch to first game scene
    Crafty.scene('game');
});
//Crafty.e('Collision').
Crafty.scene('game', function () {

    //this.leftPaddle = Crafty.e('paddle').at(5, 5);

    //Crafty.e("2D, DOM, TiledMapBuilder").setMapDataSource(SOURCE_FROM_TILED_MAP_EDITOR)
	//			.createWorld(function (tiledmap) { /*put stuff here?!?*/});

    for (var x = 0; x < Game.map_grid.width; x++) {
        for (var y = 0; y < Game.map_grid.height; y++) {
            if (x === 0 || y === 0 || x === (Game.map_grid.width - 1) || y === (Game.map_grid.height - 1)) {
                Crafty.e('PlayingField, 2D, Color, Canvas, Collision, Grid')
                    .at(x, y)
                    .color('orange')
                    .collision();
            }
        }
    }

    Crafty.e('ball').at(20, 15);//.attr({ dX: Crafty.math.randomInt(1, 3), dY: Crafty.math.randomInt(1, 3) });

    var leftPaddle = Crafty.e('paddle').at(1, 7);

    //window.setTimeout(function () { Crafty.stop(); }, 3000);

    //Crafty.e('Floor, 2D, Canvas, Color')
    //    .attr({ x: 0, y: 250, w: 250, h: 10 })
    //    .color('green');
});