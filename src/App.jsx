import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/FOrm";
import { Route } from "react-router";

const tg = window.Telegram.WebApp;

const App = () => {
  const { onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <div className="flex justify">
        <Header />
        <button onClick={onToggleButton}>Toggle</button>
      </div>
      <Route index element={<Form />} />
      <Route path="/list" element={<Form />} />
    </div>
  );
};

export default App;
