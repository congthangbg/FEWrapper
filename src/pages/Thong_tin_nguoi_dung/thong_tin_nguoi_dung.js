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
import { TT_NGUOI_DUNG } from 'utils/MockData';
import toastifyAlert from 'components/SnackBar/toastifyAlert';
import { ON_FAIL, ON_SUCCESS } from 'utils/MessageContants';

function thong_tin_nguoi_dung(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  const classes = useStylesComboBox();
  let [open, setOpen] = useState(false);
  let [view, setView] = useState(false);
  let [dataEdit, setDataEdit] = useState(null);
  const [dataFake, setDataFake] = useState(TT_NGUOI_DUNG);
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
      align: 'center',
    },
    {
      field: 'userID',
      headerName: 'Tài Khoản',
      width: 150,
      align: 'center',
    },
    { field: 'userName', headerName: 'Tên Người Dùng', width: 150 },
    { field: 'idNo', headerName: 'CMND/Mã Số Thuế', width: 150 },
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
    { field: 'phone', headerName: 'Số Điện Thoại', width: 120 },
    {
      field: 'email',
      headerName: 'Email',
      sortable: false,
      flex: 1,
      width: 180,
    },
  ];

  //

  const onView = (second) => {
    setDataEdit(second);
    setView(true);
  };

  const onEdit = (row) => {
    setOpen(true);
    setDataEdit(row);
    // toastifyAlert.success('Success');
  };
  // const onView = useCallback((isClick) => {
  //   console.log(isClick);
  //   setView(true);
  // }, []);
  //const onEdit = useCallback((isClick) => {
  //   console.log(isClick);
  //   setOpen(true);
  // }, []);

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
            content={true}
          >
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={dataFake}
                columns={columns}
                checkBoxTable={false}
                onView={onView}
                onEdit={onEdit}
                textAction="Hành động"
                size={5}
                isAction={true}
                sizeAction={20}
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}

      <FormView
        open={view}
        title="Chi Tiết Người Dùng"
        onClose={() => setView(false)}
        onView={onView}
        view={view}
        dataEdit={dataEdit}
      />
      <FormDialog
        open={open}
        title="Cập nhật thông tin người dùng"
        onClose={() => setOpen(false)}
        onSave={onSave}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
      />
    </>
  );
}

thong_tin_nguoi_dung.propTypes = {};

export default memo(thong_tin_nguoi_dung);
