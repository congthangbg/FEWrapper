import { Box, Grid } from '@mui/material';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import FormView from './FormView';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function lich_su_nguoi_dung(props) {
  const dataLogin = useSelector((state) => state.loginReducer);

  let [open, setOpen] = useState(false);
  let [view, setView] = useState(false);

  const a = 3;

  const columns = [
    { field: 'stt', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'wp_Agency_ID',
      headerName: 'Ứng Dụng',
      width: 250,
      alignCenter: 'center',
    },
    { field: 'userID', headerName: 'User', width: 100 },
    { field: 'time_Log', headerName: 'Thời Gian', width: 100 },
    { field: 'ltt', headerName: 'Loại Thao Tác', width: 200 },
    { field: 'document', headerName: 'Tài Liệu Ký', width: 200 },
    {
      field: 'sign_status',
      headerName: 'Trạng Thái',
      sortable: false,
      flex: 1,
      width: 0,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  ];
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
        <MainCard title="Lịch sử người dùng">
          <MainCard title="Thông tin tìm kiếm">
            <Grid container xs={12} spacing={1}>
              <Grid container item xs={4}>
                <CustomTextField
                  label="User"
                  clearText
                  onChange={(e) => console.log(e)}
                />
              </Grid>

              <Grid container item xs={4} mt={0.9}>
                <CustomDatePicker label="Thời gian (từ ngày)" />
              </Grid>

              <Grid container item xs={4} mt={0.9}>
                <CustomDatePicker label="Thời gian (đến ngày)" />
              </Grid>

              <Grid container item xs={4} ml={1.1}>
                <AutocompleteCustomer
                  options={rows}
                  textLabel="Trạng Thái"
                  error={false}
                  helperText=""
                  // optionLabel="firstName"
                  onChange={(e) => console.log(e)}
                />
              </Grid>

              <Grid item xs={4} mt={5}>
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
            title="Lịch sử người dùng ký tài liệu"
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
                // onEdit={onEdit}
                textAction="action"
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      {/* <FormDialog
        open={open}
        title="Cập nhật thông tin người dùng"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      /> */}
      <FormView
        open={view}
        title="Chi tiết ứng dụng ký"
        onClose={() => setView(false)}
        onSave={() => setView(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

lich_su_nguoi_dung.propTypes = {};

export default memo(lich_su_nguoi_dung);
