import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { store } from "./redux";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
