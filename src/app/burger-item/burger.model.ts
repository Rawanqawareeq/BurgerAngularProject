export interface Burger{
    "id": number,
    "name": string,
    "path": string,
    "price":number,
}

export interface Ingredients{
    "beef": number,
     "tomato": number,
     "lettuce": number,
     "leaf":number,
     "cheese":number,
     "mushroom":number,
     "onion": number,
}
export enum types {
   "beef",
     "tomato",
     "lettuce",
     "leaf",
     "cheese",
     "mushroom",
     "onion",
}