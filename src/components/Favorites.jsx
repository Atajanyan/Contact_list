import { useEffect, useState } from 'react'
import Contact from './Contact' 
import { useSelector } from 'react-redux'

function Favorites() {

  const contacts = useSelector(store => store.ContactList.contacts)
  const favorites = [...contacts].filter(el => el.isFavorite)

  const [inputValue,setInputValue] = useState('')
  const [searchList,setSearchList] = useState(favorites)  

  useEffect(()=>{
    setSearchList(favorites.filter(e=>e.name.includes(inputValue)))
  },[inputValue,contacts])


  return (
    <>
      <h1 className='lists-title'>Favorites</h1>
      <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text"/>

    <div className='contact-list'>
      {
        searchList.map(favorite => {
          return <div key={favorite.id}><Contact contact={favorite}/></div>
        })
      }
    </div>
    </>
  )
}

export default Favorites