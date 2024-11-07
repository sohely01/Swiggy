import { Provider } from "react-redux";
import "./App.css";
import Routing from "./Routing/Routing";
import appStore from "./Utils/appStore";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <Routing />
      </Provider> 
    </>
  );
}

export default App;
