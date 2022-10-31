import React, { useState } from "react";
import "./RecipeArea.css";
import axios from "axios";
import RecipePane from "../RecipePane/RecipePane";
import { useEffect } from "react";

const API_KEY = "?app_key=3914984990ca29653a5c969f1cf56d08";
const API_ID = "8003af2e";

function RecipeArea({ ingredients }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const ingredientList = ingredients.join(",");
            const recipeData = await axios.get(
                `https://api.edamam.com/search${API_KEY}&app_id=${API_ID}&q=${ingredientList}`
            );
            let results = recipeData?.data?.hits || [];
            setData(results);
        })();
    }, []);
    return (
        <>
            <div className="recipe-area">
                {data.map((recipe) => {
                    console.log(recipe.recipe.ingredients);
                    return (
                        <RecipePane
                            key={recipe.recipe.calories}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default RecipeArea;
