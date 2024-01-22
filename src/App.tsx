import { BrowserRouter } from "react-router-dom";

import Container from "@mui/material/Container";
import Header from "./ui/Header";
import Overview from "@/ui/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container maxWidth="md">
          <Overview />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
