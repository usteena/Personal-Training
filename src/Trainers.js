import React, {useState, useEffect, useRef} from 'react';
import ReactTable from 'react-table-6';
import  moment from 'moment';
import "react-table-6/react-table.css" 
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Trainers() {
    const [trainers, setTrainers] = useState([]);

    const gridRef = useRef();
  

    useEffect(()=>{
        getTrainers();
    },[])

      
    const columns = [
            {id: "Date",Header: 'Date',accessor: d => { return moment(d.date).format('LLLL')}},
            {Header: 'Duration (min)',accessor: 'duration'},
            {Header: 'Activity',accessor: 'activity'},
            {id: "FullName",Header: 'Customer',accessor: n => {return n.customer.firstname + " " + n.customer.lastname}},
            {Header: '',accessor: 'id', Cell: ({value}) => ( <Button color="secondary" size="small" onClick={()=> deleteTraining(value)}>Delete</Button>)}

                    ]
    const getTrainers = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainers(data))
        .catch(err => console.error(err))
    }
    const deleteTraining = (props) => {
        if(window.confirm('Are you sure?')){
        fetch('https://customerrest.herokuapp.com/api/trainings/'+props, {
            method: "DELETE"
        })
        .then(response => getTrainers())
        .catch(err => console.error(err))
    }
}
return(
    <div>
  
            <Grid container/>
            <ReactTable ref={gridRef} onGridReady={params => {
                gridRef.current = params.api
            }}columns={columns} data={trainers} filterable={true}/>
    
    
    </div>
)
}
export default Trainers;