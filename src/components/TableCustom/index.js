import DataTable from "./DataTable";

import React from "react";

export default function index({rows, columns, checkBoxTable,onEdit,onDelete}) {
  return (
    <>
      <DataTable rows={rows}
			 columns={columns} 
			 checkBoxTable={checkBoxTable}
			 onEdit ={onEdit}
			 onDelete ={onDelete}
			 />
    </>
  );
}
