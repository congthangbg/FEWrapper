import React from 'react';
import {
  Cancel,
  Close,
  Save,
} from '../../../node_modules/@mui/icons-material/index';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  Tooltip,
} from '../../../node_modules/@mui/material/index';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AutoComplete } from '../../../node_modules/antd/es/index';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
import CustomTextField from 'components/CustomTextField/index';
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
}));

const useStylesSm = makeStyles((theme) => ({
  paperWidthSm: {
    height: '400px',
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

export function FormView(props) {
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
  const mdClasses = useStylesMd();
  const lgClasses = useStylesLg();
  let dialogClasses = null;
  if (maxWidth === 'sm') {
    dialogClasses = smClasses;
  } else if (maxWidth === 'md') {
    dialogClasses = mdClasses;
  } else if (maxWidth === 'lg') {
    dialogClasses = lgClasses;
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
        <Grid
          container
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
        >
          <Grid item sx={6}>
            <CustomTextField label="Tài khoản" />
          </Grid>
          <Grid item sx={6}>
            <CustomTextField label="Tên người dùng" />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
        >
          <Grid item sx={6}>
            <CustomTextField label="Mã số  thuế" />
          </Grid>
          <Grid item sx={6}>
            <CustomTextField label="CMND" />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
        >
          <Grid item sx={6}>
            <CustomTextField label="Loại khách hàng" />
          </Grid>
          <Grid item sx={6}>
            <CustomTextField label="Trạng thái" />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
        >
          <Grid item sx={6}>
            <CustomTextField label="Số điện thoại" />
          </Grid>
          <Grid item sx={6}>
            <CustomTextField label="Email" />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
        >
          <Grid item sx={6}>
            <CustomTextField label="Địa chỉ" />
          </Grid>
          <Grid item sx={6}>
            <AutocompleteCustomer
              textLabel="Trạng thái thay đổi mật khẩu đăng nhập lần đầu"
              vd="outlined-basic"
              error={false}
              helperText=""
              // optionLabel="firstName"
              onChange={(e) => console.log(e)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      {dialogAction && (
        <DialogActions>
          {/* {onSave && (
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
          )} */}
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

FormView.propTypes = {
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

FormView.defaultProps = {
  maxWidth: 'md',
  saveText: 'Lưu lại',
  cancelText: 'Hủy',
  dialogAction: true,
  canSave: true,
};

export default FormView;
