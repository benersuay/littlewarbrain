// Bener Suay
// October 2015
// 
// HOWTO: 
//
// 1. Select Play vs. CPU
// 2. Select 2 player maps
// 3. Select Diag 1v1 map
// 4. Click on options (upper left corner of the screen, icon with boxes on it)
// 5. Select "Load custom AI"
// 6. Find and choose stalker.js 
// 7. Remove Player 2 by clicking X
// 8. add Computer
// 9. You should now see Custom AI 1 next to Player 2.
// 10. Choose a team for your AI script and Start the game.
//

// get my own player number; we need this to check if a unit is mine or not
var myPlayerNumber = scope.getMyPlayerNumber();

// get workers and enemy units
var workers = scope.getUnits({type: "Worker", player: myPlayerNumber});
var W = scope.getMapWidth();
var H = scope.getMapHeight();
var delta = 2;

for( w = 0; w < workers.length; w++) {
    var goalLocation = {x: W/2, y: (H/2)+w*delta};
    scope.order("Move", [workers[w]], goalLocation);
}

