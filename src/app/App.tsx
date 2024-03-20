// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "../pages/main-page/main-page";
import PostDetails from "../pages/details-page/details-page";
import { AppRoute } from "../shared/config/const";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.ROOT} element={<PostList />} />
        <Route path={AppRoute.POST + ":id"} element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
