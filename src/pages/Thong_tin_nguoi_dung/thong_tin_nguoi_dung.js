import { Box, Grid } from '@mui/material';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import toastifyAlert from 'components/SnackBar/toastifyAlert';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import FormDialog from 'pages/Thong_tin_nguoi_dung/FormDialog';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import FormView from './FormView';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function thong_tin_nguoi_dung(props) {
  const dataLogin = useSelector((state) => state.loginReducer);

  let [open, setOpen] = useState(false);
  let [view, setView] = useState(false);

  const a = 3;

  const columns = [
    { field: 'stt', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'serID',
      headerName: 'Tài Khoản',
      width: 150,
      alignCenter: 'center',
    },
    { field: 'userName', headerName: 'Tên Người Dùng', width: 200 },
    { field: 'iDNo', headerName: 'CMND/Mã Số Thuế', width: 150 },
    { field: 'status', headerName: 'Trạng Thái', width: 200 },
    { field: 'phone', headerName: 'Số Điện Thoại', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      sortable: false,
      flex: 1,
      width: 100,
    },
  ];

  const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];
  const first = (second) => {
    console.log({ second });
    setOpen(true);
    // toastifyAlert.success('Success');
  };

  const onEdit = useCallback((isClick) => {
    console.log(isClick);
    setOpen(true);
  }, []);

  const onView = useCallback((isClick) => {
    console.log(isClick);
    setView(true);
  }, []);

  return (
    <>
      <ComponentSkeleton>
        <MainCard title="Thông tin người dùng">
          <MainCard title="Thông tin tìm kiếm">
            <Grid container xs={12} spacing={2}>
              <Grid container item xs={3}>
                <CustomTextField
                  label="Tài khoản"
                  clearText
                  onChange={(e) => console.log(e)}
                />
              </Grid>

              <Grid container item xs={3}>
                <CustomTextField
                  label="CMND/MST"
                  clearText
                  onChange={(e) => console.log(e)}
                />
              </Grid>

              <Grid container item xs={3}>
                <AutocompleteCustomer
                  options={rows}
                  textLabel="Trạng Thái"
                  error={false}
                  helperText=""
                  // optionLabel="firstName"
                  onChange={(e) => console.log(e)}
                />
              </Grid>

              <Grid item xs={3} mt={1}>
                <ContainedButtons />
              </Grid>
            </Grid>
          </MainCard>
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
            title="Danh sách người dùng"
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
                // onDelete={first}
                onView={onView}
                isAction={false}
                onEdit={onEdit}
                textAction="action"
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      <FormDialog
        open={open}
        title="Cập nhật thông tin người dùng"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      />
      <FormView
        open={view}
        title="Chi Tiết Người Dùng"
        onClose={() => setView(false)}
        onSave={() => setView(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_tin_nguoi_dung.propTypes = {};

export default memo(thong_tin_nguoi_dung);
