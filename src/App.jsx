import Home from "./Pages/Home";

import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import LoginPage from "./Components/LogInSignUp/LoginPage";
import SignUp from "./Components/LogInSignUp/SignUp";
import Post from "./Pages/Post/Post";
import Authentication from "./Components/LogInSignUp/Authentication";
import Premium from "./Pages/Premium/Premium";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Layout>
  );
}

export default App;
// whtve
