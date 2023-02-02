import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

function CustomTextField(props) {
  const {
    endIcon,
    startIcon,
    value,
    defaultValue,
    readOnly,
    helperText,
    errors,
    label,
    clearText,
    onChange,
    size,
    width,
    ...rest
  } = props;

  const [text, setText] = useState(value);

  const onClear = () => {
    setText('');
  };
  useEffect(() => {
    onChange && onChange(text);
  }, [text]);

  return (
    <TextField
      label={label}
      size={size}
      onChange={(e) => setText(e.target.value)}
      InputProps={{
        endAdornment: clearText && text && (
          <InputAdornment position="start">
            <IconButton
              onClick={onClear}
              type="reset"
              sx={{ p: '10px' }}
              aria-label="search"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: startIcon && (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ),
      }}
      defaultValue={defaultValue}
      disabled={readOnly}
      helperText={helperText}
      error={Boolean(errors)}
      value={text}
      sx={{ width: width }}
      {...rest}
    />
  );
}
export default memo(CustomTextField);

CustomTextField.defaultProps = {
  variant: 'outlined',
  margin: 'dense',
  size: 'small',
  fullWidth: true,
  value: '',
  // label: 'Vui lòng nhập...',
  width: "100%",
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
};
