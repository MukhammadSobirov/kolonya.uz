import { makeStyles } from "@material-ui/core/styles";

import Birds from "../../images/foggy_birds.png";

export const useStyles = makeStyles(theme => ({
    root: {
      backgroundImage: `url(${Birds})`,
      width: "100%",
      height: "100%",
      textAlign: "center",
      backgroundRepeat: "repeat",
      backgroundAttachment: "fixed",
      background: "rgba(0, 0, 0, 0.2)",
      paddingBottom: '10%',
      
    },
    sectionTitle: {
      fontFamily: 'serif' || 'Times',
      fontSize: "1.5rem",
      paddingTop: "60px",
      margin: 0,
      color: "#636363",
    },
    line: {
      width: "200px",
      height: "5px",
      marginTop: '20px',
      backgroundColor: "#ffe75e",
      border: "1px solid #ffe75e",
      transitionDuration: '0.2s',
      "&:hover":{
        width: "400px",
        transitionDuration: '0.2s',
      }
    },
    contentContainer: {
      textAlign: "center",
      width: "100%",
      padding: "5% 0 0 5%",
      [theme.breakpoints.down('sm')]: {
        padding: "2% 2% 0 0",
        margin: '0'
      }
    },
    box: {
      textAlign: "center",
      paddingLeft: '10%'
    },
    icon: {
      fontSize: "2.5rem",
      color: "#636363",
    },
    boxTitle: {
      fontSize: "1.5rem",
      paddingBottom: "8%",
      color: "#636363",
    },
    boxText: {
      textAlign: "left",
      fontSize: "18px",
      color: "#636363",
      fontFamily: 'Sans-serif',
      lineHeight: '30px',
      fontWeight: 'lighter'
    },
    btn: {
      backgroundColor: '#ffe75e',
      marginTop: '50px',
      fontSize: '1.2rem',
      transitionDuration: '0.1s',
      "&:hover":{
        backgroundColor: 'rgba(255, 231, 94, 0.8)',
        transitionDuration: '0.1s',
      }
    }
  }));