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

const useStyles = styled((theme) => ({
  formControl: {
    width: '100%',
    '$MuiInputBase-input': {
      textAlign: 'center',
    },
  },
}));

export function FormDialog(props) {
  const classes = useStyles();

  const { open, onClose, title, dataEdit } = props;

  const enumStatus = [
    {
      id: 1,
      name: 'Kích hoạt',
    },
    {
      id: 2,
      name: 'Chưa kích hoạt',
    },
  ];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userID: dataEdit ? dataEdit.userID : '',
      nameUser: dataEdit ? dataEdit.nameUser : '',
      codetin: dataEdit ? dataEdit.codetin : '',
      idNo: dataEdit ? dataEdit.idNo : '',
      villageId: dataEdit && dataEdit.village ? dataEdit.village : undefined,
      villageId1: dataEdit && dataEdit.village ? dataEdit.village : undefined,
      phone: dataEdit ? dataEdit.phone : '',
      email: dataEdit ? dataEdit.email : '',
      address: dataEdit ? dataEdit.address : '',
    },
    validationSchema: Yup.object({
      userID: Yup.string().max(255).trim().required('Chưa Nhập Tài Khoản'),
      nameUser: Yup.string()
        .max(255)
        .trim()
        .required('Chưa Nhập Tên Người Dùng'),
      codetin: Yup.string().max(255).trim().required('Chưa Nhập Danh Sách'),
      idNo: Yup.string().max(255).trim().required('Chưa Nhập Trạng Thái'),
      villageId: Yup.object().nullable().required('NOTIFY.VILLAGE'),
      villageId1: Yup.object().nullable().required('NOTIFY.VILLAGE'),
      phone: Yup.string()
        .min(10, 'PHONE.MIN')
        .max(10, 'PHONE.MAX')
        .required('Chưa Nhập Số Điện Thoại'),
      email: Yup.string().max(255).trim().required('Chưa Nhập Email'),
      address: Yup.string().max(255).trim().required('Chưa Click Ngày Tạo'),
    }),
    onSubmit: (values, { resetForm }) => {
      // onSave();
      console.log(values);
    },
  });

  const handleSave = () => {
    console.log(formik.values);
    formik.resetForm();
  };

  return (
    <CustomDialog
      maxWidth="sm"
      title={title}
      open={open}
      onSave={handleSave}
      onClose={onClose}
      onCancel={onClose}
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
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.nameUser && formik.errors.nameUser)}
              fullWidth
              helperText={formik.touched.nameUser && formik.errors.nameUser}
              label="Tên Người Dùng"
              margin="normal"
              name="nameUser"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nameUser}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>

          <Grid item xs={6} mt={-2.8}>
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
            />
          </Grid>
          <Grid item xs={6} mt={-2.8}>
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
            />
          </Grid>

          <Grid item xs={6} mt={-2.4}>
            <Autocomplete
              id="villageId"
              name="villageId"
              options={enumStatus}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) =>
                formik.setFieldValue('villageId', value)
              }
              value={
                formik.values && formik.values.villageId
                  ? formik.values.villageId
                  : undefined
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Loại Khách Hàng"
                  onChange={formik.handleChange}
                  margin="normal"
                  id="size-small-outlined"
                  size="small"
                  error={Boolean(
                    formik.touched.villageId && formik.errors.villageId
                  )}
                  helperText={
                    formik.touched.villageId && formik.errors.villageId
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={6} mt={-2.4}>
            <Autocomplete
              id="villageId1"
              name="villageId1"
              options={enumStatus}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) =>
                formik.setFieldValue('villageId1', value)
              }
              value={
                formik.values && formik.values.villageId1
                  ? formik.values.villageId1
                  : undefined
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Trạng Thái"
                  onChange={formik.handleChange}
                  margin="normal"
                  id="size-small-outlined"
                  size="small"
                  error={Boolean(
                    formik.touched.villageId1 && formik.errors.villageId1
                  )}
                  helperText={
                    formik.touched.villageId1 && formik.errors.villageId1
                  }
                />
              )}
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

          <Grid item xs={6} mt={-2.8}>
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
