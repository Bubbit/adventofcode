const { readInputFile } = require('./../util.js');

export const playCombat = async (inputFile) => {
  const player1 = [];
  const player2 = [];
  const input = await readInputFile(inputFile);

  let player1Cards = true
  input.forEach(line => {
    if(line === 'Player 1:') {
      player1Cards = true;
    } else if(line === 'Player 2:') {
      player1Cards = false;
    } else if(line !== '') {
      if(player1Cards) {
        player1.push(+line);
      } else {
        player2.push(+line);
      }
    }
  })

  while(!(player1.length === 0 || player2.length === 0)) {
    let card1 = player1.shift();
    let card2 = player2.shift();
    if(card1 > card2) {
      player1.push(card1);
      player1.push(card2);
    } else {
      player2.push(card2);
      player2.push(card1);
    }
  }

  let score = 0;
  if(player1.length === 0) {
    console.log('player 2 won');
    player2.forEach((cur, index) => {
      score += (+cur * (player2.length - index));
      console.log(score);
    }, 0);
  } else {
    console.log('player 1 won');
    player1.forEach((cur, index) => {
      score += (+cur * (player1.length - index));
      console.log(score);
    }, 0);
  }

  return score;
}

const checkDuplicate = (stash, current) => {
  return stash.some((had) => {
    return had === JSON.stringify(current);
  })
}

let round = 0;

const playGame = (player1, player2) => {
  const freshPlayer1 = JSON.parse(JSON.stringify(player1));
  const freshPlayer2 = JSON.parse(JSON.stringify(player2));

  const alreadyHad1 = [];
  const alreadyHad2 = [];

  let notFinished = true;
  while(notFinished) {
    round++;
    if(checkDuplicate(alreadyHad1, freshPlayer1) || checkDuplicate(alreadyHad2, freshPlayer2)) {
      notFinished = false;
      return { winner: '1' }
    }
    alreadyHad1.push(JSON.stringify(freshPlayer1));
    alreadyHad2.push(JSON.stringify(freshPlayer2));
    let card1 = freshPlayer1.shift();
    let card2 = freshPlayer2.shift();
    let winner = '';
    if(freshPlayer1.length >= card1 && freshPlayer2.length >= card2) {
      const cutOff1 = JSON.parse(JSON.stringify(freshPlayer1))
      const cutOff2 = JSON.parse(JSON.stringify(freshPlayer2))
      const { winner: tempWin } = playGame(cutOff1.splice(0, card1), cutOff2.splice(0, card2));
      winner = tempWin;
    } else {
      winner = card1 > card2 ? '1' : '2';
    }
    if(winner === '1') {
      freshPlayer1.push(card1);
      freshPlayer1.push(card2);
    } else {
      freshPlayer2.push(card2);
      freshPlayer2.push(card1);
    }
    notFinished = !(freshPlayer1.length === 0 || freshPlayer2.length === 0);
  }

  return { winner: freshPlayer1.length ? '1' : '2', player1: freshPlayer1, player2: freshPlayer2 }
}

export const playRaftCaptain = async (inputFile) => {
  const player1 = [];
  const player2 = [];
  const input = await readInputFile(inputFile);

  let player1Cards = true
  input.forEach(line => {
    if(line === 'Player 1:') {
      player1Cards = true;
    } else if(line === 'Player 2:') {
      player1Cards = false;
    } else if(line !== '') {
      if(player1Cards) {
        player1.push(+line);
      } else {
        player2.push(+line);
      }
    }
  })

  const { winner, player1: player1End, player2: player2End } = playGame(player1, player2);

  console.log(winner, player1End, player2End);
  console.log(round);
  let score = 0;
  if(winner === '2') {
    console.log('player 2 won');
    player2End.forEach((cur, index) => {
      score += (+cur * (player2End.length - index));
      console.log(score);
    }, 0);
  } else {
    console.log('player 1 won');
    player1End.forEach((cur, index) => {
      score += (+cur * (player1End.length - index));
      console.log(score);
    }, 0);
  }

  return score;
}