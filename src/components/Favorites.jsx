import { useSelector } from 'react-redux'
import ContactList from './ContactList'

function Favorites() {

  const contacts = useSelector(store => store.ContactList.contacts)
  const favorites = [...contacts].filter(el => el.isFavorite)

  return (
    <>
    <ContactList favorites={favorites}/>
    </>
  )
}

export default Favorites