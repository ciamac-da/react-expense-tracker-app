import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  
 expenseItem :{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding: "0.5rem",
        margin: "1rem 0",
        backgroundColor: "#4b4b4b"
      },
      
      expenseItemDescription : {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-end",
        flexFlow: "column-reverse",
        justifyContent: "flex-start",
        flex: "1",
        [theme.breakpoints.down('sm')]: {
        alignItems: "center",
        },
        [theme.breakpoints.up('md')]: {
                flexDirection: "column",
                justifyContent: "center",
                flex: "1",
                paddingRight:"50px",
                marginBottom:"10px"
            },  
            [theme.breakpoints.down('md')]: {
  
            }, 
            [theme.breakpoints.up('lg')]: {
             
            }, 
            [theme.breakpoints.up('xl')]: {
               
            }, 
      },
      
      h6 :{
        color: "#ffffff",
        fontSize: "1rem",
        justifyContent:"center",
        textAlign:"center",
        fontWeight:"bolder",
        flex: "1",
        margin: "0 1rem",
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.25rem"

        },  
        [theme.breakpoints.down('md')]: {

        }, 
        [theme.breakpoints.up('lg')]: {
         
        }, 
        [theme.breakpoints.up('xl')]: {
           
    },
      },

      expenseItemPrice: {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#03a9f4",
        border: "1px solid white",
        padding: "0.5rem",
        borderRadius: "12px",
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.25rem",
            padding:"0.5rem 1.5rem"

        },  
        [theme.breakpoints.down('md')]: {

        }, 
        [theme.breakpoints.up('lg')]: {
         
        }, 
        [theme.breakpoints.up('xl')]: {
           
      },
      
      }

  }));

  export default useStyles;