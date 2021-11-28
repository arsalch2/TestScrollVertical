import { useStyles } from "./cart.style";

const Item = ({ item, handleAddToCart }) => {
    const classes = useStyles();
    return (
      <div className={classes.Wrapper}>
        <img src={item.image} className={classes.imageofitem} alt={item.title} />
        <div>
          <h3 className={classes.headText}>{item.title}</h3>
          <p className={classes.dsp}>{item.description}</p>
          <h3>${item.price}</h3>
        </div>
      </div>
    );
  };
  
  export default Item;