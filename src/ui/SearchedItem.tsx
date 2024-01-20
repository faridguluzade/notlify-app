import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DarkCloud from "@/assets/darkCloud.svg";

function SearchedItem() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "121px",
        height: "118px",
        borderRadius: "25px",
        border: " 1px solid #000",
        overflow: "hidden",
        textAlign: "center",
        padding: "5px",
        background:
          "linear-gradient(180deg, #B32DD4 0%, rgba(217, 217, 217, 0.00) 100%)",
      }}
    >
      <Typography>Ottawa</Typography>
      <Box
        sx={{
          width: "121px",
          height: "72px",
          borderRadius: "25px",
          position: "absolute",
          background:
            "linear-gradient(107deg, #373333 2.96%, rgba(55, 51, 51, 0.00) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

          backdropFilter: "blur(4px)",
          bottom: 0,
          left: 0,
        }}
      >
        <Stack
          alignItems="center"
          spacing={1}
          sx={{ transform: "translateY(-20px)" }}
        >
          <img src={DarkCloud} alt="" width="50%" />
          <Typography>26C</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default SearchedItem;
