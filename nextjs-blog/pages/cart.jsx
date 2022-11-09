import Header from "../components/business/Header/Header";
import Footer from "../components/business/Footer/Footer";
import Cart from "../components/business/Cart/Cart";
import styled from "@emotion/styled";

const Layout = styled.main`
  padding: 50px;
  text-align: center;
  min-height: 100%;
`

function CartPage() {
  return (
    <div className="App">
      <Header />
      <Layout className="App-content">
        <Cart />
      </Layout>
      <Footer />
    </div>
  )
}

export default CartPage