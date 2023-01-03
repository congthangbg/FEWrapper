import {React, useEffect, useState} from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Autocomplete,
  SvgIcon,
  Typography,
  Grid,
  Paper,
  IconButton,
  Fab,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {styled} from "@mui/material/styles";
import {Search} from "../../../node_modules/@mui/icons-material/index";
function BoxFieldSearch(props) {
  const {
    setOpen,
    handleSearch,
    onSearch,
    query,
    setQuery,
    title,
    isCombox,
    isComboxVillage,
    dataVillage,
    dataType,
    isComboxProType,
  } = props;
  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [data, setData] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const newData = {
        ...query,
        keySearch: data ? data : "",
        page: 0,
        skip: 0,
      };
      setQuery(newData);
      onSearch(newData);
    }
  };
  const onTextSearch = (e) => {
    setData(e.target.value);
  };
  const onClear = () => {
    const newData = {
      ...query,
      keySearch: "",
    };
    setQuery(newData);
    setData("");
    onSearch(newData);
  };
  const onChange = (e) => {
    if (e) {
      const newData = {
        ...query,
        status: e ? e.id : "",
        page: 0,
        skip: 0,
        villageId: e && e.id ? e.id : "",
        type: (e && e.id) || "",
      };
      setQuery(newData);
      onSearch(newData);
    } else if (e == null) {
      const newData = {
        ...query,
        status: "",
        type: "",
        villageId: "",
        page: 0,
        skip: 0,
        keySearch: "",
      };
      setQuery(newData);
      onSearch(newData);
    }
  };
  const search = () => {
    const newData = {
      ...query,
      keySearch: data ? data : "",
      page: 0,
      skip: 0,
    };
    setQuery(newData);
    onSearch(newData);
  };
  return (
    <Grid container spacing={2} mb={1}>
      <Grid item xs={12} md={12} sm={12} mt={-1}>
        <Typography variant="h5">
          {title ? title : "Thông tin tìm kiếm"}
        </Typography>
      </Grid>
      <Grid item xs={3} md={3} sm={3}>
        <TextField
          size="small"
          variant="outlined"
          id="outlined-basic-small"
          fullWidth
          onChange={onTextSearch}
          onKeyPress={handleKeyPress}
          value={(data && data) || ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={onClear}
                  type="reset"
                  sx={{p: "10px"}}
                  aria-label="search"
                >
                  <ClearIcon />
                </IconButton>
                <IconButton
                  onClick={search}
                  type="submit"
                  sx={{p: "10px"}}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Tìm kiếm..."
          sx={{
            "& .MuiInputLabel-root": {fontSize: "1rem"},
            "& .MuiOutlinedInput-root": {fontSize: "1rem"},
          }}
        />
      </Grid>

      {isCombox == true ? (
        <Grid item xs={3} md={3}>
          <Autocomplete
            size="small"
            onChange={(event, value) => onChange(value)}
            disablePortal
            id="combo-box-demo"
            // options={status}
            getOptionLabel={(op) => op.name}
            sx={{width: 300}}
            renderInput={(params) => (
              <TextField {...params} label="Trạng thái" />
            )}
          />
        </Grid>
      ) : (
        ""
      )}
      {isComboxVillage == true ? (
        <Grid item xs={3} md={3}>
          <Autocomplete
            size="small"
            onChange={(event, value) => onChange(value)}
            disablePortal
            id="combo-box-demo"
            options={dataVillage ? dataVillage : []}
            getOptionLabel={(op) => op.name}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Thôn" />}
          />
        </Grid>
      ) : (
        ""
      )}
      {isComboxProType == true ? (
        <Grid item xs={3} md={3}>
          <Autocomplete
            size="small"
            onChange={(event, value) => onChange(value)}
            disablePortal
            id="combo-box-demo"
            options={(dataType && dataType.data) || []}
            getOptionLabel={(op) => op.typeName}
            sx={{width: 300}}
            renderInput={(params) => (
              <TextField {...params} label="Loại sản phẩm" />
            )}
          />
        </Grid>
      ) : (
        ""
      )}

      <Grid item xs={6} md={8}>
        <Button
          // size="small"
          color="primary"
          variant="contained"
          onClick={onSearch}
          // fontSize="medium"
        >
          Tìm kiếm
        </Button>
      </Grid>
    </Grid>
  );
}
BoxFieldSearch.propTypes = {
  // isComboxVillage: PropTypes.bool,
  // isCombox: PropTypes.bool,
};

export default BoxFieldSearch;
