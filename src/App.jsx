import React, { useEffect } from "react";

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      App
      <button onClick={onClose}>Click Me</button>
    </div>
  );
};

export default App;
