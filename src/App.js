import ShopCartProvider from "./utils/ShopContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeSection/Home";
import Header from "./components/Header/Header";
import ProductsContainer from "./components/ShopSection/ProductsContainer/ProductsContainer";
import ShoppingCart from "./components/CartSection/ShoppingCart";
import styled from "styled-components";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShopCartProvider>
          <Header />
          <StyledMain>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductsContainer />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </StyledMain>
        </ShopCartProvider>
      </BrowserRouter>
    </>
  );
}

const StyledMain = styled.main``;
export default App;
