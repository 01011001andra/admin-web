import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, DataBarang, Login, NotFound, Request } from "./pages";

const App = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(true);
  const [isStaffLogin, setIsStaffLogin] = useState(false);

  if (isStaffLogin) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h1>Main</h1>} />
          <Route path="request" element={<Request />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  if (isAdminLogin) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h1>Main</h1>} />
          <Route path="databarang" element={<DataBarang />} />
          <Route path="request" element={<Request />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
