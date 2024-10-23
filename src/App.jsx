import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button>Click me</Button>
      <TextField
        id="filled-search"
        label="Suchfeld Zusammenfassung"
        type="search"
        variant="filled"
        sx={{
          m: 0,
          mt: -1,
          width: 300,
          height: 50,
        }}
      />
    </>
  );
}

export default App;
