import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
];

export default function DataTable({ students }) {
  const [selectionModel, setSelectionModel] = React.useState(() =>
    students.filter((s) => s.attendance === true).map((s) => s.id)
  );
  const [selectedRows, setSelectedRows] = React.useState([]);

  return (
    <div style={{ height: 2000, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        selectionModel={selectionModel}
        checkboxSelection
        // onSelectionModelChange={(e) => {
        //   setSelectionModel(e);
        //   const selectedIDs = new Set(e);
        //   const selectedRows = students.filter((s) => selectedIDs.has(s.id));
        //   setSelectedRows(selectedRows);
        // }}
      />
    </div>
  );
}
