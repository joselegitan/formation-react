import {IconButton as MuiIconButton} from "@mui/material";
import styled from "@emotion/styled";

const StyledIconButton = styled(MuiIconButton)`
  border: 1px solid lightgrey;
`

const IconButton = ({ children, ...props }) => {
  return (
    <StyledIconButton
      {...props}
    >
      {children}
    </StyledIconButton>
  )
}

export default IconButton

