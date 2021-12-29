import Nav from "./components/Nav";
import Card from "./components/Card";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <div className="app">
      <Nav />
      <Grid container  justifyContent="center" style={{backgroundColor : "red"}}>
        <Grid item  xs={4}>
           <Card/>
          </Grid>
        </Grid>
      

    
    </div>
  );
}

export default App;
