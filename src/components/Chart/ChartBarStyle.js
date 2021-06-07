import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  chartBar: {
      height: "100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
  },
  chartBar__inner: {
      height:"100px",
      width:"100%",
      border: "1px solid gray",
      borderRadius:"12px",
      backgroundColor:"#c4b4f3",
      overflow:"hidden",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-end"
  }
  }));

  export default useStyles;