import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({ values }: any) : JSX.Element => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle id="success-dialog"> Success </DialogTitle>
      <DialogContent>
        <DialogContentText>
          All set
          {' '}
          {values.firstName}
          ! Check your email for a confirmation.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary"> Close </Button>
      </DialogActions>
    </Dialog>
  );
};
