import { useDispatch } from "react-redux"
import { deleteContact,editContact,addFavorite } from "../store/ContactListSlice"
import starYellow from '../assets/starYellow.png'
import star from '../assets/star.png'
import "./Contact.scss"


function Contact({contact}) {

  const dispatch = useDispatch()

  const handleEditContact = () => {
    dispatch(editContact(contact))
  }

  const handleRemoveContact = () => {
    dispatch(deleteContact(contact))
  }

  const handleToggleFavorites = () => {
    dispatch(addFavorite(contact))
  }

  return (
    <div className="contact">
      <img className="contact__img" src={contact?.photoUrl || "https://sun9-60.userapi.com/impg/UX2_E5ThtE3SALToW-dsA_f33QQP6mog8dN8wA/d6lQbJAhvuc.jpg?size=1680x1668&quality=95&sign=cc46c79ed47eda96e34f1c5c20d1b5c0&c_uniq_tag=03Hv-GAfPgWiOMTvUz0A822O7hIMZfTlaar7ic76Ij8&type=album"} alt="" />
    <div className="contact__info">
        <h3 className="contact__description">{contact?.name}</h3>
        <h3 className="contact__description">{contact?.surname}</h3>
        <p className="contact__description">{contact?.email}</p>
        <p className="contact__description">{contact?.phone}</p>
        <div className="contact__favorite">
        <div className={`contact__button ${contact?.status && 'contact__button--online'}`}>{contact?.status?'Online':'Offline'}</div>
        <img onClick={handleToggleFavorites} className="contact__star" src={contact.isFavorite?starYellow:star} alt="" />
        </div>
    </div>
    <div className="contact__actions">
      <div className="contact__button contact__button--edit" onClick={handleEditContact}>Edit</div>
      <div className="contact__button contact__button--delete" onClick={handleRemoveContact}>Delete</div>
    </div>  
  </div>
  )
}

export default Contact