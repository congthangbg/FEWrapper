import { makeStyles } from "../../node_modules/@mui/styles/index";

export  const useStyles = makeStyles(theme => ({
  dataGrid: {
    p: 4,
    fontSize: 12,
    // fontFamily: 'Montserrat',
    // font: 'center',
    boxShadow: 2,
    border: 2,
    borderColor: 'primary.light',
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main',
    },
    // '& .super-app-theme--header': {
    //   backgroundColor: 'gray',
    // }

  },
  fabControl:{
    // backgroundColor:theme.palette.grey[200],
  },
  clearIndicator: {
    // color: "red",
    marginTop: -5
  },
  popupIndicator:{
    marginTop: -5
  }
  

}));
export default useStyles;