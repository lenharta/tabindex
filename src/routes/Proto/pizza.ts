export type PizzaOption = {
  label: string;
  value: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type PizzaOptionCrust = PizzaOption & { category: 'crust' };

export type PizzaOptionSauce = PizzaOption & { category: 'sauce' };

export type PizzaOptionCheese = PizzaOption & { category: 'cheese' };

export type PizzaOptionProtein = PizzaOption & { category: 'protein' };

export type PizzaOptionTopping = PizzaOption & { category: 'topping' };

export type PizzaOptions =
  | PizzaOptionCrust
  | PizzaOptionSauce
  | PizzaOptionCheese
  | PizzaOptionProtein
  | PizzaOptionTopping;

export const DATA_PIZZA_OPTIONS_CRUST: PizzaOptionCrust[] = [];

export const DATA_PIZZA_OPTIONS_SAUCE: PizzaOptionSauce[] = [];

export const DATA_PIZZA_OPTIONS_CHEESE: PizzaOptionCheese[] = [];

export const DATA_PIZZA_OPTIONS_PROTEIN: PizzaOptionProtein[] = [];

export const DATA_PIZZA_OPTIONS_TOPPING: PizzaOptionTopping[] = [];

export const DATA_PIZZA_OPTIONS = [
  ...DATA_PIZZA_OPTIONS_CRUST,
  ...DATA_PIZZA_OPTIONS_SAUCE,
  ...DATA_PIZZA_OPTIONS_CHEESE,
  ...DATA_PIZZA_OPTIONS_PROTEIN,
  ...DATA_PIZZA_OPTIONS_TOPPING,
];
