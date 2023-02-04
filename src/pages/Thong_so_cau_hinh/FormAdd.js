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

export function FormAdd(props) {
  const classes = useStyles();

  const { open, onClose, dataEdit, title } = props;

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
      nameParameters: dataEdit ? dataEdit.nameParameters : '',
      typeParameters: dataEdit ? dataEdit.typeParameters : '',
      valueParameters: dataEdit ? dataEdit.valueParameters : '',
      villageId: dataEdit && dataEdit.village ? dataEdit.village : undefined,
    },
    validationSchema: Yup.object({
      userID: Yup.string().max(255).trim().required('Chưa Nhập Tài Khoản'),
      nameParameters: Yup.string()
        .max(255)
        .trim()
        .required('Chưa Nhập Tên Người Dùng'),
      typeParameters: Yup.string()
        .max(255)
        .trim()
        .required('Chưa Nhập Danh Sách'),
      valueParameters: Yup.string()
        .max(255)
        .trim()
        .required('Chưa Nhập Trạng Thái'),
      villageId: Yup.object().nullable().required('NOTIFY.VILLAGE'),
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
              label="Mã Tham Số"
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
              error={Boolean(
                formik.touched.nameParameters && formik.errors.nameParameters
              )}
              fullWidth
              helperText={
                formik.touched.nameParameters && formik.errors.nameParameters
              }
              label="Tên Tham Số"
              margin="normal"
              name="nameParameters"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nameParameters}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>

          <Grid item xs={6} mt={-2.8}>
            <TextField
              error={Boolean(
                formik.touched.typeParameters && formik.errors.typeParameters
              )}
              fullWidth
              helperText={
                formik.touched.typeParameters && formik.errors.typeParameters
              }
              label="Loại Tham Số"
              margin="normal"
              name="typeParameters"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.typeParameters}
              variant="outlined"
              id="outlined-basic"
            />
          </Grid>
          <Grid item xs={6} mt={-2.8}>
            <TextField
              error={Boolean(
                formik.touched.valueParameters && formik.errors.valueParameters
              )}
              fullWidth
              helperText={
                formik.touched.valueParameters && formik.errors.valueParameters
              }
              label="Giá Trị Tham Số"
              margin="normal"
              name="valueParameters"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.valueParameters}
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
                  placeholder="Trạng thái tham số"
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
        </Grid>
      </form>
    </CustomDialog>
  );
}

// eslint-disable-next-line react/no-typos
FormAdd.PropTypes = {
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

export default compose(withConnect, memo)(FormAdd);
