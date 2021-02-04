import { makeStyles } from "@material-ui/core/styles";

import b1 from "../../images/back1.png";
import b1m from "../../images/back1m.png";
import cover from "../../images/foggy_birds.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99.09%",
    height: "100%",
    backgroundColor: "ivory",
    marginBottom: "2%",
  },
  first_div: {
    backgroundImage: `url(${b1})`,
    backgroundSize: "fit",
    backgroundPosition: "center",
    height: "1700px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${b1m})`,
      backgroundSize: "fit",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: '2000px'
    },
  },
  text_box_left: {
    textAlign: "left",
    width: "400px",
    padding: "100px 0 0 80px",
    color: "#636363",
    [theme.breakpoints.down("sm")]:{
      width: "90%",
      padding: '0.5% 0 0 5%'
    },
  },
  text_box_right: {
    textAlign: "left",
    width: "400px",
    padding: "20% 0 0 65%",
    color: "#636363",
    [theme.breakpoints.down("sm")]:{
      width: "90%",
      padding: '70% 0 0 5%'
    },
    [theme.breakpoints.only('md')]: {
      width: "30%",
      padding: '20% 0 0 68%'
    }
  },
  text_box_left_2: {
    textAlign: "left",
    width: "400px",
    padding: "20% 0 0 80px",
    color: "#636363",
    [theme.breakpoints.down("sm")]:{
      width: "90%",
      padding: '80% 0 0 5%'
    },
    [theme.breakpoints.between("sm", 'md')]:{
      width: "90%",
      padding: '60% 0 0 5%'
    },
    [theme.breakpoints.only('md')]: {
      width: "40%",
      padding: '20% 0 0 5%'
    }
  },
  box_title: {
    fontSize: "2.2em",
  },
  box_paragraph: {
    fontSize: "1.25em",
    lineHeight: "27px",
  },
  brand_info: {
    textAlign: "left",
    backgroundImage: `url(${cover})`,
  },
  logo: {
    width: "200px",
    padding: "20px 0 10px 20px",
  },
  brand_text: {
    fontSize: "1.25em",
    lineHeight: "27px",
    paddingTop: "30px",
    color: "#636363",
    [theme.breakpoints.down("sm")]: {
      padding: '0 20px'
    }
  },
  icon: {
    color: "#636363",
    fontSize: "2rem",
    paddingLeft: '20px'
  },
  btn: {
    marginRight: "20px",
    "&:hover": {
      borderBottom: "solid 4px #ffe75e",
      transitionDuration: '0.2s',
    },
  },
  label: {
    color: "#636363",
    paddingBottom: "10px",
    paddingTop: '150px',
    [theme.breakpoints.down("sm")]: {
      padding: '40px 0 10px 30px'
    }
  },
  input: {
    [theme.breakpoints.down("sm")]: {
      padding: '0 0 10px 30px'
    }
  },
  formBox: {
    paddingTop: '150px',
  }
}));
