import Piece from "../pieces";

export default class PWPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 3;
    this.width = 3;
    this.x = -1;
    this.y = -2;
    this.initialState = [[-2, -1], [-1, -1], [-1, 0], [0, 0], [0, 1]];
    this.numStates = 4;
    this.rotationMap = {
      0: [[-2, 0], [-1, -1], [0, 0], [1, -1], [2, 0]],
      1: [[0, 2], [-1, 1], [0, 0], [-1, -1], [0, -2]],
      2: [[2, 0], [1, 1], [0, 0], [-1, 1], [-2, 0]],
      3: [[0, -2], [1, -1], [0, 0], [1, 1], [0, 2]]
    };
  }
}
