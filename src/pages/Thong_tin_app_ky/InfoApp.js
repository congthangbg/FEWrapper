import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';
import { CustomDialog } from './../../components/ConfirmDialog/CustomDialog';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { memo } from 'react';
import { NOTIFY, PHONE, emailRegExp, phoneRegExp } from 'utils/MessageContants';
import { Autocomplete } from '../../../node_modules/@mui/material/index';
import { useStylesComboBox } from 'utils/styles';

function InfoApp(props) {
  const {
    title,
    onClose,
    open,
    dataEdit,
    setDataEdit,
    onSave,
    isView,
    setIsView,
  } = props;
  const classes = useStylesComboBox();
  const status = [
    { id: 1, name: 'Hoạt động' },
    { id: 2, name: 'Không hoạt động' },
  ];

  const onCloseForm = () => {
    onClose();
    setDataEdit(null);
    setIsView(false);
  };

  React.useEffect(() => {
    if (!open) setDataEdit(null);
  }, [open]);

  // const [data, setData] = useState({});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataEdit ? dataEdit.id : '',
      appCode: dataEdit ? dataEdit.appCode : '',
      ipWhitelist: dataEdit ? dataEdit.ipWhitelist : '',
      status: dataEdit
        ? status.find((x) => x.id == dataEdit.status)
        : status[0],
      description: dataEdit ? dataEdit.description : '',
      phone: dataEdit ? dataEdit.phone : '',
      email: dataEdit ? dataEdit.email : '',
      createBy: dataEdit ? dataEdit.createBy : '',
      createDate: dataEdit ? new Date(dataEdit.createDate) : '',
      appSecret: dataEdit ? dataEdit.appSecret : '',
    },
    validationSchema: Yup.object({
      appCode: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      ipWhitelist: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      status: Yup.object().nullable().required(NOTIFY.STATUS),
      description: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      phone: Yup.string()
        .min(8, PHONE.MIN)
        .max(10, PHONE.MAX)
        .matches(phoneRegExp, PHONE.VALID_PHONE),
      email: Yup.string()
        .max(255)
        .trim()
        .matches(emailRegExp, NOTIFY.EMAIL_VALID)
        .required(NOTIFY.EMAIL),
      createDate: Yup.date()
        .nullable()
        // .typeError('Start date is required1')
        .max(new Date(), NOTIFY.DATE),
      createBy: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
    }),
    onSubmit: (values, { resetForm }) => {
      // onSave();
      const value = {
        ...values,
        status: values.status.id,
        createDate: new Date(values.createDate).getTime(),
      };
      onSave(value);
      formik.resetForm();
    },
  });

  const handleSave = () => {
    formik.handleSubmit();
  };
  return (
    <CustomDialog
      maxWidth="sm"
      title={title}
      open={open}
      onSave={isView ? null : handleSave}
      onClose={onCloseForm}
      onCancel={onCloseForm}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} mt={-3}>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.appCode && formik.errors.appCode)}
              fullWidth
              helperText={formik.touched.appCode && formik.errors.appCode}
              label="Mã app ký"
              margin="normal"
              name="appCode"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.appCode}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(
                formik.touched.ipWhitelist && formik.errors.ipWhitelist
              )}
              fullWidth
              helperText={
                formik.touched.ipWhitelist && formik.errors.ipWhitelist
              }
              label="Danh sách IP"
              margin="normal"
              name="ipWhitelist"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.ipWhitelist}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled={isView ? true : false}
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              id="size-small-outlined"
              size="small"
              name="status"
              options={status}
              getOptionLabel={(option) => option.name}
              defaultValue={status[0]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Trạng thái"
                  error={Boolean(formik.touched.status && formik.errors.status)}
                  helperText={formik.touched.status && formik.errors.status}
                />
              )}
              disabled={isView ? true : false}
              classes={classes}
              onChange={(event, value) => formik.setFieldValue('status', value)}
              value={
                formik.values && formik.values.status
                  ? status.find((x) => x.id == formik.values.status.id)
                  : undefined
              }
            />
          </Grid>
          <Grid item xs={6} mt={-2}>
            <TextField
              error={Boolean(
                formik.touched.description && formik.errors.description
              )}
              fullWidth
              helperText={
                formik.touched.description && formik.errors.description
              }
              label="Mô tả"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled={isView ? true : false}
            />
          </Grid>

          <Grid item xs={6} mt={-2}>
            <TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Số điện thoại"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled={isView ? true : false}
            />
          </Grid>
          <Grid item xs={6} mt={-2}>
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
              size="small"
              disabled={isView ? true : false}
            />
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Ngày tạo"
                  name="createDate"
                  value={
                    formik.values.createDate ? formik.values.createDate : ''
                  }
                  minDate={dayjs('01-01-2020')}
                  inputFormat="DD/MM/YYYY"
                  onChange={(newValue) => {
                    formik.setFieldValue('createDate', new Date(newValue));
                  }}
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                  disabled
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} mt={-2}>
            <TextField
              error={Boolean(formik.touched.createBy && formik.errors.createBy)}
              fullWidth
              helperText={formik.touched.createBy && formik.errors.createBy}
              label="Người tạo"
              margin="normal"
              name="createBy"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.createBy}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
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
