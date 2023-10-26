import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const { tg } = useTelegram();

  const [selectCountry, setSelectCountry] = useState("Tashkent");
  const [formInput, setFormInput] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userCountry: "",
  });

  const handleChangeInput = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify(formInput));
  }, [formInput]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    if (
      !formInput.userEmail ||
      !formInput.userName ||
      !formInput.userPhoneNumber ||
      !formInput.userPhoneNumber
    ) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [
    formInput.userCountry,
    formInput.userEmail,
    formInput.userName,
    formInput.userPhoneNumber,
  ]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send Message",
    });
  }, []);

  return (
    <div className="p-8 ">
      <input
        type="text"
        value={formInput.userName}
        name="userName"
        placeholder="User Name"
        onChange={(e) => handleChangeInput(e)}
      />
      <input
        type="text"
        value={formInput.userEmail}
        name="userEmail"
        placeholder="User Email"
        onChange={(e) => handleChangeInput(e)}
      />
      <input
        type="text"
        value={formInput.userPhoneNumber}
        name="userPhoneNumber"
        placeholder="User Phone Number"
        onChange={(e) => handleChangeInput(e)}
      />
      <select
        className="p-3"
        value={selectCountry}
        onChange={(e) => setSelectCountry(e.target.value)}
      >
        <option value="Tashkent">Tashkent</option>
        <option value="Samarqand">Samarqand</option>
      </select>
    </div>
  );
};

export default Form;
