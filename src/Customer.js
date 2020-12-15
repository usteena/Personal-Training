import React, {useState, useEffect} from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Customer(props) {
    const [customer, setCustomer] = useState([]);
  

    useEffect(()=>{
        getCustomer();
    },[])

      
    const columns = [
        {headerName: 'First name', field:'firstname', sortable:true, filter:true},
        {headerName: 'Last name', field:'lastname', sortable:true, filter:true},
        {headerName: 'Email', field:'email', sortable:true, filter:true},
        {headerName: 'Phone', field:'phone', sortable:true, filter:true},
        {headerName: 'Address', field:'streetaddress', sortable:true, filter:true},
        {headerName: 'Postcode', field:'postcode', sortable:true, filter:true},
        {headerName: 'City', field:'city', sortable:true, filter:true}

    ]
    const getCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }
return(
    <div>
  
        
    <div className = "ag-theme-material" style={{height:'700px', width:'70%',margin:'auto'}}>
        <AgGridReact columnDefs={columns} rowData={customer}>
        </AgGridReact>
    </div>
    
    </div>
)
}
export default Customer;