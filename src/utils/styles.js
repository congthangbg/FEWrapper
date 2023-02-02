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
  //   fontSize: 14,
  //   color: 'rgba(0,0,0,.85)' ,
  //   fontFamily: [
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  //   WebkitFontSmoothing: 'auto',
  //   letterSpacing: 'normal',

  //   '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
  //     borderRight: `0px solid ${
  //       '#f0f0f0' 
  //     }`,
  //     border: `1px solid  ${'#f0f0f0'} `,
  //   },
  //   '& .MuiDataGrid-columnHeaders': {
  //     color: `${'#1f1f1f'} `,
  //     backgroundColor: '#bae7ff'
  //   },
  //   borderBottom: `1px solid ${'#f0f0f0'}`
  },

}));


export const useStylesComboBox = makeStyles(theme => ({
  clearIndicator: {
    marginTop: -4
  },
  popupIndicator:{
    marginTop: -4,
    marginRight:-8,
  },
  inputRoot: {
    height: `2.2rem`
  },
 
}))
export default useStyles;