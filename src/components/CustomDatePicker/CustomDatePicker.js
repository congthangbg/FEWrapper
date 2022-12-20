import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import {TextField, Stack} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import moment from "../../../node_modules/moment/moment";
import {Close, Event} from "../../../node_modules/@mui/icons-material/index";
import {
  IconButton,
  InputAdornment,
} from "../../../node_modules/@mui/material/index";
function CustomDatePicker(props) {
  const {date, onChangeDate, width, helperText, error, title,disabled, ...rest} = props;

  const [value, setValue] = useState(date);

  const handleChange = (params) => {
    // console.log(moment(new Date(params)).format("DD/MM/YYYY"));
    setValue(params);
    onChangeDate && onChangeDate(params);
  };
  function handleClearDate() {
    setValue(null);
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} sx={{width: 300}} >
          <DesktopDatePicker
            label={title ? title : "Chọn ngày"}
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            clearable
						{...rest}
						disabled={disabled}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={helperText}
                error={error}
                // InputProps={{
                //   endAdornment:
                //     value && (
                //       <IconButton
                //         tooltip="Xóa"
                //         size="small"
                //         onClick={handleClearDate}
                //       >
                //         <Close fontSize="small" />
                //       </IconButton>
                //     ),
                // }}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
}
CustomDatePicker.defaultProps = {
  width: 300,
  helperText: "",
  error: false,
	disabled:false
};
CustomDatePicker.propTypes = {
  onChangeDate: PropTypes.func,
};

export default memo(CustomDatePicker);
