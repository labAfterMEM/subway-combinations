declare type Data = {
  name: string,
  link: string,
  size ?: Size[],
  category ?: string,
  price ?: number,
  carbohydrate ?: number,
  kcal ?: number
};
declare type Size = {
  name ?: string,
  price ?: number,
  carbohydrate ?: number,
  kcal ?: number
};