import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  
  form: {
    display:"flex",
    flexDirection:"row",
    gap:"5px"
  },

  input : {
    font: "inherit",
    margin:"auto",
    marginTop:"10px",
    fontSize:"1.2rem",
    marginBottom:"10px",
    alignItems:"center !important",
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "20rem",
    maxWidth: "100%",
    background:"white"
  },
  button:{
    marginTop:"10px",
    marginBottom:"10px",
    background:"#4b4b4b",
    transition:".7s",
    color:"#fff",
    "&:hover": {
      background:"#fff",
      color:"#4b4b4b",
     transition:".7s",
    }
  }

  }));

  export default useStyles;