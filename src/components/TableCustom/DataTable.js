import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Box,
  Button,
  Fab,
  IconButton,
  Stack,
  Tooltip,
} from '../../../node_modules/@mui/material/index';
import './DataTable.css';
import useStyles from '../../utils/styles';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable(props) {
  const {
    rows,
    columns,
    checkBoxTable,
    onEdit,
    onDelete,
    onView,
    textAction,
    isAction,
    sizeAction,
  } = props;

  const [action, setAction] = useState(columns);
  const styles = useStyles();
  const onEditData = React.useCallback(
    (id) => () => {
      onEdit && onEdit(id);
    },
    []
  );

  const onDeleteData = React.useCallback(
    (id) => () => {
      onDelete && onDelete(id);
    },
    []
  );

  const onViewData = React.useCallback(
    (value) => () => {
      onView && onView(value);
    },
    []
  );

  const onAction = () => {
    return {
      field: 'action',
      headerName: textAction ? textAction : 'Hành Động',
      type: 'actions',
      width: sizeAction ? sizeAction : 150,
      sortable: false,
      // disableClickEventBubbling: true,
      flex: 0.3,
      renderCell: (params) => {
        return (
          <>
            {onView && (
              <Button
                style={{ minWidth: 10 }}
                variant="outlined"
                color="warning"
                size="small"
                onClick={onViewData(params.row)}
                // startIcon={<EditIcon />}
              >
                <VisibilityIcon size="small" />
              </Button>
            )}
            {onEdit && (
              <Button
                style={{ minWidth: 10, marginLeft: 2 }}
                variant="outlined"
                color="warning"
                size="small"
                onClick={onEditData(params.row)}
                // startIcon={<EditIcon />}
              >
                <EditIcon size="small" />
              </Button>
            )}

            {onDelete && (
              <Button
                style={{ minWidth: 30, marginLeft: 2 }}
                variant="outlined"
                color="error"
                size="small"
                onClick={onDeleteData(params.row)}
              >
                <DeleteIcon />
              </Button>
            )}
          </>
        );
      },
    };
  };

  useEffect(() => {
    if (isAction) {
      setAction([...action, onAction()]);
    } else {
      setAction(columns);
    }
  }, [isAction]);
  return (
    <>
      <Box style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={action}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={checkBoxTable ? checkBoxTable : false}
          className={styles.dataGrid}
          disableSelectionOnClick
          showCellRightBorder={true}
          showColumnRightBorder={true}
          columnAutoWidth={true}
          columnMinWidth={50}
          autoHeight
          allowColumnResizing={true}
          showBorders={true}
        />
      </Box>
    </>
  );
}
DataTable.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.any,
  checkBoxTable: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onView: PropTypes.func,
};

DataTable.defaultProps = {
  variant: 'outlined',
  margin: 'dense',
  size: 'small',
  fullWidth: true,
  value: '',
  label: 'Vui lòng nhập...',
  isAction: true,
};
