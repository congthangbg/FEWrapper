import { Box, Grid } from '@mui/material';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import { TextField, Autocomplete } from '@mui/material';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function lich_su_thao_tac(props) {
  let [setView] = useState(false);

  const a = 3;

  const columns = [
    { field: 'id', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'nameOperation',
      headerName: 'Tên thao tác',
      width: 250,
      alignCenter: 'center',
    },
    { field: 'userID', headerName: 'User thực hiện', width: 200 },
    {
      field: 'time_Log',
      headerName: 'Thời gian thực hiện',
      width: 200,
      sortable: false,
      flex: 1,
    },
  ];

  const rows = [
    { id: 1, nameOperation: 'Snow', userID: 'Jon', time_Log: '07/03/2000' },
    {
      id: 2,
      nameOperation: 'Lannister',
      userID: 'Cersei',
      time_Log: '07/03/2000',
    },
  ];

  const onView = useCallback((isClick) => {
    console.log(isClick);
    setView(true);
  }, []);

  return (
    <>
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm lịch sử người dùng">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
          <Grid container spacing={1}>
            <Grid item xs={3} mt={1}>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Mã/Tên app ký"
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid container item xs={3} mt={0.9}>
              <CustomDatePicker label="Thời gian (từ ngày)" />
            </Grid>

            <Grid container item xs={3} mt={0.9}>
              <CustomDatePicker label="Thời gian (đến ngày)" />
            </Grid>

            <Grid item xs={2} mt={1.05}>
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
                isAction={false}
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
      {/* <FormView
        open={view}
        title="Chi tiết ứng dụng ký"
        onClose={() => setView(false)}
        onSave={() => setView(false)}
      /> */}
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

lich_su_thao_tac.propTypes = {};

export default memo(lich_su_thao_tac);
