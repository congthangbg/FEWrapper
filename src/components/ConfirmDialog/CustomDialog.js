import React from 'react';
import {
  Cancel,
  Close,
  Save,
} from '../../../node_modules/@mui/icons-material/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Tooltip,
} from '../../../node_modules/@mui/material/index';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 6,
  },
  closeButton: {
    position: 'absolute',
    right: 3,
    top: 3,
    color: '#595959',
  },
  paperWidthLg: {
    height: '852px',
  },
  paperWidthMd: {
    height: '640px',
  },
  paperWidthSm: {
    height: '296px',
  },
  paperWidthSm1: {
    height: '296px',
  },
  paperWidthSm2: {
    height: '296px',
  },
}));

const useStylesSm = makeStyles((theme) => ({
  paperWidthSm: {
    // height: '350px',
    width: '630px',
  },
}));
const useStylesSm1 = makeStyles((theme) => ({
  paperWidthSm1: {
    height: '320px',
    width: '650px',
  },
}));
const useStylesSm2 = makeStyles((theme) => ({
  paperWidthSm2: {
    height: '280px',
    width: '650px',
  },
}));

const useStylesMd = makeStyles((theme) => ({
  paperWidthMd: {
    height: '640px',
  },
}));

const useStylesLg = makeStyles((theme) => ({
  paperWidthLg: {
    height: '852px',
  },
}));

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export function CustomDialog(props) {
  const {
    title,
    children,
    onClose,
    open,
    onSave,
    canSave,
    onCancel,
    saveText,
    cancelText,
    maxWidth,
    dialogAction,
    extraAction,
    disabledFlex,
  } = props;

  const classes = useStyles();
  const smClasses = useStylesSm();
  const smClasses1 = useStylesSm1();
  const smClasses2 = useStylesSm2();
  const mdClasses = useStylesMd();
  const lgClasses = useStylesLg();
  let dialogClasses = null;
  if (maxWidth === 'sm') {
    dialogClasses = smClasses;
  } else if (maxWidth === 'md') {
    dialogClasses = mdClasses;
  } else if (maxWidth === 'lg') {
    dialogClasses = lgClasses;
  } else if (maxWidth === 'sm1') {
    dialogClasses = smClasses1;
  } else if (maxWidth === 'sm2') {
    dialogClasses = smClasses2;
  }

  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth
      maxWidth={maxWidth}
      onClose={onClose}
      open={open}
      classes={dialogClasses}
    >
      {title && (
        <DialogTitle id="alert-dialog-title" className={classes.root}>
          {title}
          {onClose && (
            <Tooltip title="Đóng">
              <IconButton
                size="small"
                aria-label="close"
                onClick={onClose}
                className={classes.closeButton}
              >
                <Close />
              </IconButton>
            </Tooltip>
          )}
        </DialogTitle>
      )}

      <DialogContent
        dividers
        className="dialog-content"
        style={
          !disabledFlex ? { display: 'flex', flexDirection: 'column' } : {}
        }
      >
        {children}
      </DialogContent>
      {dialogAction && (
        <DialogActions>
          {onSave && (
            // checkHasPermission(currentUser, savePermission) &&
            <Button
              startIcon={<Save />}
              size="small"
              onClick={onSave}
              disabled={!canSave}
              color="primary"
              variant="contained"
            >
              {saveText}
            </Button>
          )}
          {/* {checkHasPermission(currentUser, closePermission) && ( */}
          <Button
            startIcon={<Cancel />}
            size="small"
            onClick={onCancel || onClose}
            color="secondary"
            variant="contained"
          >
            {cancelText}
          </Button>
          {/* )} */}
          {extraAction}
        </DialogActions>
      )}
    </Dialog>
  );
}

CustomDialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  saveText: PropTypes.string,
  cancelText: PropTypes.string,
  maxWidth: PropTypes.string,
  dialogAction: PropTypes.bool,
  canSave: PropTypes.bool,
  extraAction: PropTypes.object,
  disabledFlex: PropTypes.bool,
  currentUser: PropTypes.object,
  savePermission: PropTypes.string,
  closePermission: PropTypes.string,
};

CustomDialog.defaultProps = {
  maxWidth: 'md',
  saveText: 'Lưu lại',
  cancelText: 'Hủy',
  dialogAction: true,
  canSave: true,
};

export default CustomDialog;
