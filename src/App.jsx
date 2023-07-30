import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Popup from "./components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { IsHidePopup } from "./store/ContactListSlice";
import "./App.scss";

function App() {

  const dispatch = useDispatch()

  const isShow = useSelector(store => store.ContactList.isShow)

  return (
    <>
      <div
        onClick={() => dispatch(IsHidePopup())}
        className={isShow ? "disable" : "enable"}
      ></div>

        <h1 className="title">CONTACT LIST</h1>
      <div className="container">
        <Form/>
        <ContactList/>
        {isShow && (
          <Popup/>
        )}
      </div>
    </>
  );
}

export default App;
