import birdProducts from "../../../utils/birdProducts";
import Product from "../Product/Product";

import styled from "styled-components";

const ProductsContainer = () => {
  return (
    <>
      <h2>Bird Posters</h2>
      <p data-testid="description">
        Collection of Posters with Exotic Birds from all over the world
      </p>
      <ProductsWrapper>
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
      </ProductsWrapper>
    </>
  );
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default ProductsContainer;
