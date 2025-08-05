import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MatrixState } from "../../types";

const initialState: MatrixState = {
  rows: 0,
  cols: 0,
  sumMatrix: [],
  multiplyMatrix: [],
  resultMatrix: [],
};

const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {
    generateMatrices: (
      state,
      action: PayloadAction<{ rows: number; cols: number }>
    ) => {
      const { rows, cols } = action.payload;
      state.rows = rows;
      state.cols = cols;

      state.sumMatrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: cols }, (_, j) => i + j)
      );

      state.multiplyMatrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: cols }, (_, j) => i * j)
      );

      state.resultMatrix = [];
    },
    addMatrices: (state) => {
      state.resultMatrix = state.sumMatrix.map((row, i) =>
        row.map((val, j) => val + state.multiplyMatrix[i][j])
      );
    },
  },
});

export const { generateMatrices, addMatrices } = matrixSlice.actions;
export default matrixSlice.reducer;
