import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Status', headerName: 'Status', width: 130 },
 {field:'Amount', headerName:'Amount',width:130},
 {field:'DueDate', headerName:'Due Data',width:130},
 {field:'url',headerName:"Invoice URL",width:200}
];

const rows = [
  { id: 1, Name: 'Dina Hawidi', Status:"PAID",Amount:"$250",DueDate:"27-10-2022",url:"www.invoice213123sadsad.com"},
];

export default function OrderDetails() {
  return (
    <div style={{ height: "90vh", width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        sx={{ml:4,mt:2}}
      />
    </div>
  );
}