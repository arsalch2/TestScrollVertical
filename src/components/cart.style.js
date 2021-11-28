import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  Wrapper: {
    display: "inline-flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    border: "1px solid lightblue",
    borderRadius: "20px",
    height: "100%",
    marginRight: '20px'
  },
  holder: {
      display: 'flex',
      width:'100%',
      height:'100%',
      overflow: 'auto',
      marginBottom: '-50px',
      paddingBottom: '50px',
  },
  imageofitem: {
      width:'150px',
      height: '150px'
  },
  dsp: {
      maxWidth: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
  },
  headText: {
    maxWidth: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  iconforRight:{
      width: '100px',
      opacity: '0.5',
      zIndex: '10',
      background: 'lightgray',
      position: 'absolute',
      height: '300px',
      right: '0',
      cursor: 'pointer',
  }
});
