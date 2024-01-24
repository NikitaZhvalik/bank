import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import TransactionsPage from "@/pages/TransactionsPage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
