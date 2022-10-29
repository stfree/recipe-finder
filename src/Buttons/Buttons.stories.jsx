import React from "react";
import Buttons from "./Buttons";

export default {
    title: "Buttons",
    component: Buttons,
    argTypes: {
        toggleView: { action: "toggled" },
        updateIngredients: { action: "update ingredients" },
        filterIngredients: { action: "filter ingredients" },
    },
};
const Template = (args) => <Buttons {...args} />;
export const Main = Template.bind({});
