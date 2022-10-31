import React from "react";
import "./RecipePane.css";

function RecipePane({ image, title, ingredients }) {
    return (
        <div className="recipe-pane">
            <img className="picture" src={image} alt="title"></img>
            <div className="info">
                <h1 className="title">{title}</h1>
                <div>Ingredients</div>
                <ul>
                    {ingredients.map((item) => {
                        return <li>{item.food}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default RecipePane;
