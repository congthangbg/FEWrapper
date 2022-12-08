import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ConfirmDialog({isOpen,setIsOpen,title,content,titleSubmit,titleCancle}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {title ? title : "Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           {content ? content : "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {titleCancle ? titleCancle : "CANCLE"}
          </Button>
          <Button onClick={handleClose} autoFocus>
					{titleSubmit ? titleSubmit : "OK"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}