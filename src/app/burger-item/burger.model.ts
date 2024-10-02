export interface Burger{
    "id": number,
    "name": types,
    "path": string,
    "price":number,
}
export interface Ingredients{
    "bread-top":number,
    "bread-bottom":number,
    "beef": number,
     "tomato": number,
     "lettuce": number,
     "leaf":number,
     "cheese":number,
     "mushroom":number,
     "onion": number,
}
export enum types {
    beef = 'beef',
    tomato = 'tomato',
    lettuce = 'lettuce',
    leaf = 'leaf',
    cheese = 'cheese',
    mushroom = 'mushroom',
    onion = 'onion',
 }