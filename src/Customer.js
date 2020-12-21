import React, {useState, useEffect,useRef} from 'react';
import ReactTable from 'react-table-6';
import Button from '@material-ui/core/Button';
import "react-table-6/react-table.css" 

import Grid from '@material-ui/core/Grid';

function Customer(props) {
    const [customer, setCustomer] = useState([]);
  
    const gridRef = useRef();
  

    
    useEffect(()=>{
        getCustomer();
    },[])

    const columns = [
        {Header: 'First name', accessor:'firstname'},
        {Header: 'Last name', accessor:'lastname'},
        {Header: 'Email', accessor:'email'},
        {Header: 'Phone', accessor:'phone'},
        {Header: 'Address', accessor:'streetaddress'},
        {Header: 'Postcode', accessor:'postcode'},
        {Header: 'City', accessor:'city'},
        {Header: '', accessor:'links[0].href',filterable:false, sortable:false, Cell: ({params}) => <Button color="secondary" onClick={()=>deleteCustomer(params)}>Delete</Button>}

    ]
    const getCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }
   
    const deleteCustomer = (params) => {
        if(window.confirm('Are you sure?')) {
            fetch(params, {method: 'DELETE'})
            .then(res => getCustomer())
            .catch(err => console.error(err))
        }
    }
return(
    <div>
  
        
            <Grid container/>
            <ReactTable columns={columns} data={customer} filterable={true}/>
    
    </div>
)
}
export default Customer;