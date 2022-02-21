import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Axios from "axios";

const columns = [
  { field: "id", headerName: "NUMBER", width: 125 },
  { field: "deliveryDate", headerName: "DELIVERY DATE", width: 175 },
  { field: "status", headerName: "STATUS", width: 100 },
  { field: "createdAt", headerName: "CREATED AT", width: 175 },
  { field: "amount", headerName: "Amount", width: 100 },
  { field: "orderID", headerName: "ORDER ID", width: 300 },
];

const InvoiceDetails = () => {
  const clientEmail= useSelector(store=>{
   if(store.clientData.userData.client_email)
   {
     return store?.clientData?.userData?.client_email 
   }
   else 
   {
     return "test@gmail.com"
   }
  });
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    Axios.post("https://bridalconcept.herokuapp.com/getInvoiceDetails", {
      email: clientEmail,
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
