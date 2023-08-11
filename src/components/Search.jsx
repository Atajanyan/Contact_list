import { useEffect } from "react";

function Search({
  contacts,
  searchList,
  setSearchList,
  inputValue,
  setInputValue,
}) {
  useEffect(() => {
    setSearchList(searchList.filter((e) => e.name.includes(inputValue)));
  }, [inputValue, contacts]);

  return (
      <input
        className="search"
        placeholder="...search contact"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
  );
}

export default Search;
