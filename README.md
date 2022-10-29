# Recipe Finder

This example utilises vite for static site generation

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/-TK8rB?referralCode=OH27A5)

## 💁‍♀️ How to use

-   Install dependencies `yarn`
-   Connect to your Railway project `railway link`
-   Start the development server `railway run yarn dev`

## Things to DO

-   collapse other multiple useState into a useReducer
-   creat a custom hook by combinging the useEffect call and whatever useState calls it needs and save it to another module and import it
-   fix the recipe pane UI
    -   fix the UI
    -   Add a conditionally rendered dropdown element to store all the extra recipe info
-   create button to add all the missing items from a recipe pane to the ingredients list
-   improve the search/add UI (disambiguate the states so user can tell what the fuck is going on)
-   maybe add total ingredients number next to search input field
-   maybe add search in recipe pane view
-   add grouping for ingredients view
