import { useEffect } from "react"

function Pagination({inputValue,setPagination,searchList,page,setPage,contactInPage}) {

    
  useEffect(()=>{
    setPage(1)
    setPagination(0)
    console.log('inputValue',inputValue);
},[inputValue])

    function handleNextPage(){
        if(page<Math.ceil(searchList.length/contactInPage)){
            setPagination(prev=>prev+contactInPage)
            setPage(prev=>prev+1)
        }
    } 

    function handlePrevPage(){
        if(page>1){
            setPagination(prev=>prev-contactInPage)
            setPage(prev=>prev-1)
        }
    }

  return (
    <div className="pagination">
    <button className="pagination__button" onClick={handlePrevPage}>{'<'}</button>
    <span>{page}</span>
    <button className="pagination__button" onClick={handleNextPage}>{'>'}</button>
  </div>
  )
}

export default Pagination