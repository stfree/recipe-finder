import React, { useReducer } from "react";
import "./App.css";
import Search from "../search/Search";
import IngredientArea from "../IngredientArea/IngredientArea";
import RecipeArea from "../RecipeArea/RecipeArea";

export function stateReducer(state, actions) {
    switch (actions.type) {
        case "TOGGLE_VIEW":
            return { ...state, isIngredientView: !state.isIngredientView };
        case "UPDATE_INGREDIENTS":
            return {
                ...state,
                ingredients: [...state.ingredients, actions.newIngredient],
            };
        case "FILTER_INGREDIENTS":
            return {
                ...state,
                searched: state.ingredients.filter(
                         (ingredient) => ingredient.indexOf(actions.term) !== -1
                 ).concat(state.ingredients.filter(
                         (ingredient) => ingredient.indexOf(actions.term) === -1
                 )),
            };
        case "REMOVE_INGREDIENT":
            return {
                ...state,
                ingredients: state.ingredients.filter(
                    (ingredient) => ingredient !== actions.item
                ),
            };
        case "SEND_SELECTION":
            return { ...state, selected: [...state.selected, actions.item] };
    }
}
function App() {
    const [state, dispatch] = useReducer(stateReducer, {
        isIngredientView: true,
        ingredients: [],
        searched: [],
        selected: [],
    });

    return (
        <div className="root">
            {state.isIngredientView}
            <div className="app">
                <Search
                    updateIngredients={(newIngredient) =>
                        dispatch({ type: "UPDATE_INGREDIENTS", newIngredient })
                    }
                    filterIngredients={(term) =>
                        dispatch({ type: "FILTER_INGREDIENTS", term })
                    }
                    toggleView={() => dispatch({ type: "TOGGLE_VIEW" })}
                />
                {state.isIngredientView ? (
                    <IngredientArea
                        ingredients={
                            state.searched.length !== 0
                                ? state.searched
                                : state.ingredients
                        }
                        removeIngredient={(item) =>
                            dispatch({ type: "REMOVE_INGREDIENT", item })
                        }
                        sendSelection={(item) =>
                            dispatch({ type: "SEND_SELECTION", item })
                        }
                    />
                ) : (
                    <RecipeArea ingredients={state.selected} />
                )}
            </div>
        </div>
    );
}

export default App;
