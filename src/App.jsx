import Home from "./Pages/Home";

import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import LoginPage from "./Components/LogInSignUp/LoginPage";
import SignUp from "./Components/LogInSignUp/SignUp";
import Post from "./Pages/Post/Post";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Layout>
  );
}

export default App;
// whtve
