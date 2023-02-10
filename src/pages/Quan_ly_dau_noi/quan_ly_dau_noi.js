import { Box, Grid } from '@mui/material';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { QL_DAU_NOI } from 'utils/MockData';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
// import { Component} form '../'
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function quan_ly_dau_noi(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  console.log({ dataLogin });
  const [dataFake, setDataFake] = useState(QL_DAU_NOI);

  // let [open, setOpen] = useState(false);
  // let [edit, setEdit] = useState(false);
  const a = 3;

  const columns = [
    { field: 'id', headerName: 'STT', width: 100, alignCenter: 'center' },

    { field: 'nameUser', headerName: 'Người dùng', width: 400 },
    { field: 'type', headerName: 'Gói cước', width: 400 },
    {
      field: 'list',
      headerName: 'Danh sách app ký',
      sortable: false,
      flex: 1,
      width: 160,
    },
  ];

  // const rows = [
  //   { id: 1, nameUser: 'Snow', type: '3G', status: 'Lèo Tèo Test' },
  // ];
  return (
    <>
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm đầu nối">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
          <Grid container spacing={2}>
            <Grid container item xs={3}>
              <CustomTextField
                label="Mã đầu nối"
                clearText
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid container item xs={3}>
              <CustomTextField
                label="Tên đầu nối"
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
        {/* </MainCard> */}
      </Grid>

      {a === 2 ? (
        <Box sx={{ display: 'flex' }}>
          <Loading />
        </Box>
      ) : (
        //Tách riêng từng cụm trắng
        <ComponentSkeleton>
          <MainCard title="Danh sách đầu  nối">
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={dataFake}
                columns={columns}
                checkBoxTable={false}
                isAction={false}
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
    </>
  );
}

quan_ly_dau_noi.propTypes = {};

export default memo(quan_ly_dau_noi);
