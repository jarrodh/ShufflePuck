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

Crafty.scene('game', function () {
    //Crafty.e('2D, DOM, Color, Fourway, Gravity')
    //    .attr({ x: 0, y: 0, w: 100, h: 100 })
    //    .color('#F00')
    //    .fourway(4)
    //    .gravity('Floor');

    Crafty.e('Floor, 2D, Canvas, Color')
        .attr({ x: 0, y: 250, w: 250, h: 10 })
        .color('green');
});