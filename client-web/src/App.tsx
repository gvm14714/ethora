import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useStoreState } from "./store";
import AppTopNavAuth from "./components/AppTopNavAuth";
import AppTopNav from "./components/AppTopNav";
import AppTopNavOwner from "./components/AppTopNavOwner";

import "./pages/ChatInRoom/theme/default/main.scss";
import { Routes } from "./pages/Routes";
import { Router } from "react-router-dom";
import { history } from "./utils/history";
import { SnackbarContextProvider } from "./context/SnackbarContext";
import { HeaderWarningMessage } from "./components/HeaderWarningMessage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    secondary: {main: 'rgb(168, 173, 170)'}

  },
});

function App() {
  const viewMode = useStoreState((state) => state.viewMode);
  const user = useStoreState((state) => state.user);
  const showHeaderError = useStoreState((state) => state.showHeaderError);

  return (
    <Router history={history}>
      <SnackbarContextProvider>
        <ThemeProvider theme={viewMode === "light" ? lightTheme : darkTheme}>
          <div className="app-root">
            {!user.firstName && <AppTopNavAuth />}
            {user.firstName && user.xmppPassword && <AppTopNav />}
            {user.firstName && !user.xmppPassword && <AppTopNavOwner />}
            {/* {showHeaderError && <HeaderWarningMessage message="Warning" />} */}
            <Routes />
          </div>
        </ThemeProvider>
      </SnackbarContextProvider>
    </Router>
  );
}

export default App;
