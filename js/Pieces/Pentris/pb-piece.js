import Piece from "../pieces";

export default class PBPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[-1, -1], [0, -1], [-1, 0], [0, 0], [-2, 0]];
    this.numStates = 4;
    this.rotationMap = {
      0: [[-1, 0], [0, -1], [0, 1], [1, 0], [-1, 2]],
      1: [[0, 1], [-1, 0], [1, 0], [0, -1], [2, 1]],
      2: [[0, 0], [-1, 1], [-1, -1], [-2, 0], [0, -2]],
      3: [[1, -1], [2, 0], [0, 0], [1, 1], [-1, -1]]
    };
  }
}
