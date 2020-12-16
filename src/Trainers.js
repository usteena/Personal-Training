import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-6';
import  moment from 'moment';
import "react-table-6/react-table.css" 
import Grid from '@material-ui/core/Grid';

function Trainers() {
    const [trainers, setTrainers] = useState([]);
  

    useEffect(()=>{
        getTrainers();
    },[])

      
    const columns = [
            {id: "Date",Header: 'Date',accessor: d => { return moment(d.date).format('LLLL')}},
            {Header: 'Duration (min)',accessor: 'duration'},
            {Header: 'Activity',accessor: 'activity'},
            {id: "FullName",Header: 'Customer',accessor: n => {return n.customer.firstname + " " + n.customer.lastname}}
                    ]
    const getTrainers = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainers(data))
        .catch(err => console.error(err))
    }
return(
    <div>
  
            <Grid container/>
            <ReactTable columns={columns} data={trainers} filterable={true}/>
    
    
    </div>
)
}
export default Trainers;