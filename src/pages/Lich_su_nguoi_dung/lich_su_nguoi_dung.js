import { Box, Grid } from '@mui/material';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import Loading from 'components/Loading/index';
import MainCard from 'components/MainCard';
import DataTable from 'components/TableCustom/DataTable';
import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { memo, useCallback, useState } from 'react';
import ContainedButtons from '../../components/ContainedButtons/ContainedButtons';
import FormView from './FormView';
import { TextField, Autocomplete } from '@mui/material';
import { LS_NGUOI_DUNG } from 'utils/MockData';
import { useSelector } from 'react-redux';
import { useStylesComboBox } from 'utils/styles';

function lich_su_nguoi_dung(props) {
  const dataLogin = useSelector((state) => state.loginReducer);
  const classes = useStylesComboBox();
  let [open, setOpen] = useState(false);
  let [view, setView] = useState(false);
  let [dataEdit, setDataEdit] = useState(null);
  const [dataFake, setDataFake] = useState(LS_NGUOI_DUNG);

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
    { field: 'id', headerName: 'STT', width: 50, alignCenter: 'center' },
    {
      field: 'wp_Agency_ID',
      headerName: 'Ứng Dụng',
      width: 250,
      alignCenter: 'center',
    },
    { field: 'userID', headerName: 'User', width: 220 },
    { field: 'timeLog', headerName: 'Thời Gian', width: 120 },
    { field: 'ltt', headerName: 'Loại Thao Tác', width: 220 },
    { field: 'document', headerName: 'Tài Liệu Ký', width: 220 },
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
    setDataEdit(second);
    setView(true);
  };

  return (
    <>
      <Grid item mb={1.5}>
        <MainCard title="Tìm kiếm lịch sử người dùng">
          {/* <MainCard title="Thông tin tìm kiếm"> */}
          <Grid container spacing={2}>
            <Grid item xs={2.5} mt={1}>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Mã/Tên app ký"
                onChange={(e) => console.log(e)}
              />
            </Grid>

            <Grid container item xs={2.5} ml={0.75} mt={0.9}>
              <CustomDatePicker label="Thời gian (từ ngày)" />
            </Grid>

            <Grid container item xs={2} ml={-1} mt={0.9}>
              <CustomDatePicker label="Thời gian (đến ngày)" />
            </Grid>

            <Grid item xs={2.5} mt={1}>
              <Autocomplete
                id="size-small-outlined"
                size="small"
                options={columns}
                getOptionLabel={(option) => option.headerName}
                defaultValue={columns[0]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Trạng Thái Ký" />
                )}
                // classes={classes}
              />
            </Grid>
            <Grid item xs={2} mt={1}>
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
          <MainCard title="Lịch sử người dùng ký tài liệu" content={true}>
            <Grid item xs={12} md={7} lg={8}>
              <DataTable
                rows={dataFake}
                columns={columns}
                checkBoxTable={false}
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
      <FormView
        open={view}
        title="Chi tiết ứng dụng ký"
        onClose={() => setView(false)}
        onView={onView}
        view={view}
        dataEdit={dataEdit}
      />
    </>
  );
}

lich_su_nguoi_dung.propTypes = {};

export default memo(lich_su_nguoi_dung);
