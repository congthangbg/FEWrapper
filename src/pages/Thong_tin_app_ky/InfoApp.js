import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';
import { CustomDialog } from './../../components/ConfirmDialog/CustomDialog';
import CustomDatePicker from 'components/CustomDatePicker/CustomDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { memo, useState } from 'react';

function InfoApp(props) {
  const { title, onClose, open, dataEdit } = props;

  // const [data, setData] = useState({});

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      appcode: dataEdit ? dataEdit.appcode : '',
      ipwhitelist: dataEdit ? dataEdit.ipwhitelist : '',
      status: dataEdit ? dataEdit.status : '',
      appDescription: dataEdit ? dataEdit.appDescription : '',
      phone: dataEdit ? dataEdit.phone : '',
      email: dataEdit ? dataEdit.email : '',
      setStartDate: Date.now(),
      createBy: dataEdit ? dataEdit.createBy : '',
    },
    validationSchema: Yup.object({
      appcode: Yup.string().max(255).trim().required('Chưa Nhập Tên'),
      ipwhitelist: Yup.string().max(255).trim().required('Chưa Nhập Danh Sách'),
      status: Yup.string().max(255).trim().required('Chưa Nhập Trạng Thái'),
      appDescription: Yup.string().max(255).trim().required('Chưa Nhập Mô Tả'),
      phone: Yup.string()
        .min(10, 'PHONE.MIN')
        .max(10, 'PHONE.MAX')
        .required('Chưa Nhập Số Điện Thoại'),
      email: Yup.string().max(255).trim().required('Chưa Nhập Email'),
      setStartDate: Yup.date()
        .nullable()
        .typeError('Start date is required')
        .required('Start Date is required'),
      createBy: Yup.string().max(255).trim().required('Chưa Click Người Tạo'),
    }),
    onSubmit: (values, { resetForm }) => {
      // onSave();
      console.log(values);
    },
  });

  const handleSave = () => {
    // onSave(data);
    console.log(formik.values);
    //
    // formik.resetForm();
  };

  const [value, setValue] = useState(dayjs('2022-04-07'));
  // console.log('valie', value);
  return (
    <CustomDialog
      maxWidth="sm"
      title={title}
      open={open}
      onSave={handleSave}
      onClose={onClose}
      onCancel={onClose}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} mt={-4}>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.appcode && formik.errors.appcode)}
              fullWidth
              helperText={formik.touched.appcode && formik.errors.appcode}
              label="Mã App Ký"
              margin="normal"
              name="appcode"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.appcode}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(
                formik.touched.ipwhitelist && formik.errors.ipwhitelist
              )}
              fullWidth
              helperText={
                formik.touched.ipwhitelist && formik.errors.ipwhitelist
              }
              label="Danh dách IP"
              margin="normal"
              name="ipwhitelist"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.ipwhitelist}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>

          <Grid item xs={6} mt={-2.8}>
            <TextField
              error={Boolean(formik.touched.status && formik.errors.status)}
              fullWidth
              helperText={formik.touched.status && formik.errors.status}
              label="Trạng Thái"
              margin="normal"
              name="status"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.status}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>
          <Grid item xs={6} mt={-2.8}>
            <TextField
              error={Boolean(
                formik.touched.appDescription && formik.errors.appDescription
              )}
              fullWidth
              helperText={formik.touched.status && formik.errors.appDescription}
              label="Mô Tả"
              margin="normal"
              name="appDescription"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.appDescription}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>

          <Grid item xs={6} mt={-2.8}>
            <TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Số Điện Thoại"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>
          <Grid item xs={6} mt={-2.8}>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>

          <Grid item xs={6} mt={-0.6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="For desktop"
                  name="setStartDate"
                  sỉze="small"
                  value={formik.values.setStartDate}
                  minDate={dayjs('2017-01-01')}
                  onChange={(newValue) => {
                    formik.setFieldValue('setStartDate', new Date(newValue));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} mt={-2.6}>
            <TextField
              error={Boolean(formik.touched.createBy && formik.errors.createBy)}
              fullWidth
              helperText={formik.touched.createBy && formik.errors.createBy}
              label="Người Tạo"
              margin="normal"
              name="createBy"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.createBy}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>
        </Grid>
      </form>
    </CustomDialog>
  );
}

// eslint-disable-next-line react/no-typos
InfoApp.propTypes = {
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  assignPermission: PropTypes.array,
  setFieldValue: PropTypes.number,
};

function mapDispatchToProps(dispatch) {
  return {
    // onGetGeneralCategory: query => dispatch(actions.getGeneralCategory(query)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(InfoApp);
