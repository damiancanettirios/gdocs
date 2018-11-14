import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HubspotForm from "react-hubspot-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
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
  root: {
    backgroundColor: "#fff"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  logo: {
    fontFamily: "Amaranth"
  },
  hero: {
    minHeight: 300,
    padding: 50,
    marginTop: 50,
    marginBottom: 100
  },
  heroTitle: {
    marginBottom: 10
  },
  button: {
    marginTop: 16,
    marginLeft: 10,
    marginRight: 8,
    marginBottom: 20,
    padding: 17,
    minHeight: 52
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  [theme.breakpoints.down("sm")]: {
    hero: {
      minHeight: 300,
      padding: 20,
      marginTop: 50,
      marginBottom: 50
    },
    paper: {
      padding: theme.spacing.unit * 6,
      width: theme.spacing.unit * 52
    }
  }
});

const Emoji = ({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

class Hero extends React.Component {
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
      <React.Fragment>
        <div className={classes.root}>
          {/* Hero */}
          <Grid
            container
            spacing={24}
            direction="column"
            justify="center"
            className={classes.hero}
          >
            <Grid item>
              <Typography variant="h3" className={classes.heroTitle}>
                Intuitive Grants Reporting
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" className={classes.heroTitle}>
                No tears <Emoji symbol="😢" label="cry emoji" />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.heroTitle}>
                GrantsDocs seeks to be the easiest and most acitonable way to
                collect grants reporting and complete grant acquittals. We are
                building tailored workflows with automation so less grants
                reporting admin is required and more time can be spent on
                running programs.
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.handleOpen}
              >
                I'm interested
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                href="mailto:damian@grantdocs.com"
              >
                I have a suggestion
              </Button>
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
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Hero));
