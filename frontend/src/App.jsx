import "./App.css";
import { Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// apollo client
const client = new ApolloClient({
  uri: "http://localhost:8082/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
          <SiteHeader></SiteHeader>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route
            path="/details/:id"
            element={<ReviewDetails></ReviewDetails>}
          ></Route>
          <Route path="/category/:id" element={<Category></Category>}></Route>
        </Routes>
      </ApolloProvider>
    </div>
  );
}
