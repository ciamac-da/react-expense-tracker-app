import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  

    expenseDate :{
        display: "flex",
        flexDirection: "column",
        width: "5.5rem",
        height: "5.5rem",
        border: "1px solid #ececec",
        backgroundColor: "#2a2a2a",
        color: "white",
        borderRadius: "12px",
        alignItems: "center",
        justifyContent: "center"
      },
      
      expenseDateMonth :{
        fontSize: "1rem",
        fontWeight: "bold",
      },
      
      expenseDateYear: {
        fontSize: "1rem"
      },
      
      expenseDateDay :{
        fontSize: "1.5rem",
        fontWeight: "bold"
      }

  }));

  export default useStyles;