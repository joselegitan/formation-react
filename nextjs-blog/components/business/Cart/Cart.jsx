import {useDispatch, useSelector} from "react-redux";
import {getCartProducts, removeProduct} from "../../../slices/cart";
import {Paper, Typography} from "@mui/material";
import ProductItem from "../../ui/ProductItem/ProductItem";
import styled from "@emotion/styled";

const Wrapper = styled(Paper)`
  display: flex;
  flex-flow: column;
  width: 500px;
  padding: 50px;
`

const Cart = () => {
  const products = useSelector(getCartProducts)
  const dispatch = useDispatch();

  const onRemove = (id) => () => {
    console.log('id', id)
    dispatch(removeProduct(id))
  }

  return (
    <Wrapper>
      {products.length > 0
        ? products.map((product) => (
          <ProductItem key={product.id} {...product} onRemove={onRemove(product.id)} />
        ))
        : <Typography variant={'subtitle2'}>Aucun produit</Typography>
      }
    </Wrapper>
  )
}

export default Cart