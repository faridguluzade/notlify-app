import Box from "@mui/material/Box";

import Header from "./ui/Header";
import Overview from "@/ui/Overview";

function App() {
  return (
    <>
      <Header />
      <Box component="main" sx={{ display: "flex", justifyContent: "center" }}>
        <Overview />;
      </Box>
    </>
  );
}

export default App;
