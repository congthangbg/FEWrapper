import { Stack, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PropTypes from "prop-types";
import { memo, useState } from "react";
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
	const dateFormat = "YYYY-MM-DD";
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
					{/* <DatePicker
      defaultValue={[
        moment("2015-01-01", dateFormat),
        moment("2015-01-01", dateFormat)
      ]}
      format={dateFormat}
    /> */}
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
