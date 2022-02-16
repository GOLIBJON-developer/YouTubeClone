import React, { useState } from "react";

import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onFormSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        onChange={handleChange}
        value={searchTerm}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;
