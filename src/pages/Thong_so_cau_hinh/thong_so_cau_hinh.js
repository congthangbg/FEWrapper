import { Box, Grid } from '@mui/material';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function thong_so_cau_hinh(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  console.log({ dataLogin });

  let [open, setOpen] = useState(false);
  let [edit, setEdit] = useState(false);
  const a = 3;

  const columns = [
    { field: 'stt', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'code',
      headerName: 'Mã tham số',
      width: 150,
      alignCenter: 'center',
    },
    { field: 'name', headerName: 'Tên tham số', width: 200 },
    { field: 'type', headerName: 'Tên tham số', width: 200 },
    { field: 'value', headerName: 'Tên tham số', width: 200 },
    {
      field: 'status',
      headerName: 'Trạng thái',
      sortable: false,
      flex: 1,
      width: 160,
    },
  ];

  const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];
  const first = (second) => {
    console.log({ second });
    setOpen(true);
    // toastifyAlert.success('Success');
  };

  const onClickAdd = useCallback((isClick) => {
    console.log(isClick);
    setOpen(true);
  }, []);

  const onEdit = useCallback((isClick) => {
    console.log(isClick);
    setEdit(true);
  }, []);
  return (
    <>
      <ComponentSkeleton>
        <MainCard title="Thông Số Cấu Hình">
          <MainCard title="Thông tin tìm kiếm">
            <Grid container spacing={2}>
              <Grid container item xs={3}>
                <CustomTextField
                  label="Mã tham số"
                  clearText
                  onChange={(e) => console.log(e)}
                />
              </Grid>

              <Grid container item xs={3}>
                <CustomTextField
                  label="Tên tham số"
                  clearText
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
        </MainCard>
      </ComponentSkeleton>
      <br />
      {a === 2 ? (
        <Box sx={{ display: 'flex' }}>
          <Loading />
        </Box>
      ) : (
        //Tách riêng từng cụm trắng
        <ComponentSkeleton>
          <MainCard
            title="Danh sách cấu hình"
            onAdd={true}
            // addDisabled={true}
            onClickAdd={onClickAdd}
            titleAdd="Thêm mới"
          >
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={rows}
                columns={columns}
                checkBoxTable={false}
                onEdit={onEdit}
                //   onDelete={first}
                textAction="action"
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      <FormEdit
        open={edit}
        title="Cập nhật tham số cấu hình"
        onClose={() => setEdit(false)}
        onSave={() => setEdit(false)}
      />
      <FormAdd
        open={open}
        title="Thêm mới tham số cấu hình"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_so_cau_hinh.propTypes = {};

export default memo(thong_so_cau_hinh);
