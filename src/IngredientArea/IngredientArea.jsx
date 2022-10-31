import React from "react";
import "./IngredientArea.css";
import IngredientPane from "../IngredientPane/IngredientPane";

function IngredientArea({ ingredients, removeIngredient, sendSelection }) {
    return (
        <div className="ingredient-view">
            {ingredients.map((item, index) => (
                <IngredientPane
                    key={item+index}
                    name={item}
                    removeIngredient={removeIngredient}
                    sendSelection={sendSelection}
                />
            ))}
        </div>
    );
}

export default IngredientArea;
