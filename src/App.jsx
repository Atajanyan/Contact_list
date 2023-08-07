import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Popup from "./components/Popup";
import Favorites from "./components/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { IsHidePopup } from "./store/ContactListSlice";
import { Route,Routes, NavLink } from "react-router-dom";
import "./App.scss";

function App() {

  const dispatch = useDispatch()

  const isShow = useSelector(store => store.ContactList.isShow)

  return (
    <div className="app">
      <header className="header">
      <h1 className="title">CONTACT LIST</h1>
      <div className="header__categories">
        <NavLink to='/'>All List</NavLink>
        <NavLink to='./favorites'>Favorites</NavLink>
      </div>
      </header>
      <div
        onClick={() => dispatch(IsHidePopup())}
        className={isShow ? "disable" : "enable"}
      ></div>

      <div className="container">
        <Form/>
        <Routes>
          <Route path="/" element={<ContactList/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        {isShow && (
          <Popup/>
        )}
      </div>
    </div>
  );
}

export default App;
