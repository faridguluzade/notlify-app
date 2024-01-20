import Container from "@mui/material/Container";
import Header from "./ui/Header";
import Overview from "@/ui/Overview";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Overview />
      </Container>
    </>
  );
}

export default App;
