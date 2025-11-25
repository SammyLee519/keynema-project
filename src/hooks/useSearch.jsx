import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      navigate(`/search?q=${searchValue}`);
      setSearchValue("");
    }
  };

  return {
    searchValue,
    handleChange,
    handleSubmit,
  };
};

export default useSearch;
