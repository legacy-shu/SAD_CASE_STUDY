import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'attendance', headerName: 'Attendance', width: 300 },
];

export default function DataTable({ students, getSelectedIDs, user }) {
  const [selectionModel, setSelectionModel] = React.useState(students);
  const [selectedRows, setSelectedRows] = React.useState([]);
  React.useEffect(() => {
    setSelectionModel(() =>
      students.filter((s) => s.attendance === true).map((s) => s.id)
    );
  }, [students]);
  return (
    <div style={{ height: 1000, width: '100%' }}>
      {user?.role === 'admin' ? <DataGrid
        checkboxSelection
        rows={students}
        columns={columns}
        selectionModel={selectionModel}
        onSelectionModelChange={(e) => {
          setSelectionModel(e);
          const selectedIDs = new Set(e);
          const selectedRows = students.filter((s) => selectedIDs.has(s.id));
          getSelectedIDs(selectedIDs);
          setSelectedRows(selectedRows);
        }}
      /> : <DataGrid
      rows={students}
      columns={columns}
      selectionModel={selectionModel}
      onSelectionModelChange={(e) => {
        setSelectionModel(e);
        const selectedIDs = new Set(e);
        const selectedRows = students.filter((s) => selectedIDs.has(s.id));
        getSelectedIDs(selectedIDs);
        setSelectedRows(selectedRows);
      }}
    /> }

      
    </div>
  );
}
