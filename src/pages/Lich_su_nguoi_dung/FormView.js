import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Grid, TextField } from '@mui/material';
import { CustomDialog } from './../../components/ConfirmDialog/CustomDialog';
import CustomTextFieldNew from 'components/CustomTextFieldNew/index';
import { Autocomplete } from '../../../node_modules/@mui/material/index';
import { useStylesComboBox } from 'utils/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { emailRegExp, NOTIFY, PHONE, phoneRegExp } from 'utils/MessageContants';

function FormView(props) {
  // const classes = useStylesComboBox();
  const { title, onClose, open, dataEdit, setView } = props;
  console.log(dataEdit);
  const onCloseForm = () => {
    onClose();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataEdit ? dataEdit.id : '',
      userID: dataEdit ? dataEdit.userID : '',
      appCode: dataEdit ? dataEdit.appCode : '',
      createDate: dataEdit ? dataEdit.createDate : '',
      createBy: dataEdit ? dataEdit.createBy : '',
      document: dataEdit ? dataEdit.document : '',
      signStatus: dataEdit ? dataEdit.signStatus : '',
      certificateID: dataEdit ? dataEdit.certificateID : '',
      timeLog: dataEdit ? dataEdit.timeLog : '',
      wp_Agency_ID: dataEdit ? dataEdit.wp_Agency_ID : '',
      ltt: dataEdit ? dataEdit.ltt : '',
    },
    validationSchema: Yup.object({
      userID: Yup.string().max(255).trim().required(NOTIFY.NOT_USER),
      appCode: Yup.string().max(255).trim().required(NOTIFY.NOT_NAME),
      createDate: Yup.string().max(255).trim().required('Chưa Nhập Danh Sách'),
      createBy: Yup.string().max(255).trim().required('Chưa Nhập Trạng Thái'),
      document: Yup.object().nullable().required('NOTIFY.VILLAGE'),
      signStatus: Yup.object().nullable().required('NOTIFY.VILLAGE'),
      certificateID: Yup.string()
        .max(255)
        .trim()
        .required('Chưa Click Ngày Tạo'),
      timeLog: Yup.string().max(255).trim().required('Chưa Click Ngày Tạo'),
    }),
  });

  return (
    <CustomDialog
      maxWidth="sm"
      title={title}
      open={open}
      onView={setView}
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
              error={Boolean(formik.touched.appCode && formik.errors.appCode)}
              fullWidth
              helperText={formik.touched.appCode && formik.errors.appCode}
              label="Người Dùng"
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
                formik.touched.createDate && formik.errors.createDate
              )}
              fullWidth
              helperText={formik.touched.createDate && formik.errors.createDate}
              label="Thời gian tạo"
              margin="normal"
              name="createDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.createDate}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.document && formik.errors.document)}
              fullWidth
              helperText={formik.touched.document && formik.errors.document}
              label="Tài liệu"
              margin="normal"
              name="document"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.document}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(
                formik.touched.signStatus && formik.errors.signStatus
              )}
              fullWidth
              helperText={formik.touched.signStatus && formik.errors.signStatus}
              label="Trạng thái ký"
              margin="normal"
              name="signStatus"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.signStatus}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={Boolean(
                formik.touched.certificateID && formik.errors.certificateID
              )}
              fullWidth
              helperText={
                formik.touched.certificateID && formik.errors.certificateID
              }
              label="ID chữ ký"
              margin="normal"
              name="certificateID"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.certificateID}
              variant="outlined"
              id="outlined-basic"
              size="small"
              disabled
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              error={Boolean(formik.touched.timeLog && formik.errors.timeLog)}
              fullWidth
              helperText={formik.touched.timeLog && formik.errors.timeLog}
              label="Thời gian ký"
              margin="normal"
              name="timeLog"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.timeLog}
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
FormView.PropTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  assignPermission: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    // onGetGeneralCategory: query => dispatch(actions.getGeneralCategory(query)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(FormView);
