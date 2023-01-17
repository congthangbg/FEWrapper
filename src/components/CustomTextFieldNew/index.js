
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';

// const styles = theme => ({
//   // root: {
//   //   // padding: `0px ${theme.spacing.unit}0px `,
//   //   margin: `${theme.spacing()}px 0px`,
//   // },
// });

function CustomTextField(props) {
  const {endIcon, startIcon, ...rest} = props;
  return <TextField
    InputProps={{
      endAdornment: endIcon && (
        <InputAdornment position="end">
          {endIcon}
        </InputAdornment>
      ),
      startAdornment: startIcon && (
        <InputAdornment position="start">
          {startIcon}
        </InputAdornment>
      ),
    }}
    {...rest} 
  />;
}
export default memo(CustomTextField);

CustomTextField.defaultProps = {
  variant: 'outlined',
  margin: 'dense',
  size: 'small',
  fullWidth: true,
  value: '',
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  margin: PropTypes.string,
  variant: PropTypes.string,
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
}