import {useDispatch} from "react-redux";
import {addProduct} from "../../../slices/cart";
import {Grid, IconButton, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {AddShoppingCart} from "@mui/icons-material";
import {useData} from "../../../contexts/data";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductVisio = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`

const ProductList = () => {
  const { data: products } = useData()
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <ProductVisio>
              <Top>
                <Typography variant={'subtitle1'}>{product.title}</Typography>
                <IconButton onClick={() => dispatch(addProduct(product))}>
                  <AddShoppingCart />
                </IconButton>
              </Top>
              <Typography variant={'body2'}>{product.body}</Typography>
            </ProductVisio>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default ProductList