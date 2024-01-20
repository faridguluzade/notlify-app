import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

function Error({ message }: { message: string }) {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={1200} onClose={handleClose}>
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Error;
