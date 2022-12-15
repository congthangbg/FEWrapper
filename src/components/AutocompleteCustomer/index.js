import React, { memo } from "react";
import {
  Autocomplete,
  TextField,
} from "../../../node_modules/@mui/material/index";

  function AutocompleteCustomer({label, data,error,helperText,nameData}) {

	const onChange = (params) => {
		console.log(params);
	}
  return (
    <div>
      <Autocomplete
        fullWidth
        disablePortal
        id="basic-autocomplete-label"
        options={data}
				onChange={(event, value) => onChange(value)}
        getOptionLabel={option => `${option}.${nameData}`}
        renderInput={(params) => (
          <TextField
                      {...params}
                      margin="normal"
                      label={label ? label :"Label"}
                      fullWidth
                      error={Boolean(error)}
                      helperText={helperText}
                    />
        )}
      />
    </div>
  );
}
export default memo(AutocompleteCustomer)
