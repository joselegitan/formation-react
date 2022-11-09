import styled from "@emotion/styled";
import {Link as RouterLink} from "react-router-dom";

export const Link = styled(RouterLink)`
  width: 50px;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const LogoLink = styled(Link)`
  padding: 0;
`
