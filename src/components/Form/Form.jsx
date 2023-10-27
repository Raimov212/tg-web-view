import { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const { tg } = useTelegram();

  const [formInput, setFormInput] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userCountry: "Tashkent",
  });

  console.log("formInput", formInput);

  const handleChangeInput = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify(formInput));
  }, [formInput, tg]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

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
    tg,
  ]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send Message",
    });
  }, [tg]);

  return (
    <div className="p-8 mt-12">
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
        name="userCountry"
        className="p-3"
        value={formInput.userCountry}
        onChange={(e) => handleChangeInput(e)}
      >
        <option value="Tashkent">Tashkent</option>
        <option value="Samarqand">Samarqand</option>
      </select>
    </div>
  );
};

export default Form;
