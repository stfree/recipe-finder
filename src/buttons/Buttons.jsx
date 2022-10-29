import React from "react";
import "./Buttons.css";

function Buttons({ toggleView, updateIngredients, filterIngredients }) {
    return (
        <div className="buttons">
            <div className="button" onClick={updateIngredients}>
                Add
            </div>
            <div className="button" onClick={filterIngredients}>
                Search
            </div>
            <button className="button" onClick={toggleView}>
                Get Recipes
            </button>
        </div>
    );
}

export default Buttons;
