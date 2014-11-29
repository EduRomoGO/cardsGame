
function whoWins (hand1, hand2) {

	if (invalidHands(hand1,hand2))
			return 'Invalid input';

	var playerPoints = calculatePoints(hand1, hand2);

	return decideWinner.apply('', playerPoints);
}

function invalidHands (hand1, hand2) {
	var h1size = hand1.length;
	var	h2size = hand2.length;

	if ((hand1[0] === '' && hand2[0] === '') ||
			(h1size === 0 && h2size === 0)			 ||
			(h1size !== h2size) )
				return true;
	
	return false;
}

function calculatePoints (hand1, hand2) {

	var values = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
	var player1points = 0;
	var player2points = 0;
	var i;

	for (i = 0; i < hand1.length; i++){
		if (values.indexOf(hand1[i]) > values.indexOf(hand2[i]))
				player1points++;
		if (values.indexOf(hand1[i]) < values.indexOf(hand2[i]))
				player2points++;
	}
	return [player1points, player2points];
}


function decideWinner (player1points, player2points) {
	if (player1points > player2points)
		return 'Player1 wins ' + player1points + ' to ' + player2points;
	else if (player1points < player2points)
		return 'Player2 wins ' + player2points + ' to ' + player1points;
	else
		return 'Tie';
}
