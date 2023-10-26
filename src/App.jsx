import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/FOrm";
import { Route, Routes } from "react-router";
import ProductList from "./components/ProductList/ProductList";

const tg = window.Telegram.WebApp;

const App = () => {
  const { onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Routes>
      <div className="flex justify">
        <Header />
        <button onClick={onToggleButton}>Toggle</button>
      </div>
      <Route index element={<Form />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/*" element={<Form />} />
    </Routes>
  );
};

export default App;
