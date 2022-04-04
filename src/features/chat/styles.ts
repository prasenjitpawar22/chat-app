import { makeStyles } from "@mui/styles";
import { style } from "@mui/material/node_modules/@mui/system";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    width: 700,
    height: 500,
  },
  containerPaper: {
    backgroundColor: "#C73EA6",
    flex: 1,
    display: "flex",
    overflow: "auto",
    height: "450px",
    minHeight: "min-content" /* needs vendor prefixes */,
    "&.css-17vsgdu-MuiPaper-root": {
      backgroundColor: "#C73EA6",
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  chatBoxLeft: {
    display: "flex",
    flexDirection: "column",
    height: "inherit",
    paddingLeft: 10,
    minHeight: "minContent" /* needs vendor prefixes */,
    justifyContent: "end",
  },
  chatBoxRight: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 10,
    height: "inherit",
    minHeight: "minContent" /* needs vendor prefixes */,
    justifyContent: "end",
  },
  form: {
    flexDirection: "row",
    display: "flex",
    padding: 10,
    alignItems: "baseline",
    gap: 12,
  },
  msgInput: {
    flexGrow: 1,
    "&:hover,&:focus": {
      outline: "none",
    },
  },
  msgSendBtn: {
    asd: "Asdad",
  },
});

export default useStyles;
