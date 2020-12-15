import React, {useState, useEffect} from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import  moment from 'moment';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainers(props) {
    const [trainers, setTrainers] = useState([]);
  

    useEffect(()=>{
        getTrainers();
    },[])

      
    const columns = [
        {headerName: 'Activity', field:'activity', sortable:true, filter:true},
        {headerName: 'Date', field:'date',sortable:true, filter:true},
        {headerName: 'Duration(min)', field:'duration', sortable:true, filter:true},
        {headerName: 'Customer', field:() => {return customer.firstname + " "+customer.lastname}, sortable:true, filter:true}
    ]
    const getTrainers = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainers(data))
        .catch(err => console.error(err))
    }
return(
    <div>
  
        
    <div className = "ag-theme-material" style={{height:'700px', width:'70%',margin:'auto'}}>
        <AgGridReact columnDefs={columns} rowData={trainers}>
        </AgGridReact>
    </div>
    
    </div>
)
}
export default Trainers;