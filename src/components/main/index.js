import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import teal from "@material-ui/core/colors/teal";
import purple from "@material-ui/core/colors/purple";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Domain from "mdi-material-ui/Domain";
import Account from "mdi-material-ui/Account";

import withRoot from "../../withRoot";

import Header from "../header";
import HeroSimple from "./herosimple";
import Footer from "../footer";
import Contact from "../contact";

const styles = {
  root: {
    textAlign: "center",
    fontFamily: "Roboto",
    backgroundColor: "#fff"
  },
  grantMakers: {
    minHeight: 500,
    backgroundColor: teal[800]
  },
  grantRecipients: {
    minHeight: 500,
    backgroundColor: purple[800]
  },
  customerText: {
    color: "#fff",
    marginBottom: 15
  },
  customerButton: {
    marginTop: 15,
    backgroundColor: "#fff"
  },
  customerDiv: {
    padding: 60
  },
  purposeDiv: {
    minHeight: 200,
    backgroundColor: "#fff",
    padding: 60
  },
  introDiv: {
    minHeight: 200,
    backgroundColor: blueGrey[100],
    padding: 60
  }
};

const customersData = [
  {
    id: 1,
    title: "Grant Makers",
    description:
      "Create, launch and manage grants reporting for your program, with powerful dashboards, workflow automation and acquittal tracking.",
    icon: <Domain fontSize="large" />,
    buttonText: "Coming Soon",
    buttonUrl: "/"
  },
  {
    id: 2,
    title: "Grant Recipients",
    description:
      "Manage your grants on GrantDocs with digital forms that can help you and your team collaborate to complete your grants reporting requirements.",
    icon: <Account fontSize="large" />,
    buttonText: "Coming Soon",
    buttonUrl: "/"
  }
];

class Homepage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.root}>
          {/* Header */}
          <Header />

          {/* Hero */}
          <HeroSimple />

          {/* What we do */}
          {/* <Grid
            container
            spacing={24}
            justify="center"
            direction="column"
            alignItems="center"
            className={classes.purposeDiv}
          >
            <Grid
              item
              container
              justify="center"
              direction="column"
              sm={8}
              xs={12}
              style={{ marginBottom: 30 }}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                item
              >
                <Typography variant="h5" color="secondary">
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    style={{ marginBottom: 30 }}
                  >
                    <Grid item>
                      <Avatar style={{ marginRight: 10 }}>
                        <Lightbulb fontSize="large" />
                      </Avatar>
                    </Grid>
                    <Grid item>REIMAGINE GRANTS REPORTING</Grid>
                  </Grid>
                </Typography>
              </Grid>
              <Grid container justify="center" item>
                <Typography
                  align="left"
                  variant="subtitle1"
                  style={{ marginBottom: 10 }}
                >
                  Grant reports are a vital compliance and communication medium
                  between grant makers and recipients. Both grant makers and
                  recipients, regardless of size or grants program type, should
                  have inituitive tools build on modern technology to manage the
                  grants reporting.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={24}
            justify="center"
            direction="column"
            alignItems="center"
            className={classes.introDiv}
          >
            <Grid
              item
              container
              justify="center"
              direction="column"
              sm={8}
              xs={12}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                item
                style={{ marginBottom: 30 }}
              >
                <Grid item>
                  <Avatar style={{ marginRight: 10 }}>
                    <CheckBox fontSize="large" />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    THE TOOLKIT FOR MODERN GRANT REPORTING
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="center" item>
                <Typography variant="subtitle1">
                  Grants are the original venture capital and support government
                  and philanthropic cause in place of a market failure.
                  Grantmakers, regardless of size, should have sophisticated
                  tools to manage their grants and grant recipients should have
                  experiences that are consistent with the software solutions
                  used in other parts of their business.
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

          {/* Features */}
          {/* <FeaturesDiv /> */}

          {/* Who Are You */}
          <Grid
            container
            spacing={24}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.customers}
          >
            {customersData.map(el => (
              <Grid
                item
                container
                md={6}
                sm={12}
                xs={12}
                direction="column"
                alignItems="flex-start"
                className={
                  el.id === 1 ? classes.grantMakers : classes.grantRecipients
                }
                key={el.id}
              >
                <div className={classes.customerDiv}>
                  <Grid item xs>
                    <Typography className={classes.customerText}>
                      {el.icon}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h4" className={classes.customerText}>
                      {el.title}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h5" className={classes.customerText}>
                      {el.description}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Button
                      variant="outlined"
                      color={el.id === 1 ? "primary" : "secondary"}
                      className={classes.customerButton}
                      disabled
                    >
                      {el.buttonText}
                    </Button>
                  </Grid>
                </div>
              </Grid>
            ))}
          </Grid>

          {/* Contact Us */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Homepage));
