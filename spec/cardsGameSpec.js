

/*TODO LIST:
  
  Input->Output
  f(['1'], ['2']) -> 'Player2 wins 1 to 0'
  f(['1'], ['1']) -> 'Tie'
  f(['2'], ['1']) -> 'Player1 wins 1 to 0'
  f(['K'], ['Q']) -> 'Player1 wins 1 to 0'
  f([''], ['']) -> Throw Error('Invalid input')
  f(['3'], ['4','5']) -> Throw Error('Invalid input')

  f(['9','6'], ['1', 3]) -> 'Player1 wins 2 to 0'
  f(['9','6'], ['1', Q]) -> 'Tie'
*/

describe("The highest card game", function(){

  it("may have a winner with one round", function(){
      expect(whoWins(['1'],['2'])).toBe('Player2 wins 1 to 0');
      expect(whoWins(['6'],['2'])).toBe('Player1 wins 1 to 0');
  });

  it("may have a tie if both hands are equal with one round", function(){
      expect(whoWins(['6'],['6'])).toBe('Tie');
  });

  it("has declared the 'K' to be the highest value ", function(){
      expect(whoWins(['K'],['Q'])).toBe('Player1 wins 1 to 0');
  });

  it("should throw an error if both hands are empty", function(){
      expect(whoWins([''],[''])).toBe('Invalid input');
      expect(whoWins([],[])).toBe('Invalid input');
  });

  it("should throw an error if hands have different number of cards", function(){
      expect(whoWins(['3'], ['4','5'])).toBe('Invalid input');
  });

  it("may have a winner with more than one round", function(){
      expect(whoWins(['6', 'J'], ['4','5'])).toBe('Player1 wins 2 to 0');
      expect(whoWins(['6', 'J'], ['4','J'])).toBe('Player1 wins 1 to 0');
      expect(whoWins(['6', 'J'], ['9','Q'])).toBe('Player2 wins 2 to 0');
      expect(whoWins(['6', '', '7'], ['','Q', 'J'])).toBe('Player2 wins 2 to 1');
  });

  it("should have a tie if each player wins the same amount of rounds", function(){
      expect(whoWins(['6', 'J'], ['6','J'])).toBe('Tie');
  });

});