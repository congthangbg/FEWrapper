import { Box, Grid } from '@mui/material';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useState } from 'react';
import { QL_THIET_BI } from 'utils/MockData';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';

function quan_ly_thiet_bi(props) {
  let [open] = useState(false);
  const [dataFake] = useState(QL_THIET_BI);
  const a = 3;

  const columns = [
    {
      field: 'id',
      headerName: 'STT',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'device_id',
      headerName: 'Mã thiết bị',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'platform',
      headerName: 'Loại thiết bị',
      width: 300,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'userName',
      headerName: 'Tên người dùng',
      width: 300,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'registration_date',
      headerName: 'Ngày đăng ký',
      sortable: false,
      flex: 1,
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <>
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm thiết bị">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CustomTextField
                label="Mã thiết bị"
                clearText
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid item xs={3}>
              <CustomTextField
                label="Tên người dùng"
                clearText
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid item xs={3}>
              <AutocompleteCustomer
                options={dataFake}
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
      </Grid>

      {a === 2 ? (
        <Box sx={{ display: 'flex' }}>
          <Loading />
        </Box>
      ) : (
        //Tách riêng từng cụm trắng
        <ComponentSkeleton>
          <MainCard title="Danh sách đấu nối" content={true}>
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={dataFake}
                columns={columns}
                isAction={false}
                size={5}
                sizeAction={20}
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
    </>
  );
}

quan_ly_thiet_bi.propTypes = {};

export default memo(quan_ly_thiet_bi);
