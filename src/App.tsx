import { Toaster } from "react-hot-toast";

import Container from "@mui/material/Container";
import Header from "./ui/Header";
import Overview from "@/ui/Overview";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container maxWidth="md">
          <Overview />
        </Container>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            fontFamily: "Manrope",
          },
        }}
      />
    </>
  );
}

export default App;
