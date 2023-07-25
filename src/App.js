import "./App.css";
import Shop from "./components/Shop";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Shop />
      </Provider>
    </div>
  );
}

export default App;
