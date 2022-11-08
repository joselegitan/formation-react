import logo from '../../../logo.svg';
import './Header.css';
import IconButton from "../IconButton/IconButton";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';
import {selectMode, setMode} from "../../../slices/ui";
import {Link, LogoLink} from "../../ui/Link/Link";

const SIconButton = styled(IconButton)`
  color: white;
`

function Header() {
  const mode = useSelector(selectMode)
  const dispatch = useDispatch();

  return (
    <header className="App-header">
      <LogoLink to={'/'}>
        <img src={logo} className="App-logo" alt="logo" />
      </LogoLink>
      <div className="Header-links">
        <Link to="/cart">
          Cart
        </Link>
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
