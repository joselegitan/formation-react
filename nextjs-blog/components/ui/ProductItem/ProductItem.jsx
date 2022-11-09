import styled from "@emotion/styled";
import {IconButton, Typography} from "@mui/material";
import {Cancel} from "@mui/icons-material";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid lightgrey;
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  gap: 30px;
  text-align: left;
`

const SCancel = styled(Cancel)`
  width: 30px;
  height: 30px;
`

const ProductItem = ({ title, body, onRemove }) => (
  <Wrapper>
    <Content>
      <Typography variant={'headline'}>{title}</Typography>
      <Typography variant="body1" >{body}</Typography>
    </Content>
    <IconButton onClick={onRemove}>
      <SCancel />
    </IconButton>
  </Wrapper>
)

export default ProductItem
