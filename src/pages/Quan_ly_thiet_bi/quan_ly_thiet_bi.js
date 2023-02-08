import { Box, Grid } from '@mui/material';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import toastifyAlert from 'components/SnackBar/toastifyAlert';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
// import FormDialog from 'pages/Thong_tin_nguoi_dung/FormDialog';
import { memo, useCallback, useState } from 'react';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function quan_ly_thiet_bi(props) {
  let [open, setOpen] = useState(false);
  const a = 3;

  const columns = [
    { field: 'stt', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'device',
      headerName: 'Mã thiết bị',
      width: 150,
      alignCenter: 'center',
    },
    { field: 'platform', headerName: 'Loại thiết bị', width: 200 },
    { field: 'userName', headerName: 'Tên người dùng', width: 200 },
    {
      field: 'date',
      headerName: 'Ngày đăng ký',
      sortable: false,
      flex: 1,
      width: 200,
    },
  ];

  const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];
  return (
    <>
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm thiết bị">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
          <Grid container xs={12} spacing={2}>
            <Grid container item xs={3}>
              <CustomTextField
                label="Mã thiết bị"
                clearText
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid container item xs={3}>
              <CustomTextField
                label="Tên người dùng"
                clearText
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid container item xs={3}>
              <AutocompleteCustomer
                options={rows}
                textLabel="Loại thiết bị"
                error={false}
                helperText=""
                optionLabel="firstName"
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid item xs={3} mt={1}>
              <ContainedButtons />
            </Grid>
          </Grid>
        </MainCard>
        {/* </MainCard> */}
      </Grid>

      {a === 2 ? (
        <Box sx={{ display: 'flex' }}>
          <Loading />
        </Box>
      ) : (
        //Tách riêng từng cụm trắng
        <ComponentSkeleton>
          <MainCard
            title="Danh sách đấu nối"
            // onAdd={true}
            // addDisabled={true}
            // onClickAdd={onClickAdd}
            // titleAdd="Thêm mới"
          >
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={rows}
                columns={columns}
                // checkBoxTable={false}
                // onDelete={first}
                // onEdit={onEdit}
                // textAction="action"
                // onView1={first}
                // onDetail="ssssss"
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      {/* <FormDialog
        open={open}
        title="Chi Tiết Người Dùng"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      /> */}
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

quan_ly_thiet_bi.propTypes = {};

export default memo(quan_ly_thiet_bi);
