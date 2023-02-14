import { Box, Grid, TextField } from '@mui/material';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import InfoApp from './InfoApp';
import { Autocomplete } from '@mui/material';
import { useStylesComboBox } from 'utils/styles';
import { TT_APP_KY } from 'utils/MockData';
import toastifyAlert from 'components/SnackBar/toastifyAlert';
import { ON_FAIL, ON_SUCCESS } from 'utils/MessageContants';

function thong_tin_app_ky(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  const classes = useStylesComboBox();
  let [open, setOpen] = useState(false);
  let [isView, setIsView] = useState(false);
  let [dataEdit, setDataEdit] = useState(null);
  const [dataFake, setDataFake] = useState(TT_APP_KY);
  const a = 3;

  function getStatus(params) {
    if (params.row.status == 1) {
      return `Hoạt động`;
    } else if (params.row.status == 2) {
      return `Không hoạt động`;
    } else {
      return ``;
    }
  }
  const columns = [
    {
      field: 'id',
      headerName: 'STT',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'appCode',
      headerName: 'Mã app ký',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'appSecret',
      headerName: 'Tên app ký',
      flex: 1,
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      sortable: false,
      flex: 0.3,
      width: 100,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getStatus,
    },
  ];
  const onView = (second) => {
    setOpen(true);
    setDataEdit(second);
    setIsView(true);
  };
  const onEdit = (row) => {
    setOpen(true);
    setDataEdit(row);
    // toastifyAlert.success('Success');
  };
  const onSave = useCallback((data) => {
    setDataEdit(null);
    const idx = dataFake.findIndex((x) => x.id == data.id);
    const summerFruitsCopy = [...dataFake];
    if (idx == -1) {
      toastifyAlert.success(ON_FAIL);
      return;
    } else {
      summerFruitsCopy[idx] = data;
      setDataFake(summerFruitsCopy);
      toastifyAlert.success(ON_SUCCESS);
    }
    setOpen(false);
  }, []);

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
          >
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={dataFake}
                columns={columns}
                checkBoxTable={false}
                onEdit={onEdit}
                onView={onView}
                textAction="Hành động"
                size={5}
                isAction={true}
                sizeAction={20}
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      <InfoApp
        open={open}
        title={!isView ? 'Cập nhật ứng dụng ký' : 'Chi tiết ứng dụng ký'}
        onClose={() => setOpen(false)}
        onSave={onSave}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
        isView={isView}
        setIsView={setIsView}
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_tin_app_ky.propTypes = {};

export default memo(thong_tin_app_ky);
