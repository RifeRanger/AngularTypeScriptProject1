
class Team<T> {
  private players: T[] = [];

  add(player: T) {
    this.players.push(player);
  }

  remove() {
    this.players.shift();
  }
}

const Broncos = new Team<string>();
Broncos.add('Elway');
Broncos.add('Manning');

const Robots = new Team<number>();
Robots.add(17);
Robots.add(26)
