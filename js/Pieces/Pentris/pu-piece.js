import Piece from "../pieces";

export default class PUPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[-1, -1], [0, -1], [0, 0], [0, 1], [-1, 1]];
    this.numStates = 4;
    this.rotationMap = {
      0: [[-1, 0], [0, -1], [1, 0], [2, 1], [1, 2]],
      1: [[-1, 1], [-2, 0], [-1, -1], [0, -2], [1, -1]],
      2: [[2, 1], [1, 2], [0, 1], [-1, 0], [0, -1]],
      3: [[0, -2], [1, -1], [0, 0], [-1, 1], [-2, 0]]
    };
  }
}