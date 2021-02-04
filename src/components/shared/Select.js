import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  Select: {
    backgroundColor: "#ffe75e",
    "&:hover": {
      backgroundColor: "rgba(255, 231, 94, 0.9);",
    },
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
 
  const handleChange = (event) => {
    props.setLang(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          className={classes.Select}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-outlined"
          value={props.lang}
          onChange={handleChange}
          label="lang"
          variant='outlined'
        >
          <MenuItem value="RUS"></MenuItem>
          <MenuItem value="RUS">RUS</MenuItem>
          <MenuItem value="UZB">UZB</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
