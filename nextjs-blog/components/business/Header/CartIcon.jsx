import { useSelector} from "react-redux";
import {ShoppingCart} from "@mui/icons-material";
import {getCartProducts} from "../../../slices/cart";
import styled from "@emotion/styled";
import {LogoLink} from "../../ui/Link/Link";

const SShoppingCart = styled(ShoppingCart)`
  width: 30px;
  height: 30px;
`
const Wrapper = styled.div`
  position: relative;
`

const Round = styled.div`
  border-radius: 50%;
  background: red;
  color: white;
  position: absolute;
  top: 0; right: 0;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartIcon = () => {
  const products = useSelector(getCartProducts)

  return (
    <LogoLink href={'/cart'}>
      <Wrapper>
        <SShoppingCart />
        {products.length > 0 && (
          <Round>
            {products.length}
          </Round>
        )}
      </Wrapper>
    </LogoLink>
  )
}

export default CartIcon