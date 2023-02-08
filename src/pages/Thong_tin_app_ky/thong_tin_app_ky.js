import { Box, Grid, TextField } from '@mui/material';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import InfoApp from './InfoApp';
import { Autocomplete } from '@mui/material';
import { useStylesComboBox } from 'utils/styles';

function thong_tin_app_ky(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  const classes = useStylesComboBox();
  let [open, setOpen] = useState(false);
  const a = 3;

  const columns = [
    // { field: 'id', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'appcode',
      headerName: 'Mã app ký',
      width: 150,
      alignCenter: 'center',
    },
    { field: 'firstName', headerName: 'Tên app ký', width: 200 },
    {
      field: 'age',
      headerName: 'Trạng thái',
      sortable: false,
      flex: 1,
      width: 160,
    },
  ];

  const rows = [{ id: 1, appcode: '01021', firstName: 'Jon', age: '35' }];
  const first = (second) => {
    setOpen(true);
    // toastifyAlert.success('Success');
  };

  //   const onClickAdd = useCallback((isClick) => {
  //     console.log(isClick);
  //     setOpen(true);
  //   }, []);

  return (
    <>
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm ứng dụng ký">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Mã/Tên app ký"
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

            {/* <Grid item xs={4}>
              <CustomDatePicker />
            </Grid> */}
          </Grid>
          {/* </MainCard> */}
        </MainCard>
      </Grid>

      {a === 2 ? (
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
            content={true}
            // contentSX={5000}
          >
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={rows}
                columns={columns}
                checkBoxTable={false}
                onEdit={first}
                onDelete={first}
                onView={first}
                textAction="Hành động"
                size={5}
                isAction={true}
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <CustomDialog
      <FormView
        open={open}
        title="Chi tiết ứng dụng ký"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      /> */}
      <InfoApp
        open={open}
        title="Chi tiết ứng dụng ký"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_tin_app_ky.propTypes = {};

export default memo(thong_tin_app_ky);
