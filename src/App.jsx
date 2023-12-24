import Home from "./Pages/Home";

import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="/login" element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;
// whtve
