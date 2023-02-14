import * as React from 'react';
import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Grid, TextField } from '@mui/material';
import { CustomDialog } from './../../components/ConfirmDialog/CustomDialog';
import { Autocomplete } from '../../../node_modules/@mui/material/index';
import { useStylesComboBox } from 'utils/styles';
import { PHONE, NOTIFY, emailRegExp, phoneRegExp } from 'utils/MessageContants';

function FormDialog(props) {
  const { title, onClose, open, dataEdit, setDataEdit, onSave } = props;
  const classes = useStylesComboBox();
  const status = [
    { id: 1, name: 'Hoạt động' },
    { id: 2, name: 'Không hoạt động' },
  ];
  const custType = [
    { id: 1, name: 'Thân thiết' },
    { id: 0, name: 'Không thân thiết' },
  ];

  const onCloseForm = () => {
    onClose();
    setDataEdit(null);
  };

  React.useEffect(() => {
    if (!open) setDataEdit(null);
  }, [open]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataEdit ? dataEdit.id : '',
      userID: dataEdit ? dataEdit.userID : '',
      userName: dataEdit ? dataEdit.userName : '',
      codetin: dataEdit ? dataEdit.codetin : '',
      idNo: dataEdit ? dataEdit.idNo : '',
      custType: dataEdit
        ? custType.find((x) => x.id == dataEdit.custType)
        : custType[0],
      status: dataEdit
        ? status.find((x) => x.id == dataEdit.status)
        : status[0],
      phone: dataEdit ? dataEdit.phone : '',
      email: dataEdit ? dataEdit.email : '',
      address: dataEdit ? dataEdit.address : '',
    },
    validationSchema: Yup.object({
      userID: Yup.string().max(255).trim().required(NOTIFY.NOT_USER),
      userName: Yup.string().max(255).trim().required(NOTIFY.NOT_NAME),
      codetin: Yup.string().max(255).trim().required('Chưa Nhập Danh Sách'),
      idNo: Yup.string().max(255).trim().required('Chưa Nhập Trạng Thái'),
      custType: Yup.object().nullable().required('NOTIFY.VILLAGE'),
      status: Yup.object().nullable().required('NOTIFY.VILLAGE'),
      phone: Yup.string()
        .min(8, PHONE.MIN)
        .max(10, PHONE.MAX)
        .matches(phoneRegExp, PHONE.VALID_PHONE),
      email: Yup.string()
        .max(255)
        .trim()
        .matches(emailRegExp, NOTIFY.EMAIL_VALID)
        .required(NOTIFY.EMAIL),
      address: Yup.string().max(255).trim().required('Chưa Click Ngày Tạo'),
    }),
    onSubmit: (values, { resetForm }) => {
      // onSave();
      const value = {
        ...values,
        status: values.status.id,
        custType: values.custType.id,
        // createDate: new Date(values.createDate).getTime()
      };
      onSave(value);
      formik.resetForm();
    },
  });

  const handleSave = () => {
    // console.log(formik.values);
    formik.handleSubmit();
  };

  return (
    <CustomDialog
      maxWidth="sm"
      title={title}
      open={open}
      onSave={handleSave}
      onClose={onCloseForm}
      onCancel={onCloseForm}
      // className={classes.formControl}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} mt={-4}>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.userID && formik.errors.userID)}
              fullWidth
              helperText={formik.touched.userID && formik.errors.userID}
              label="Tài Khoản"
              margin="normal"
              name="userID"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userID}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.userName && formik.errors.userName)}
              fullWidth
              helperText={formik.touched.userName && formik.errors.userName}
              label="Tên Người Dùng"
              margin="normal"
              name="userName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userName}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.codetin && formik.errors.codetin)}
              fullWidth
              helperText={formik.touched.codetin && formik.errors.codetin}
              label="Mã Số Thuế"
              margin="normal"
              name="codetin"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.codetin}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.idNo && formik.errors.idNo)}
              fullWidth
              helperText={formik.touched.idNo && formik.errors.idNo}
              label="CMND"
              margin="normal"
              name="idNo"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.idNo}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              id="size-small-outlined"
              size="small"
              name="custType"
              options={custType}
              getOptionLabel={(option) => option.name}
              defaultValue={custType[0]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Loại khách hàng"
                  error={Boolean(
                    formik.touched.custType && formik.errors.custType
                  )}
                  helperText={formik.touched.custType && formik.errors.custType}
                />
              )}
              // disabled ={isView ? true :false}
              classes={classes}
              onChange={(event, value) =>
                formik.setFieldValue('custType', value)
              }
              value={
                formik.values && formik.values.custType
                  ? custType.find((x) => x.id == formik.values.custType.id)
                  : undefined
              }
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
                  placeholder="Trạng Thái"
                  error={Boolean(formik.touched.status && formik.errors.status)}
                  helperText={formik.touched.status && formik.errors.status}
                />
              )}
              // disabled ={isView ? true :false}
              classes={classes}
              onChange={(event, value) => formik.setFieldValue('status', value)}
              value={
                formik.values && formik.values.status
                  ? status.find((x) => x.id == formik.values.status.id)
                  : undefined
              }
            />
          </Grid>

          <Grid item xs={6}>
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
              size="small"
              disabled
            />
          </Grid>

          <Grid item xs={6}>
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
              disabled
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.address && formik.errors.address)}
              fullWidth
              helperText={formik.touched.idNo && formik.errors.address}
              label="Địa Chỉ"
              margin="normal"
              name="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
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
FormDialog.PropTypes = {
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  assignPermission: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    // onGetGeneralCategory: query => dispatch(actions.getGeneralCategory(query)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(FormDialog);
