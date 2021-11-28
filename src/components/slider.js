import React, { useEffect, useState } from "react";
import { useStyles } from "./cart.style";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Item from "./cartItem";


const SliderBar = () => {
  const [dataset, setDataSet] = useState([]);
  const classes = useStyles();
  const handleAddToCart = () => {};
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setDataSet(data);
      });
  }, []);

  const scrollRightH = () =>{
    document.getElementById("ScrollBarHolder").scrollLeft += 30;
  }
  return (
    <>
    <ChevronRightIcon className={classes.iconforRight} onClick={scrollRightH} />
      <div id="ScrollBarHolder" className={classes.holder}>
        {dataset?.map((item) => (
          <div key={item.price}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SliderBar;
