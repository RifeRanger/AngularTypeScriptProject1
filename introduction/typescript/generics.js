var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
    }
    Team.prototype.add = function (player) {
        this.players.push(player);
    };
    Team.prototype.remove = function () {
        this.players.shift();
    };
    return Team;
}());
var Broncos = new Team();
Broncos.add('Elway');
Broncos.add('Manning');
var Robots = new Team();
Robots.add(17);
Robots.add(26);
