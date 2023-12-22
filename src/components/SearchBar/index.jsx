import { Input } from "antd";
import { useEffect, useState } from "react";

import { getInvoice } from "@/store/invoice/invoice.thunk";
import { useAppDispatch } from "@/store";
import { useDebounce } from "@/hook/useDebounce";

import "./index.css";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    dispatch(getInvoice(debouncedValue));
  }, [debouncedValue]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search__container">
      <Input
        value={inputValue}
        placeholder="Tìm kiếm"
        allowClear
        className="search-button"
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchBar;
