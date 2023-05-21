import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Answer = (props) => {
  // 後々使うので一旦コメントアウト
  // const classes = useStyles();
  return(
    <Button variant="contained" color="primary">
      {props.content}
    </Button>
  )
}

export default Answer