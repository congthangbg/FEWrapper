import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { PropTypes } from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { useStyles, useStylesComboBox } from './../../utils/styles';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

function AutocompleteCustomer({
  textLabel,
  options,
  error,
  helperText,
  optionLabel,
  multiple,
  required,
  size,
  disableClearable,
  width,
  onChange,
  value,
  ...rest
}) {
  const classes = useStylesComboBox();

  const [data, setData] = useState(value);

  const onChangeValue = (params) => {
    setData(params);
  };
  useEffect(() => {
    onChange(data);
  }, [data]);

  return (
    <Grid container spacing={1} alignItems="center">
      <Autocomplete
        value={data}
        disablePortal
        id="size-small-outlined"
        options={options}
        onChange={(event, value) => onChangeValue(value)}
        getOptionLabel={(option) => option[optionLabel] || ''}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label={textLabel ? textLabel : 'Label'}
            fullWidth
            error={Boolean(error)}
            helperText={helperText}
            size={size}
           
          />
        )}
        size={size}
        disableClearable={disableClearable}
        required={required}
        multiple={multiple}
        fullWidth
        classes={classes}
        sx={{ width: width }}
      />
    </Grid>
  );
}
AutocompleteCustomer.defaultProps = {
  size: 'small',
  optionLabel: 'name',
  required: false,
  optionValue: 'code',
  textLabel: 'Mời nhập thông tin',
  multiple: false,
  options: [],
  value: null,
  disabledLabel: '',
  disabled: false,
  endableSelectAll: false,
  disableClearable: false,
  width: 300,
};
AutocompleteCustomer.propTypes = {
  classes: PropTypes.object,
  multiple: PropTypes.bool,
  optionLabel: PropTypes.string,
  optionValue: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  textLabel: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  isItemDisabled: PropTypes.func,
  disabledLabel: PropTypes.string,
  disableClearable: PropTypes.bool,
  disabled: PropTypes.bool,
  endableSelectAll: PropTypes.bool,
};
export default memo(AutocompleteCustomer);
