import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import HomePage from "./pages";
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./utils/theme";
import {DataProvider} from "./contexts/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
      <DataProvider>
        <UiProvider>
          {/*<ThemeProvider theme={theme}>*/}
            <HomePage />
          <CoolPage />
            {/*<RouterProvider router={router} />*/}
          {/*</ThemeProvider>*/}
        </UiProvider>
      </DataProvider>
    {/*</Provider>*/}
  </React.StrictMode>
);

const UIProvider = ({ children }) {
  const { user } = useUser()
  const [mode, setMode] = useState('light')

  const [toasts, setToasts] = useState([])

  function addToast(toast) {
    toasts.push(toast)
  }

  return (
    <UiContext.Provider value={{ addToast }}>
      <ThemeProvider theme={getTheme(mode)}>
        <HomePage />
        <CoolPage />
        {toasts.length > 0 && (
          <toastWrap>
            {toasts.map(e => <Toast {...e} />)}
          </toastWrap>
        )}
      </ThemeProvider>
    </UiContext.Provider>
  )
}

export const useUi = useContext(UiContext)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
