import React from "react";
import HubspotForm from "react-hubspot-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CloseBox from "mdi-material-ui/CloseBox";
import IconButton from "@material-ui/core/IconButton";

import withRoot from "../../withRoot";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  root: {
    textAlign: "center",
    fontFamily: "Roboto"
  },
  contactDiv: {
    padding: 30,
    minHeight: 100,
    backgroundColor: blueGrey[50]
  },
  contactText: {
    marginBottom: 20
  },
  button: {
    marginRight: 8
  },
  customerbutton: {
    backgroundColor: "#fff"
  }
});

class Contact extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className="App">
        <div className={classes.root}>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.contactDiv}
          >
            <Grid
              item
              container
              direction="column"
              sm={8}
              xs={12}
              className={classes.contactText}
            >
              <Typography variant="h3" align="left">
                Interested?
              </Typography>
              <Typography variant="h3" align="left" color="secondary">
                Contact us to learn more
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.contactText}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.handleOpen}
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
          {/* Modal */}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Grid container justify="flex-end">
                <IconButton>
                  <CloseBox onClick={this.handleClose} />
                </IconButton>
              </Grid>

              <Typography variant="h5" align="center" id="modal-title">
                {`Let's talk`}
              </Typography>
              {/* Contact Us */}
              <HubspotForm
                portalId="4897899"
                formId="e5d3a23a-2bbd-46e5-b499-203b99e9a75a"
                onSubmit={() => console.log("Submit!")}
                onReady={() => console.log("Form ready!")}
                loading={() => (
                  <Grid container justify="center" style={{ marginTop: 30 }}>
                    <CircularProgress />
                  </Grid>
                )}
                style={{ minWidth: 320 }}
                id="simple-modal-form"
              />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Contact));
