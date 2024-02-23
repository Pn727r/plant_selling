/* eslint-disable react/prop-types */
import { Alert } from "@mui/material";

const Message = (props) => {
  if (props.msg_type == "error") {
    return (
      <Alert severity="error">
        <b>{props.msg}</b>
      </Alert>
    );
  }
  if (props.msg_type == "success") {
    return (
      <Alert severity="success">
        <b>{props.msg}</b>
      </Alert>
    );
  }
  if (props.msg_type == "warning") {
    return (
      <Alert severity="warning">
        <b>{props.msg}</b>
      </Alert>
    );
  }
  return <></>;
};

export default Message;
