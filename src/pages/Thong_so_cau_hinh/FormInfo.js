import * as React from 'react';
import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';
import { CustomDialog } from '../../components/ConfirmDialog/CustomDialog';
import { Autocomplete } from '../../../node_modules/@mui/material/index';
import { useStylesComboBox } from 'utils/styles';
import { NOTIFY } from 'utils/MessageContants';
import { TS_CAU_HINH } from 'utils/MockData';

function FormInfo(props) {
  const {
    title,
    onClose,
    open,
    dataEdit,
    setDataEdit,
    onSave,
    isSave,
    setIsSave,
  } = props;
  const classes = useStylesComboBox();
  const status = [
    { id: 1, name: 'Hoạt động' },
    { id: 2, name: 'Không hoạt động' },
  ];

  const onCloseForm = () => {
    onClose();
    setDataEdit(null);
    setIsSave(null);
  };

  React.useEffect(() => {
    if (!open) setDataEdit(null);
  }, [open]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataEdit ? dataEdit.id : '',
      code: dataEdit ? dataEdit.code : '',
      parameterName: dataEdit ? dataEdit.parameterName : '',
      type: dataEdit ? dataEdit.type : '',
      value: dataEdit ? dataEdit.value : '',
      status: dataEdit
        ? status.find((x) => x.id == dataEdit.status)
        : status[0],
    },
    validationSchema: Yup.object({
      code: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      parameterName: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      type: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      value: Yup.string().max(255).trim().required(NOTIFY.NOT_BLANK),
      status: Yup.object().nullable().required('NOTIFY.VILLAGE'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(typeof values);
      // onSave();
      const value = values;
      // console.log(values);
      value.status = values.status.id;
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
      onSave={handleSave}
      onClose={onCloseForm}
      onCancel={onCloseForm}
      // className={classes.formControl}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} mt={-4}>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.code && formik.errors.code)}
              fullWidth
              helperText={formik.touched.code && formik.errors.code}
              label="Mã tham số"
              margin="normal"
              name="code"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.code}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled={isSave ? false : true}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(
                formik.touched.parameterName && formik.errors.parameterName
              )}
              fullWidth
              helperText={
                formik.touched.parameterName && formik.errors.parameterName
              }
              label="Tên tham số"
              margin="normal"
              name="parameterName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.parameterName}
              variant="outlined"
              id="outlined-basic"
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.type && formik.errors.type)}
              fullWidth
              helperText={formik.touched.type && formik.errors.type}
              label="Loại tham số"
              margin="normal"
              name="type"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.type}
              variant="outlined"
              id="outlined-basic"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.value && formik.errors.value)}
              fullWidth
              helperText={formik.touched.value && formik.errors.value}
              label="Giá trị tham số"
              margin="normal"
              name="value"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.value}
              variant="outlined"
              id="outlined-basic"
              size="small"
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
                  placeholder="Trạng thái tham số"
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
        </Grid>
      </form>
    </CustomDialog>
  );
}

// eslint-disable-next-line react/no-typos
FormInfo.PropTypes = {
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

export default compose(withConnect, memo)(FormInfo);
