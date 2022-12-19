import CustomDialog from "components/ConfirmDialog/CustomDialog";
import Loading from "components/Loading/index";
import MainCard from "components/MainCard";
import toastifyAlert from "components/SnackBar/toastifyAlert";
import DataTable from "components/TableCustome";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import {memo, useState} from "react";
import AutocompleteCustomer from "components/AutocompleteCustomer/index";
import { useSelector } from "react-redux";
import { Grid ,Box,Stack} from '@mui/material';
import { Autocomplete, TextField } from "../../../node_modules/@mui/material/index";
import CustomTextField from "components/CustomTextField/index";
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function demo(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  console.log({dataLogin});

  let [open, setOpen] = useState(false);
  const a = 3;


  const columns = [
    {field: "id", headerName: "ID", width: 70, color: "green"},
    {field: "firstName", headerName: "First name", width: 130},
    {field: "lastName", headerName: "Last name", width: 130},
    {
      field: "age",
      headerName: "Age",
      type: "number",
      //   width: 90,
      //   headerClassName: 'super-app-theme--header',
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {id: 1, lastName: "Snow", firstName: "Jon", age: 35},
    {id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
    {id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
    {id: 4, lastName: "Stark", firstName: "Arya", age: 16},
    {id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
    {id: 6, lastName: "Melisandre", firstName: null, age: 150},
    {id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
    {id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
    {id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
  ];
  const first = (second) => {
    console.log({second});
    setOpen(true);
    toastifyAlert.success("Success");
  };

  return (
    <>
      {a == 2 ? (
        <Box sx={{display: "flex"}}>
          <Loading />
        </Box>
      ) : (
        <ComponentSkeleton>
          <MainCard title="Demo1223">
            <Grid item xs={12} md={7} lg={8}>
              {a == 1 ? <div>sssss1113332</div> : 
           "sssss1113332"
              
              }

              <MainCard sx={{mt: 2}} content={false}>
                {/* <OrderTable /> */}
                <DataTable
                  rows={rows}
                  columns={columns}
                  checkBoxTable={false}
                  onEdit={first}
                  //   onDelete={first}
                />
              </MainCard>
            </Grid>
            <Grid item xs={4}>
              <AutocompleteCustomer
                options={rows}
                textLabel="Test"
                error={false}
                helperText=""
                optionLabel="firstName"
                onChange={(e) => console.log(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField clearText  onChange={(e) => console.log(e)}/>
            </Grid>
          </MainCard>
       
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      <CustomDialog
        open={open}
        title="Confirm"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

demo.propTypes = {};

export default memo(demo);
