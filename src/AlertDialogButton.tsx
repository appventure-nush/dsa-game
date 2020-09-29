import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1, 0),
      background: '#fadb14',
      '&:hover': {
        background: '#ffec3d'
      },
      '&:active': {
        background: '#d4b106'
      }
    }
  }),
);

const AlertDialogButton: React.FC = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size='large' onClick={handleClickOpen} className={classes.button}>
        {props.children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Coming soon on 9th October!</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialogButton;