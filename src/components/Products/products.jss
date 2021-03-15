import { makeStyles } from "@material-ui/core/styles";

import b1 from "../../images/back1.png";
import cover from "../../images/foggy_birds.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99.09%",
    height: "100%",
    backgroundColor: "white",
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
      background: "white",
      height: "100%",
    },
  },
  text_box_left: {
    textAlign: "left",
    width: "400px",
    padding: "100px 0 0 80px",
    color: "#636363",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: "0.5% 0 0 5%",
    },
  },
  text_box_right: {
    textAlign: "left",
    width: "400px",
    padding: "20% 0 0 65%",
    color: "#636363",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: "10% 0 0 5%",
    },
    [theme.breakpoints.only("md")]: {
      width: "30%",
      padding: "20% 0 0 68%",
    },
  },
  text_box_left_2: {
    textAlign: "left",
    width: "400px",
    padding: "20% 0 0 80px",
    color: "#636363",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: "10% 0 0 5%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "90%",
      padding: "10% 0 0 5%",
    },
    [theme.breakpoints.only("md")]: {
      width: "40%",
      padding: "15% 0 0 5%",
    },
  },
  // show divs on mobile
  onMobileDisplay: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
      width: "100%",
      height: "100%",
    },
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
    padding: "20px 0 10px 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0 10px 20px",
    },
  },
  brand_text: {
    fontSize: "1.25em",
    lineHeight: "27px",
    paddingTop: "30px",
    color: "#636363",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  icon: {
    color: "#636363",
    fontSize: "2rem",
    marginLeft: "5px",
    "&:hover": {
      color: "#1b1717",
    },
  },
  btn: {
    marginLeft: "50px",
  },
  label: {
    color: "#636363",
    paddingBottom: "10px",
    paddingTop: "150px",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0 10px 30px",
    },
  },
  input: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 10px 30px",
    },
  },
  formBox: {
    paddingTop: "150px",
  },

  infoConteiner: {
    padding: "5px 0 0 80px",
    color: "#636363",
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 10px 20px",
    },
  },
}));
