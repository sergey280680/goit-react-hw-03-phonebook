import React from "react";
import { Label, SearchWrapper } from "./Search.styled";

export const Search = ({ value, onChange, onReset }) => {
  return (
    <SearchWrapper>
      <Label>
        Поиск контакта
        <input type="text" value={value} onChange={onChange} />
      </Label>
      <button onClick={onReset}>x</button>
    </SearchWrapper>
  );
};
