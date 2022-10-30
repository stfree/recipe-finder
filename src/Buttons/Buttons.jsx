import React from "react";
import "./Buttons.css";

function Buttons({ toggleView, updateIngredients, filterIngredients }) {
    return (
        <div className="buttons">
            <button className="pushable" onClick={updateIngredients}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span className="front">Add</span>
            </button>
            <button className="pushable" onClick={filterIngredients}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span className="front">Search</span>
            </button>
            <button className="pushable" onClick={toggleView}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span className="front">Get Recipes</span>
            </button>
        </div>
    );
}

export default Buttons;
