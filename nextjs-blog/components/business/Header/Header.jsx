import './Header.css';
import IconButton from "../IconButton/IconButton";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';
import {selectMode, setMode} from "../../../slices/ui";
import {LogoLink} from "../../ui/Link/Link";
import CartIcon from "./CartIcon";

const SIconButton = styled(IconButton)`
  color: white;
`

function Header() {
  const mode = useSelector(selectMode)
  const dispatch = useDispatch();

  return (
    <header className="App-header">
      <LogoLink to={'/'}>
        <img src={'/logo.svg'} className="App-logo" alt="logo" />
      </LogoLink>
      <div className="Header-links">
        <CartIcon />
        <SIconButton
          size={'large'}
          onClick={() => dispatch(setMode())}
        >
          {mode === 'light'
            ? <NightlightIcon />
            : <LightModeIcon />
          }
        </SIconButton>
      </div>
    </header>
  );
}

export default Header;
