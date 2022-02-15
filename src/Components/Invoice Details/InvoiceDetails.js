import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@material-ui/core";
import Axios from "axios";

const columns = [
  { field: "id", headerName: "NUMBER", width: 200 },
  { field: "deliveryDate", headerName: "DELIVERY DATE", width: 200 },
  { field: "status", headerName: "STATUS", width: 200 },
  { field: "createdAt", headerName: "CREATED AT", width: 200 },
];

const InvoiceDetails = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    Axios.post("https://bridalconcept.herokuapp.com/getInvoiceDetails", {
      email: "Joe@gmail.com",
    })
      .then((res) => {
        setInvoices(res.data?.newInvoices);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Box sx={{ height: "81vh", width: "100%", mt: 4, ml: 1, mb: 4 }}>
        <Typography variant="h5" align="center">
          INVOICES DETAILS
        </Typography>
        <DataGrid
          rows={invoices}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          sx={{ mt: 2, fontSize: 18 }}
        />
      </Box>
    </>
  );
};

export default InvoiceDetails;
