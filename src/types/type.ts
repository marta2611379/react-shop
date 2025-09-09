export type CardSetting = {
  id: number;
  image: string;
  title: string;
  price: number;
  weight: number;
  size: string;
  ingredients: string;
};

export type CartItem = CardSetting & { quantity: number };
