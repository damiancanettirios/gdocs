import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Divider from "@material-ui/core/Divider";

import Twitter from "mdi-material-ui/Twitter";
import Linkedin from "mdi-material-ui/Linkedin";

import withRoot from "../../withRoot";

const styles = {
  root: {
    textAlign: "center",
    fontFamily: "Roboto"
  },
  footer: {
    minHeight: 100,
    backgroundColor: blueGrey[200],
    padding: 20
  },
  footerText: {
    color: blueGrey[700]
  },
  footerLogoText: {
    fontFamily: "Amaranth",
    color: blueGrey[700]
  },
  iconButton: {
    color: blueGrey[700]
  },
  button: {
    textDecoration: blueGrey[700]
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    color: blueGrey[700]
  }
};

// const companyLinks = [
//   {
//     id: 1,
//     title: "About",
//     url: "/"
//   },
//   {
//     id: 2,
//     title: "Blog",
//     url: "/"
//   }
// ];

// const productLinks = [
//   {
//     id: 1,
//     title: "For GrantMakers",
//     url: "/"
//   },
//   {
//     id: 2,
//     title: "For Grant Recipients",
//     url: "/"
//   }
// ];

// function footerLinksDiv({ id, title, url, footerText, button }) {
//   return (
//     <Button className={button} disabled key={id}>
//       {title}
//     </Button>
//   );
// }

const socialMedia = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/company/grantdocs"
  },
  {
    id: 2,
    name: "Twitter",
    icon: <Twitter />,
    url: "https://twitter.com/grantdocs"
  }
];

function socialMediaDiv({ id, name, icon, url, iconButton }) {
  return (
    <IconButton className={iconButton} aria-label={name} href={url} key={id}>
      {icon}
    </IconButton>
  );
}

class Footer extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          spacing={24}
          direction="column"
          alignItems="flex-start"
          className={classes.footer}
        >
          {/* Logo */}
          <Grid item xs={12} container direction="column">
            <Typography
              variant="h4"
              align="left"
              className={classes.footerLogoText}
            >
              GrantDocs
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.footerText}
            >
              Make Grants Actionable
            </Typography>
          </Grid>
          <Grid item container direction="row">
            {socialMedia.map(el => socialMediaDiv(el))}
          </Grid>
          {/* <Grid
            item
            xs={12}
            container
            direction="column"
            alignItems="flex-start"
            className={classes.footerDiv}
          >
            <Grid container direction="row" alignItems="center" item>
              <Typography
                variant="body1"
                align="left"
                className={classes.footerText}
              >
                Product:
              </Typography>

              {productLinks.map(el => footerLinksDiv(el))}
            </Grid>
            <Grid container direction="row" alignItems="center" item>
              <Typography
                variant="body1"
                align="left"
                className={classes.footerText}
              >
                Company:
              </Typography>

              {companyLinks.map(el => footerLinksDiv(el))}
               
              
            </Grid>
          </Grid> */}
          <Divider className={classes.divider} />
          <Grid container justify="center" direction="row">
            <Typography variant="body1" className={classes.footerText}>
              GrantDocs | 11 York Street Sydney
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Footer));
