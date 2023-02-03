import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./features/auth/Welcome";
import Login from "./features/auth/Login";
import RequireAuth from "./features/auth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<RequireAuth />} />
      </Route>
    </Routes>
  );
}

export default App;
