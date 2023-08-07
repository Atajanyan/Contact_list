import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Search() {

  const contacts = useSelector(store=>store.ContactList.contacts)
  
  const [inputValue,setInputValue] = useState('')
  
  const [searchList,setSearchList] = useState([...contacts])  

  useEffect(()=>{
    setSearchList(contacts.filter(e=>e.name.includes(inputValue)))
  },[inputValue,contacts])

  return (
    <div>
       <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text"/>
    </div>
  )
}

export default Search