import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import "./Search.css";

function Search({ updateIngredients, filterIngredients, toggleView }) {
    const [value, setValue] = useState("");

    const updateValue = (event) => {
        let newIngredient = event.target.value;
        setValue(newIngredient);
        filterIngredients(value);

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


    const enterValue = (event) => {
        if (event.key === "Enter" && value.length !== 0) {
                updateIngredients(value);
                setValue("");
                filterIngredients("");

        }
    };


    return (
        <div className="search">
            <div className="field">
                <div className="food-input">
                    <input
                        className="search-field"
                        type="text"
                        placeholder="...add ingredient"
                        value={value}
                        onChange={updateValue}
                        onKeyPress={enterValue}

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
