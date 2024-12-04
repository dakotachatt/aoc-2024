import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day4b(data: string[]) {
  let puzzle = [];
  let countOfXmasOccurrences = 0;

  for (let i = 0; i < data.length; i++) {
    puzzle.push(data[i].split(''));
  }

  for(let i = 0; i < puzzle.length - 2; i++) {
    
    for(let j = 0; j < puzzle[0].length - 2; j++) {
      const diagonalForwardMatch = puzzle[i][j] === 'M' && puzzle[i+1][j+1] === 'A' && puzzle[i+2][j+2] === 'S';
      const diagonalForwardReverseMatch = puzzle[i][j] === 'S' && puzzle[i+1][j+1] === 'A' && puzzle[i+2][j+2] === 'M';
      const diagonalReverseMatch = puzzle[i+2][j] === 'M' && puzzle[i+1][j+1] === 'A' && puzzle[i][j+2] === 'S';
      const diagonalRevserseReverseMatch = puzzle[i+2][j] === 'S' && puzzle[i+1][j+1] === 'A' && puzzle[i][j+2] === 'M';

      if((diagonalForwardMatch || diagonalForwardReverseMatch) && (diagonalReverseMatch || diagonalRevserseReverseMatch)) {
        countOfXmasOccurrences++;
      }
    }
  }

  return countOfXmasOccurrences
}

await runSolution(day4b);
