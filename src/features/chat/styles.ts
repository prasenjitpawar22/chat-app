import { makeStyles } from "@mui/styles";
import { style } from "@mui/material/node_modules/@mui/system";

const useStyles = makeStyles({
  containerPaper: {
    backgroundColor: "#C73EA6",
    flex: 1,
    display: "flex",
    overflow: "auto",
    width: "calc(100%)",
    height: "calc(100vh - 100px)",
    minHeight: "min-content" /* needs vendor prefixes */,
    "&.css-17vsgdu-MuiPaper-root": {
      backgroundColor: "#C73EA6",
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      paddingBottom: 10,
    },
  },
  chatBoxLeft: {
    display: "flex",
    flexDirection: "column",
    height: "inherit",
    gap: 14,
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
  chat: {},
  chatWrapper: {
    display: "flex",
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: "#993EC7",
    padding: 10,
    color: "white",
    // paddingLeft: 24,
    paddingRight: 34,
    borderRadius: "10px",
    borderTopLeftRadius: 0,
  },
  chatUsername: {
    backgroundColor: "#4B0082",
    fontSize: "12px",
    padding: "2px",
    borderRadius: "15%",
    // padding: "10px",
  },
});

export default useStyles;
