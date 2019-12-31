const styles = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    searchTextBox: {
      width: "80%"
    },
    margin: {
      margin: theme.spacing.unit
    },
    paper: {
      marginTop: theme.spacing.unit * 3,
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing.unit * 3,
      margin: "24px 5px"
    },
    paperHeaderContainer: {
      position: "relative"
    },
    paperHeader: {
      padding: "0 0 0 16px",
      marginBottom: 0,
      float: "left",
      color: "#000"
    },
    leftInput: {
      padding: "0px 32px 16px 16px"
    },
    rightInput: {
      padding: "0px 32px 16px 0"
    },
    rightInputActions: {
      alignSelf: "center"
    },
    uploadLogoContainer: {
      marginTop: "12px",
      marginBottom: "8px",
      border: 0,
      display: "inline-flex",
      padding: 0,
      position: "relative",
      minWidth: 0,
      flexDirection: "column",
      verticalAlign: "top",
      width: "100%"
    },
    uploadLogoFieldSet: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingBlockEnd: 0,
      paddingInlineEnd: 0,
      borderRadius: "6px",
      borderWidth: "1px",
      marginInlineEnd: 0,
      "&:active": {
        borderColor: "#3489bc",
        borderWidth: "2px"
      }
    },
    uploadLogoFieldSetHaveValue: {
      borderColor: "#3489bc",
      borderWidth: "2px"
    },
    bigAvatar: {
      width: "55%",
      padding: "6px 0",
      height: "150px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      display: "inline-block",
      margin: "9px 0"
    },
    right: {
      float: "right"
    },
    uploadLogoBtn: {
      top: "-4px",
      bottom: "0px",
      right: "0px",
      textTransform: "capitalize"
    },
    rightActionButton: {
      top: "4px",
      bottom: "0px",
      right: "16px",
      textTransform: "capitalize"
    },
    uploadFileError: {
      color: "#f44336",
      borderColor: "#f44336"
    },
    scrollContent: {
      margin: "0 auto",
      height: "350px",
      paddingBottom: "15px"
    },
    pageHeader: {
      fontSize: "26px",
      marginRight: "10px",
      color: "#4b4b4c"
    },
    PageDescription: {
      color: "#777"
    },
    filterDateLabel: {
      display: "inline-block",
      width: "60px",
      border: "1px solid #ccc",
      borderRight: "0 !important",
      padding: "10px 13px 10px",
      fontSize: "14px",
      textAlign: "center",
      color: "#ccc"
    },
    searchTextWrapper: {
      padding: "15px",
      backgroundColor: "#fff",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px"
    },
    drawBorder: {
      borderColor: "#3f51b5",
      borderWidth: "2px",
      padding: "10px 12px 8px"
    },
    filterButton: {
      width: "80%",
      padding: "15px",
      margin: 0,
      backgroundColor: "#EB5C00",
      textTransform: "capitalize"
    },
    addButton: {
      color: "#EB5C00",
      borderColor: "#EB5C00",
      padding: "7px 12px",
      margin: 0,
      "&:hover": {
        color: "#fff",
        background: "#EB5C00",
        border: "1px solid #EB5C00"
      },
      "&:last-child": {
        marginLeft: "10px"
      }
    },
    topButtons: {
      textAlign: "right"
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    
    rightPaper: {
      padding: "32px 48px !important"
    },
    description: {
      margin: "0 0 10px 0",
      "& span": {
        marginLeft: "10px",
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "15px",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif"
      }
    },
    actionContainer: {
      textAlign: "right",
      "& button": {
        "&:last-child": {
          marginLeft: "10px"
        }
      }
    },
    
    activeGoButton: {
      color: "#fff",
      background: "#eb5c00",
      borderColor: "#eb5c00",
      "&:hover": {
        background: "#cc5000 !important",
        borderColor: "#cc5000 !important"
      }
    }
  });
  
  export default styles;
  