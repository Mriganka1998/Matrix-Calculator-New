import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/Matrixhooks";
import { addMatrices } from "../redux/matrix/matrixSlice";
import MatrixTable from "./MatrixTable";

const ResultMatrix = () => {
  const dispatch = useAppDispatch();
  const { resultMatrix } = useAppSelector((state) => state.matrix);

  const handleAddMatrix = () => dispatch(addMatrices());

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mb: 2 }}
        onClick={handleAddMatrix}
      >
        Add Matrix
      </Button>
      {resultMatrix.length > 0 && (
        <MatrixTable title="Result Matrix (Sum + Multiply)" matrix={resultMatrix} />
      )}
    </>
  );
};

export default ResultMatrix;
