import React, { useState } from "react";
import Buttons from "../buttons/Buttons";
import "./Search.css";

function Search({ updateIngredients, filterIngredients, toggleView }) {
    const [value, setValue] = useState("");

    const updateValue = (event) => {
        let newIngredient = event.target.value;
        setValue(newIngredient);
    };

    const sendNewIngredient = () => {
        if (value.length !== 0) {
            updateIngredients(value);
            setValue("");
        }
    };

    const handleSearch = () => {
        filterIngredients(value);
        setValue("");
    };
    return (
        <div className="search">
            <div className="field">
                <div className="food-input">
                    <input
                        type="text"
                        placeholder="...add ingredient"
                        value={value}
                        onChange={updateValue}
                    ></input>
                </div>
            </div>
            <div>
                <Buttons
                    toggleView={toggleView}
                    updateIngredients={sendNewIngredient}
                    filterIngredients={handleSearch}
                />
            </div>
        </div>
    );
}

export default Search;
