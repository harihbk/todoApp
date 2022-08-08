import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector , useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { actionCreators } from "../store/index"
import { bindActionCreators } from 'redux';
import { useForm } from "react-hook-form";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Divider, Typography } from '@mui/material';

export default function Todo() {

    const state = useSelector(state=>state)
   console.log(state);
    const dispatch = useDispatch();
    const { Add , Edit , Delete } = bindActionCreators(actionCreators,dispatch)
    

    const { register, handleSubmit , reset } = useForm({ shouldUseNativeValidation: true });

    const onSubmit = async data => { 
        Add(data)
        reset({companyname : "" , branchname : ""})
     };

  return (
    <>
    <Box style={{ width : '100%'  , display:'flex' , justifyContent : 'center'}}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" label="Company Name" variant="outlined" {...register("companyname", { required: "Please enter your first name." })} />
        <TextField id="outlined-basic" label="ID" variant="outlined" {...register("branchname", { required: "Please enter your first name." })}/>
        <Button variant="outlined" type="submit">Add</Button>
    </form>    

        {/* <Button variant="outlined" > Edit</Button>
        <Button variant="outlined" color="error"> Delete</Button> */}
    </Box>



        { state?.todo.length > 0 && state?.todo?.map((data,i) =>(
            <>
            <Card key = {i}>
                <Typography>Company Name</Typography>
                <Typography>{data?.companyname}</Typography>

                <Typography>Branch Name</Typography>
                <Typography>{data?.branchname}</Typography>
            </Card>
            <Button variant="outlined" onClick={() => Edit(data?.id)}> Edit</Button>
            <Button variant="outlined" color="error" onClick={() => Delete(data?.id)}> Delete</Button>
            <Divider></Divider>
            </>
        ))
        
        }
  




    </>
  )
}
