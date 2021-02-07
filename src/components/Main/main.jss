import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
      position: "relative",
      width: "100%",
      height: "90vh",
      textAlign: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      transitionDuration: "2s",
      transitionTimingFunction: "ease-in-out",
      background: "rgba(0, 0, 0, 0.2)",
    },
  
    container: {
      margin: 0,
    },
  
    textBox: {
      textAlign: "center",
      width: '100%',
      paddingTop: "10%",
      [theme.breakpoints.down('sm')]: {
        paddingTop: '40%'
      }
    },
  
    title: {
      fontFamily: 'serif' || 'Times',
      fontSize: "4.5em",
      fontWeight: '500',
      color: "ivory",
      margin: "5px",
      lineHeight: '58px',
      letterSpacing: '5px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5em',
        lineHeight: '48px',
      }
    },
  
    line: {
      width: "150px",
      height: "5px",
      backgroundColor: "#ffe75e",
      border: "1px solid #ffe75e",
      transitionDuration: '0.2s',
      marginTop: '20px',
      "&:hover":{
        width: "200px",
        transitionDuration: '0.2s',
      },
    },
  
    subtitle: {
      fontFamily: 'serif' || 'Times',
      fontSize: "2rem",
      color: "ivory",
      margin: "20px"
    },
  
    arrow: {
      color: "#ffe75e",
      marginTop: "8%",
      fontSize: "2.5rem",
      [theme.breakpoints.down('sm')]: {
        marginTop: "28%",
      }
    }
  }));