import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/signIn/SignIn";

const Shop = () => {
  return <h3>Shop Component</h3>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
