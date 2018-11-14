import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import withRoot from "../../withRoot";

const styles = {
  root: {
    textAlign: "center",
    fontFamily: "Roboto"
  },
  logo: {
    fontFamily: "Amaranth"
  }
};

class Header extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.root}>
          {/* Header */}
          <Toolbar>
            <Typography variant="h4" color="primary" className={classes.logo}>
              GrantDocs
            </Typography>
          </Toolbar>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRoot(withStyles(styles)(Header));
