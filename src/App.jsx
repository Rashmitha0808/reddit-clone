import Home from "./Pages/Home";

import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import LoginPage from "./Components/LogInSignUp/LoginPage";
import SignUp from "./Components/LogInSignUp/SignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
// whtve
