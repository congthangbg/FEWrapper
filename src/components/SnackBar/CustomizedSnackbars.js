import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button, IconButton, Snackbar, SnackbarContent } from "../../../node_modules/@mui/material/index";
import { Close, CheckCircle, Warning, Error, Info } from "../../../node_modules/@mui/icons-material/index";
import { withStyles } from "../../../node_modules/@mui/styles/index";

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: Error,
  info: Info
};

const styles1 = theme => ({
  success: {
    backgroundColor: "#95de64"
  },
  error: {
    backgroundColor: "#a8071a"
  },
  info: {
    backgroundColor: "#40a9ff"
  },
  warning: {
    backgroundColor: "#faad14"
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 2
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <Close className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: 2
  }
});

class CustomizedSnackbars extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button className={classes.margin} onClick={this.handleClick}>
          Open success snackbar
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
        <MySnackbarContentWrapper
          variant="error"
          className={classes.margin}
          message="This is an error message!"
        />
        <MySnackbarContentWrapper
          variant="warning"
          className={classes.margin}
          message="This is a warning message!"
        />
        <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="This is an information message!"
        />
        <MySnackbarContentWrapper
          variant="success"
          className={classes.margin}
          message="This is a success message!"
        />
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles2)(CustomizedSnackbars);
