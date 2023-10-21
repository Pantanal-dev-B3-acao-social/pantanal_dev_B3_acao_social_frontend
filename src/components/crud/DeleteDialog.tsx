import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteDialog(props: DeleteDialogProps) {
  const { openDialog, body, handleCloseDelete, destroy } = props;

  return (
    <Dialog
      open={openDialog}
      keepMounted
      onClose={() => handleCloseDelete()}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Deseja realmente apagar este item?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button
          className="btn-cancel-delete"
          onClick={() => handleCloseDelete()}
        >
          Cancelar
        </Button>
        <Button className="btn-confirm-delete" onClick={() => destroy()}>
          Sim, tenho certeza
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export interface DeleteDialogProps {
  openDialog: boolean;
  handleCloseDelete: Function;
  destroy: Function;
  body: React.ReactNode;
}
