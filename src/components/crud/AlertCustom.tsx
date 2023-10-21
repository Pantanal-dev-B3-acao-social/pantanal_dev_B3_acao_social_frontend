import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertCustom({
  open,
  severity,
  message,
  handleClose,
}: AlertCustomProps) {
  return (
    <>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

interface AlertCustomProps {
  open: boolean;
  severity: Severity;
  message: string;
  handleClose: (
    event: Event | React.SyntheticEvent<any, Event>,
    reason: string
  ) => void;
}

export enum Severity {
  "ERROR" = "error",
  "WARNING" = "warning",
  "INFO" = "info",
  "SUCCESS" = "success",
}
