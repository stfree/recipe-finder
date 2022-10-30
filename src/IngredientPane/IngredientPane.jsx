import React, { useReducer } from "react";
import InnerPane from "../InnerPane/InnerPane";
import "./IngredientPane.css";

function countReducer(state, action) {
    switch (action.type) {
        case "TOGGLE":
            return { ...state, open: !state.open };
        case "SELECT":
            action.sendSelection(action.name);
            return { ...state, isSelected: !state.isSelected };
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            if (state.count === 1) {
                action.removeIngredient(action.name);
            } else {
                return { ...state, count: state.count - 1 };
            }
    }
}
function IngredientPane({ name, removeIngredient, sendSelection }) {
    const [state, dispatch] = useReducer(countReducer, {
        count: 1,
        isSelected: false,
        open: false,
    });
    const style = state.isSelected
        ? { backgroundColor: "#9bffd5" }
        : { backgroundColor: "white" };
    return (
        <div className="ingredient-pane" style={style}>
            <div className="ingredient-buttons">
                <div className="left">
                    <button
                        className="gg-shape-circle left-item ingredient-select"
                        onClick={() =>
                            dispatch({ type: "SELECT", sendSelection, name })
                        }
                    ></button>
                    <div className="left-item toggle-notes">{name}</div>
                    <button
                        className="gg-chevron-double-down left-item"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                    ></button>
                </div>
                <div className="right">
                    <button
                        className="gg-chevron-double-left"
                        onClick={() =>
                            dispatch({
                                type: "DECREMENT",
                                removeIngredient,
                                name,
                            })
                        }
                    ></button>
                    <span>{state.count}</span>
                    <button
                        className="gg-chevron-double-right"
                        onClick={() => dispatch({ type: "INCREMENT" })}
                    ></button>
                </div>
            </div>

            {state.open && <InnerPane />}
        </div>
    );
}

export default IngredientPane;
