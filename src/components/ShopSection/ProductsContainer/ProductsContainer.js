import birdProducts from "../../../utils/birdProducts";
import Product from "../Product/Product";
import "./ProductsContainer.css";

// import styled from "styled-components";

const ProductsContainer = () => {
  return (
    <div className="products-container">
      <div className="products-container_introduction">
        <h2 className="products-container_heading">Bird Posters</h2>
        <p className="products-container_description" data-testid="description">
          Collection of Posters with Exotic Birds from all over the world
        </p>
      </div>
      <section className="products-wrapper">
        {birdProducts.map((bird) => {
          return (
            <Product
              key={bird.id}
              id={bird.id}
              name={bird.name}
              price={bird.price}
              src={bird.src}
            />
          );
        })}
      </section>
    </div>
  );
};

/* const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`; */

export default ProductsContainer;
