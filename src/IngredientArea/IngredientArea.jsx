import React from "react";
import "./IngredientArea.css";
import IngredientPane from "../IngredientPane/IngredientPane";

function IngredientArea({ ingredients, removeIngredient, sendSelection }) {
    return (
        <div className="ingredient-view">
            {ingredients.map((item) => (
                <IngredientPane
                    key={item}
                    name={item}
                    removeIngredient={removeIngredient}
                    sendSelection={sendSelection}
                />
            ))}
        </div>
    );
}

export default IngredientArea;
