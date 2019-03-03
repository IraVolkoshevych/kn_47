import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class DisciplineInfo extends React.Component {
  constructor(props){
      super(props);
  
      this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.props.setModalVisibility(false);
  };


  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.isOpen}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Modal title
            <IconButton aria-label="Close"  onClick={this.handleClose} style={{
                marginLeft: '400px'
            }}>
                <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {this.props.modalText}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DisciplineInfo;