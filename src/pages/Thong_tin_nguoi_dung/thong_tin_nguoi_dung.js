import { Box, Grid, TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import FormDialog from 'pages/Thong_tin_nguoi_dung/FormDialog';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import FormView from './FormView';
import { useStylesComboBox } from 'utils/styles';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function thong_tin_nguoi_dung(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  console.log({ dataLogin });
  const classes = useStylesComboBox();
  let [open, setOpen] = useState(false);
  let [view, setView] = useState(false);

  const a = 3;

  const columns = [
    { field: 'id', headerName: 'STT', width: 100, alignCenter: 'center' },
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
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      serID: 'Snow',
      userName: 'Jon',
      iDNo: 35545,
      status: 'Duyệt',
      phone: '0384829738',
      email: 'nttung.code@gmail.com',
    },
  ];

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
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm người dùng">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Tài Khoản"
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="CMND/MST"
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid item xs={3}>
              <Autocomplete
                id="size-small-outlined"
                size="small"
                options={columns}
                getOptionLabel={(option) => option.headerName}
                defaultValue={columns[0]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Trạng Thái" />
                )}
                classes={classes}
              />
            </Grid>

            <Grid item xs={3}>
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
                textAction="Hành động"
                size={5}
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
        // onSave={() => setView(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_tin_nguoi_dung.propTypes = {};

export default memo(thong_tin_nguoi_dung);
