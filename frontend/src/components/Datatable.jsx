import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
];
const rows = [
  { id: 1, name: 'Snow', email: 'Jon', age: 35 },
  { id: 2, name: 'Lannister', email: 'Cersei', age: 42 },
  { id: 3, name: 'Lannister', email: 'Jaime', age: 45 },
  { id: 4, name: 'Stark', email: 'Arya', age: 16 },
  { id: 5, name: 'Targaryen', email: 'Daenerys', age: null },
  { id: 6, name: 'Melisandre', email: null, age: 150 },
  { id: 7, name: 'Clifford', email: 'Ferrara', age: 44 },
  { id: 8, name: 'Frances', email: 'Rossini', age: 36 },
  { id: 9, name: 'Roxie', email: 'Harvey', age: 65 },
];
export default function DataTable() {
  return (
    <div style={{ height: 2000, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}
