import { BrowserRouter, Route, Routes } from "react-router-dom";

import TransactionsPage from "@/pages/TransactionsPage";
import HomePage from "@/pages/HomePage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
