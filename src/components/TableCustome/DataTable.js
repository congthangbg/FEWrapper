import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {DataGrid} from "@mui/x-data-grid";
import PropTypes from "prop-types";
import * as React from "react";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Stack,
  Tooltip,
} from "../../../node_modules/@mui/material/index";
import "./DataTable.css";
import useStyles from "../../utils/styles";
import AddIcon from "@mui/icons-material/Add";

const columns = [
  {field: "id", headerName: "ID", width: 70},
  {field: "firstName", headerName: "First name", width: 130},
  {field: "lastName", headerName: "Last name", width: 130},
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {id: 1, lastName: "Snow", firstName: "Jon", age: 35},
  {id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
  {id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
  {id: 4, lastName: "Stark", firstName: "Arya", age: 16},
  {id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
  {id: 6, lastName: "Melisandre", firstName: null, age: 150},
  {id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
  {id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
  {id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
];

export default function DataTable({
  rows,
  columns,
  checkBoxTable,
  onEdit,
  onDelete,
}) {
  const styles = useStyles();
  const onEditData = (row) => {
    onEdit(row);
  };

  const columnsAction = React.useMemo(
    () => [
      ...columns,
      {
        field: "action",
        headerName: "Action",
        type: "actions",
        width: 100,
        sortable: false,
        // disableClickEventBubbling: true,
        flex: 0.2,
        renderCell: (params) => {
          return (
            <>
              {onEdit && (
                <Button
                  style={{minWidth: 10}}
                  variant="outlined"
                  color="warning"
                  size="small"
                  onClick={(e) => onEditData(params.row)}
                  // startIcon={<EditIcon />}
                >
                  <EditIcon size="small" />
                </Button>
              )}

              {onDelete && (
                <Button
                  style={{minWidth: 30}}
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={onDelete(params.row)}
                >
                  <DeleteIcon />
                </Button>
              )}

              {/* <Paper
            // className={classes.paper}
            onClick={() => {
              alert("✔️ This works on every component!");
            }}
          >
            Click me!
          </Paper> */}
            </>
          );
        },
      },
    ],
    []
  );
  return (
    <>
    {/* <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
    <Tooltip size="small" title="Add" aria-label="add">
              <Fab color="primary" sx={{m: 0}}>
                <AddIcon />
              </Fab>
            </Tooltip>
    </Box> */}
      <Box style={{height: 500, width: "100%"}}>
        <DataGrid
          rows={rows}
          columns={columnsAction}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={checkBoxTable ? checkBoxTable : false}
          className={styles.dataGrid}
          disableSelectionOnClick
          showCellRightBorder={true}
          showColumnRightBorder={true}
          // autoHeight
          // onRowClick={e=> console.log(e)}
          // disableColumnSelector={false}
          // disableSelectionOnClick={true}
          // disableDensitySelector
          // disableColumnFilter
          // disableColumnMenu
          // disableExtendRowFullWidth
          // disableIgnoreModificationsIfProcessingProps
          // disableVirtualization
          // isCellEditable ={false}
          // showCellRightBorder={false}
          // showColumnRightBorder={false}
        />
      </Box>
    </>
  );
}
DataTable.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.number,
  checkBoxTable: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
