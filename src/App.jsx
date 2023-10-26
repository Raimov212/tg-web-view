import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";

const tg = window.Telegram.WebApp;

const App = () => {
  const { onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      App
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
};

export default App;
