import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
export default function App() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <Routes>
        <Route path="/"  element={ <Homepage></Homepage>  }></Route>
        <Route path="/details/:id"  element={ <ReviewDetails></ReviewDetails>  }></Route>
        <Route path="/category/:id"  element={ <Category></Category> }></Route>
      </Routes>
    </div>
  );
}
