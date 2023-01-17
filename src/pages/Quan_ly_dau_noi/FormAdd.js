import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Grid, FormControl, TextField } from '@mui/material';
import { CustomDialog } from './../../components/ConfirmDialog/CustomDialog';
import CustomTextFieldNew from 'components/CustomTextFieldNew/index';
import CustomTextField from 'components/CustomTextField/index';
import AutocompleteCustomer from 'components/AutocompleteCustomer/index';
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

  const {
    assignPermission,
    open,
    onClose,
    onSave,
    title,
    dataSample,
    //onGetGeneralCategory
  } = props;

  // const {
  //   //generalCategory
  // } = assignPermission;

  const [data, setData] = useState({});
  const [documentStatusCate, setDocumentStatusCate] = useState();

  const [defaultStatus, setDefaultStatus] = useState();
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
  useEffect(() => {
    if (dataSample) {
      enumStatus.forEach((element) => {
        if (element.id == dataSample.status) {
          dataSample.status2 = element;
        }
      });

      setData(dataSample);
    } else {
      setData();
    }
  }, [dataSample]);

  // useEffect(() => {
  //   onGetGeneralCategory();
  // }, [])

  // useEffect(() => {
  //   if (generalCategory) {
  //     setDocumentStatusCate(generalCategory.filter(x => x.code === 'DOC_BOOK_STATUS'));
  //     setDefaultStatus(generalCategory.find(x => x.code === 'DOC_BOOK_STATUS').cCommons[0].id);
  //     setData({
  //       ...data, cateStatus: generalCategory.find(x => x.code === 'DOC_BOOK_STATUS').cCommons[0].id
  //     })
  //   }
  // }, [generalCategory])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    onSave(data);
  };

  useEffect(() => {
    if (!open) setData({});
  }, [open]);
  const [items] = useState([
    {
      id: '1',
      label: 'Hoạt động',
      //  value :'Hoạt động'
    },
    {
      id: '2',
      label: 'Không hoạt động',
      //  value: 'Không hoạt động'
    },
  ]);
  const handleChangeAuto = (name, value) => {
    // setQuery({
    //   ...query,
    //   [name]: value !== null ? value.id : null
    // });
    // setData({
    //   ...data,
    //   [name]: value
    // })
    if (name == 'status') {
      setData({
        ...data,
        [name]: value.id,
        createdate: new Date(),
        [name.concat(2)]: value,
      });
    }
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
      <Grid container spacing={2} ml={-0.7}>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={6}>
            <CustomTextFieldNew
              id="outlined-basic"
              label="Mã Tham Số"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextFieldNew
              id="outlined-basic"
              label="Tên Tham Số"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={1}>
          <Grid item xs={6}>
            <CustomTextFieldNew
              id="outlined-basic"
              label="Loại Tham Số"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextFieldNew
              id="outlined-basic"
              label="Giá Trị Tham Số"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={1}>
          <Grid item xs={6} mt={0.9}>
            <Autocomplete
              className={classes.formControl}
              id="size-small-outlined"
              size="small"
              options={enumStatus}
              getOptionLabel={(option) => option.name}
              // defaultValue={enumStatus[1]}
              renderInput={(params) => (
                <TextField {...params} placeholder="Trạng thái tham số" />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
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
