/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import CustomDialog from './CustomDialog';
import { Grid } from '../../../node_modules/@mui/material/index';

export function RemoveDialog(props) {
  const { onClose, open, onSave, title } = props;
  return (
    <CustomDialog
      title="Xác nhận"
      open={open}
      onClose={onClose}
      onCancel={onClose}
      onSave={onSave}
      maxWidth="xs"
      saveText="Đồng ý"
    >
      <Grid container spacing={2}>
         <div>{title}</div>
      </Grid>
    </CustomDialog>
  );
}

RemoveDialog.propTypes = {
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};

export default RemoveDialog;
