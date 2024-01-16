/* eslint-disable react/prop-types */
import {Alert} from "@mui/material";

const Message = (props)=>{
        if(props.msg_type == 'error'){
            return (
            <Alert severity="error">
              {props.msg}
            </Alert>)
        } 
        if (props.msg_type == "success"){
            return (
                <Alert severity="success">
                  {props.msg}
                </Alert>)
        }
        if (props.msg_type == "warning"){
          return (
            <Alert severity="warning">
                  {props.msg}
                </Alert>
          )
        }
        return (<>
        </>);
}

export default Message ; 