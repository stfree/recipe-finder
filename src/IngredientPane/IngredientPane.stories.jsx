import React from "react";
import IngredientPane from "./IngredientPane";

export default {
    title: "IngredientPane",
    component: IngredientPane,
    argTypes: {
        name: {
            defaultValue: "apples",
            description: "Ingredient Name",
            table: {
                type: {
                    summary: "something short",
                    detail: "something really really long",
                },
            },
            control: {
                type: "text",
            },
        },
        removeIngredient: { action: "remove ingredients" },
        sendSelection: { action: "send selected ingredient" },
    },
};
const Template = (args) => <IngredientPane {...args} />;
export const Main = Template.bind({});
