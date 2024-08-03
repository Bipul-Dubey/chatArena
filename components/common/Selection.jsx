import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { X } from "@phosphor-icons/react";

const AutocompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NoSuggestions = styled.div`
  padding: 10px;
  color: #999;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CustomTextField = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

const SelectedItem = styled.div`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 5px;
`;

const Autocomplete = ({
  placeholder = "",
  suggestions,
  onSuggestionSelect,
}) => {
  console.log("suggestions", typeof suggestions?.at(0));

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const containerRef = useRef(null);

  const handleInputChange = (e) => {
    const input = e.currentTarget.value;
    const filtered = input
      ? suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        )
      : suggestions;

    setUserInput(input);
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleFocus = () => {
    setFilteredSuggestions(suggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!selectedItems.includes(suggestion)) {
      setSelectedItems([...selectedItems, suggestion]);
      setUserInput("");
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      onSuggestionSelect(suggestion);
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AutocompleteContainer ref={containerRef}>
      <InputWrapper>
        {selectedItems.map((item, index) => (
          <SelectedItem key={index}>
            {item}
            <X
              size={18}
              onClick={() => handleRemoveItem(item)}
              style={{ cursor: "pointer" }}
            />
          </SelectedItem>
        ))}
        <CustomTextField
          value={userInput}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
        />
        {selectedItems.length > 0 && (
          <X
            size={18}
            onClick={handleClearAll}
            style={{ cursor: "pointer", position: "absolute", right: 5 }}
          />
        )}
      </InputWrapper>
      {showSuggestions && (
        <SuggestionsList>
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))
          ) : (
            <NoSuggestions>No suggestions available</NoSuggestions>
          )}
        </SuggestionsList>
      )}
    </AutocompleteContainer>
  );
};

export default Autocomplete;
