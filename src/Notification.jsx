/* eslint-disable react/prop-types */

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {useState} from "react" ; 


const Notification = (props) => {
    const [open, setOpen] = useState(false);
  if (props.msg_type == "error") {
      setOpen(true) ;
    return (
      <Snackbar open={open} autoHideDuration={4000} onClose={setOpen(false)}>
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <b>{props.msg}</b>
        </Alert>
      </Snackbar>
    );
  }
  if (props.msg_type == "success") {
    setOpen(true) ;

    return (
      <Snackbar open={open} autoHideDuration={4000}  onClose={setOpen(false)}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <b>{props.msg}</b>
        </Alert>
      </Snackbar>
    );
  }
  if (props.msg_type == "warning") {
    setOpen(true) ;

    return (
      <Snackbar open={open} autoHideDuration={4000}  onClose={setOpen(false)}>
        <Alert
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <b>{props.msg}</b>
        </Alert>
      </Snackbar>
    );
  }
  return <></>;
};

export default Notification;




