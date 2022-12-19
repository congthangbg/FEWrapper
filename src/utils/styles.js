import { makeStyles } from "../../node_modules/@mui/styles/index";

export  const useStyles = makeStyles(theme => ({
  dataGrid: {
    // p: 4,
    // fontSize: 12,
    // // fontFamily: 'Montserrat',
    // // font: 'center',
    // boxShadow: 2,
    // border: 2,
    // borderColor: 'primary.light',
    // '& .MuiDataGrid-cell:hover': {
    //   color: 'primary.main',
    // },
    // // '& .super-app-theme--header': {
    // //   backgroundColor: 'gray',
    // // }
    fontSize: 14,
    border: 0,
    color: 'rgba(0,0,0,.85)' ,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor:  '#1d1d1d' ,
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      // borderRight: `1px solid ${
      //   '#f0f0f0' 
      // }`,
      borderBottom: `1px solid ${
        '#f0f0f0' 
      }`,
      // borderLeft: `1px solid ${
      //   '#f0f0f0' 
      // }`
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        '#f0f0f0' 
      }`
    },
    '& .MuiDataGrid-cell': {
      color:
        'rgba(0,0,0,.85)' ,
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 1,
    },

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