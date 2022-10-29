import React, { useState } from "react";
import "./App.css";
import Search from "../search/Search";
import IngredientArea from "../IngredientArea/IngredientArea";
import RecipeArea from "../RecipeArea/RecipeArea";

function App() {
    const [isIngredientView, setIsIngredientView] = useState(true);
    const [ingredients, setIngredients] = useState([]);
    const [searched, setSearch] = useState([]);
    const [selected, setSelected] = useState([]);
    const toggleView = () => {
        setIsIngredientView(!isIngredientView);
    };
    const updateIngredients = (newIngredient) => {
        setIngredients([...ingredients, newIngredient]);
    };
    const filterIngredients = (term) => {
        setSearch(
            ingredients.filter((ingredient) => ingredient.indexOf(term) !== -1)
        );
    };
    const removeIngredient = (item) => {
        setIngredients(ingredients.filter((ingredient) => ingredient !== item));
    };
    const sendSelection = (item) => {
        console.log(item);
        setSelected([...selected, item]);
    };
    return (
        <div className="root">
            <div className="app">
                <Search
                    updateIngredients={updateIngredients}
                    filterIngredients={filterIngredients}
                    toggleView={toggleView}
                />
                {isIngredientView ? (
                    <IngredientArea
                        ingredients={
                            searched.length !== 0 ? searched : ingredients
                        }
                        removeIngredient={removeIngredient}
                        sendSelection={sendSelection}
                    />
                ) : (
                    <RecipeArea ingredients={selected} />
                )}
            </div>
        </div>
    );
}

export default App;
