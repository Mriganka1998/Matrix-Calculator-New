import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../hooks/Matrixhooks";
import { generateMatrices } from "../redux/matrix/matrixSlice";

const MatrixInput = () => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const dispatch = useAppDispatch();

  const handleGenerate = () => {
    if (rows > 0 && cols > 0) {
      dispatch(generateMatrices({ rows, cols }));
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label="Rows"
          type="number"
          value={rows}
          onChange={(e) => setRows(+e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Columns"
          type="number"
          value={cols}
          onChange={(e) => setCols(+e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleGenerate}>
          Generate
        </Button>
      </Grid>
    </Grid>
  );
};

export default MatrixInput;
