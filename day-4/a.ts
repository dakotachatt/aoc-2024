import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day4a(data: string[]) {
  let puzzle = [];
  let countOfXmasOccurrences = 0;
  let horizontalMatches = 0;
  let diagonalMatches = 0;
  let verticalMatches = 0;

  //Put all letters from all lines into single array
  for (let i = 0; i < data.length; i++) {  
    puzzle.push(data[i].split(''));
  }

  console.log(puzzle);

  for(let i = 0; i < puzzle.length; i++) {
    
    for(let j = 0; j < puzzle[0].length - 3; j++) {
      // Horizontal Matches
      const horizontalForwardMatch = puzzle[i][j] === 'X' && puzzle[i][j+1] === 'M' && puzzle[i][j+2] === 'A' && puzzle[i][j+3] === 'S';
      const horizontalReverseMatch = puzzle[i][j] === 'S' && puzzle[i][j+1] === 'A' && puzzle[i][j+2] === 'M' && puzzle[i][j+3] === 'X';

      if(horizontalForwardMatch || horizontalReverseMatch) {
        horizontalMatches++;
      }
    }

    for(let j = 0; j < puzzle[0].length; j++) {
      if(i < puzzle.length - 3) {
        // Vertical Matches
        const verticalForwardMatch = puzzle[i][j] === 'X' && puzzle[i+1][j] === 'M' && puzzle[i+2][j] === 'A' && puzzle[i+3][j] === 'S';
        const verticalReverseMatch = puzzle[i][j] === 'S' && puzzle[i+1][j] === 'A' && puzzle[i+2][j] === 'M' && puzzle[i+3][j] === 'X';

        if(verticalForwardMatch || verticalReverseMatch) {
          verticalMatches++;
        }
      }

      if(i < puzzle.length - 3 && j < puzzle[0].length - 3) {
        // Diagonally Forward Matches
        const diagonalForwardMatch = puzzle[i][j] === 'X' && puzzle[i+1][j+1] === 'M' && puzzle[i+2][j+2] === 'A' && puzzle[i+3][j+3] === 'S';
        const diagonalForwardReverseMatch = puzzle[i][j] === 'S' && puzzle[i+1][j+1] === 'A' && puzzle[i+2][j+2] === 'M' && puzzle[i+3][j+3] === 'X';

        if(diagonalForwardMatch || diagonalForwardReverseMatch) {
          diagonalMatches++;
        }
      }

      if(i < puzzle.length - 3 && j > 2) {
        // Diagonally Reversed Matches
        const diagonalReverseMatch = puzzle[i][j] === 'X' && puzzle[i+1][j-1] === 'M' && puzzle[i+2][j-2] === 'A' && puzzle[i+3][j-3] === 'S';
        const diagonalRevserseReverseMatch = puzzle[i][j] === 'S' && puzzle[i+1][j-1] === 'A' && puzzle[i+2][j-2] === 'M' && puzzle[i+3][j-3] === 'X';

        if(diagonalReverseMatch || diagonalRevserseReverseMatch) {
          diagonalMatches++;
        }
      }
    }
  }

  countOfXmasOccurrences += horizontalMatches + verticalMatches + diagonalMatches;

  return countOfXmasOccurrences
}

await runSolution(day4a);

// horizontal - 5
// vertical - 3
// diagonallyForward - 5
// diagonallyReversed - 5