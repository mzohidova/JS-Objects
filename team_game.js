const team = {
    _players: [
      {
      firstName: 'Will',
      lastName: 'Smith',
      age: 11,
      }, 
      {
      firstName: 'Jack',
      lastName: 'Sparrow',
      age: 12,
      }, 
      {
      firstName: 'Hector',
      lastName: 'Barbossa',
      age: 13,
      },
    ],
    _games: [
      {
      opponent: 'Commodore Norrington',
      teamPoints: 42,
      opponentPoints: 27
      }, 
      {
      opponent: 'Cutler Becket',
      teamPoints: 51,
      opponentPoints: 29
      }, 
      {
      opponent: 'Davy Jones',
      teamPoints: 39,
      opponentPoints: 31  
      },
    ],
    get games() {
      return this._games;
    },
    get players() {
      return this._players;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      this.players.push(player);
    },
    addGame(oppName, teamPoint, oppPoint) {
      let game = {
        opponent: oppName,
        teamPoints: teamPoint,
        opponentPoints: oppPoint,
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log (team.players)
  
  team.addGame('Calipso', 51, 64);
  team.addGame('Bretheren Court', 21, 20);
  team.addGame('Black Beard', 29, 25);
  
  
  console.log (team.games)
  
  
  
  
  
  
  
  
  
  
  