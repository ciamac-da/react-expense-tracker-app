import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  
    formControlDiv:{
    },
    formControl:{
        display:"flex",
        justifyContent:"flex-end",
        background:"#ffffff",
        position:"relative",
        top:"10px"
    },
    option:{
        "&:hover":{
        backgroundColor: "#03a9f4",
        background: ""
        }
    }
  }));

  export default useStyles;