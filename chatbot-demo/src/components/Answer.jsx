import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Answer = () => {
  // 後々使うので一旦コメントアウト
  // const classes = useStyles();
  return(
    <Button variant="contained">Default</Button>
  )

}

export default Answer