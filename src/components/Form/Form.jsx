import React, { useEffect, useState } from "react";
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormInput((prev) => ({ ...prev, userCountry: selectCountry }));
    console.log("formInput", formInput);
  };

  console.log("selectCountry", selectCountry);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send Message",
    });
  }, []);

  useEffect(() => {
    if (
      !formInput.userEmail ||
      !formInput.userName ||
      !formInput.userPhoneNumber
    ) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, []);

  return (
    <div className="p-8 ">
      <form onSubmit={handleFormSubmit}>
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
        <button className="w-full bg-blue-400 mt-2 rounded-md py-2 text-white">
          Click Me2
        </button>
      </form>
    </div>
  );
};

export default Form;
