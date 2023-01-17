import { Box, Grid } from '@mui/material';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
import CustomDialog from 'components/ConfirmDialog/CustomDialog';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import toastifyAlert from 'components/SnackBar/toastifyAlert';
import DataTable from 'components/TableCustom';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import { InfoApp } from './InfoApp';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function thong_tin_app_ky(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  console.log({ dataLogin });

  let [open, setOpen] = useState(false);
  const a = 3;

  const columns = [
    { field: 'stt', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'appcode',
      headerName: 'Mã app ký',
      width: 150,
      alignCenter: 'center',
    },
    { field: 'nameappky', headerName: 'Tên app ký', width: 200 },
    { field: 'status', headerName: 'Trạng thái', width: 150 },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  const first = (second) => {
    console.log({ second });
    setOpen(true);
    toastifyAlert.success('Success');
  };

  //   const onClickAdd = useCallback((isClick) => {
  //     console.log(isClick);
  //     setOpen(true);
  //   }, []);

  return (
    <>
      <ComponentSkeleton>
        <MainCard title="Thông tin tìm kiếm">
          <Grid container>
            <Grid item xs={3}>
              <CustomTextField clearText onChange={(e) => console.log(e)} />
            </Grid>

            <Grid item xs={3}>
              <AutocompleteCustomer
                options={rows}
                textLabel="Trạng Thái"
                error={false}
                helperText=""
                optionLabel="firstName"
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid item xs={3} mt={1}>
              <ContainedButtons />
            </Grid>

            {/* <Grid item xs={4}>
              <CustomDatePicker />
            </Grid> */}
          </Grid>
        </MainCard>
      </ComponentSkeleton>
      <br />
      {a == 2 ? (
        <Box sx={{ display: 'flex' }}>
          <Loading />
        </Box>
      ) : (
        //Tách riêng từng cụm trắng
        <ComponentSkeleton>
          <MainCard
            title="Danh sách ứng dụng ký"
            // onAdd={true}
            // addDisabled={true}
            // onClickAdd={onClickAdd}
            // titleAdd="Thêm mới"
          >
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={rows}
                columns={columns}
                checkBoxTable={false}
                onEdit={first}
                //   onDelete={first}
                textAction="action"
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      {/* <CustomDialog
        open={open}
        title="Confirm"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      /> */}
      <InfoApp
       open={open}
       title="Confirm"
       onClose={() => setOpen(false)}
       onSave={() => setOpen(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_tin_app_ky.propTypes = {};

export default memo(thong_tin_app_ky);
