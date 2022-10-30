import { stateReducer } from "./App";

test("that the stateReducer correctly adds an ingredient", () => {
    expect(
        stateReducer(
            {
                isIngredientView: true,
                ingredients: [],
                searched: [],
                selected: [],
            },
            { type: "UPDATE_INGREDIENTS", newIngredient: "apple" }
        )
    ).toEqual(
        expect.objectContaining({
            ingredients: ["apple"],
        })
    );
});
