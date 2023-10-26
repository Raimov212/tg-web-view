import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { onClose, user } = useTelegram();
  return (
    <div>
      {/* <h5>{user?.username}</h5> */}
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
};

export default Header;
