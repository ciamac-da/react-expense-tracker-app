import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  chartBar: {
      height: "100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      position:"relative",
      top:"10px"
  },
  chartBarInner: {
      height:"100px",
      width:"100%",
      border: "1px solid gray",
      borderRadius:"12px",
      backgroundColor:"gray",
      overflow:"hidden",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-end"
  },
  chartBarFill: {
    backgroundColor: "#03a9f4",
    width: "100%",
    transition: "all 0.3s ease-out"
  },
  chartBarLabel: {
    fontWeight: "bold",
    fontSize: "1rem",
    color:"#fff",
    textAlign: "center"
  }
  }));

  
  
  
  export default useStyles;