import { Container, Grid, Typography } from "@mui/material";
import MatrixInput from "./components/MatrixInput";
import MatrixTable from "./components/MatrixTable";
import ResultMatrix from "./components/ResultMatrix";
import { useAppSelector } from "./hooks/Matrixhooks";

function App() {
  const { sumMatrix, multiplyMatrix } = useAppSelector((state) => state.matrix);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Matrix Calculator
      </Typography>

      <MatrixInput />

      {sumMatrix.length > 0 && (
        <>
          <Grid container spacing={4} justifyContent="center" mt={3}>
            <Grid item xs={12} md={4}>
              <MatrixTable title="Sum Matrix (i + j)" matrix={sumMatrix} />
            </Grid>
            <Grid item xs={12} md={4}>
              <MatrixTable title="Multiplication Matrix (i * j)" matrix={multiplyMatrix} />
            </Grid>
            <Grid item xs={12} md={4}>
              <ResultMatrix />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default App;

