import { Box, Grid } from '@mui/material';
import CustomTextField from 'components/CustomTextField/index';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { TS_CAU_HINH } from 'utils/MockData';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import { useStylesComboBox } from 'utils/styles';
import toastifyAlert from 'components/SnackBar/toastifyAlert';
import { ON_FAIL, ON_SUCCESS } from 'utils/MessageContants';

function thong_so_cau_hinh(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  let [open, setOpen] = useState(false);
  let [dataEdit, setDataEdit] = useState(null);
  const [dataFake, setDataFake] = useState(TS_CAU_HINH);
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
    { field: 'id', headerName: 'STT', width: 100, alignCenter: 'center' },
    {
      field: 'code',
      headerName: 'Mã tham số',
      width: 150,
      alignCenter: 'center',
    },
    { field: 'parameterName', headerName: 'Tên tham số', width: 300 },
    { field: 'type', headerName: 'Loại tham số', width: 250 },
    { field: 'value', headerName: 'Giá trị', width: 250 },
    {
      ield: 'status',
      headerName: 'Trạng thái',
      sortable: false,
      flex: 0.3,
      width: 160,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getStatus,
    },
  ];

  const onClickAdd = useCallback((isClick) => {
    console.log(isClick);
    setOpen(true);
  }, []);

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
        <MainCard title="Tìm kiếm thông số cấu hình">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
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
            title="Danh sách cấu hình"
            // onAdd={true}
            // // addDisabled={true}
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
                textAction="Hành động"
                size={5}
                isAction={true}
                sizeAction={20}
              />
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      <FormEdit
        open={open}
        title="Cập nhật tham số cấu hình"
        onClose={() => setOpen(false)}
        onSave={onSave}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
      />
      {/* <FormAdd
        open={open}
        title="Thêm mới tham số cấu hình"
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      /> */}
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

thong_so_cau_hinh.propTypes = {};

export default memo(thong_so_cau_hinh);
