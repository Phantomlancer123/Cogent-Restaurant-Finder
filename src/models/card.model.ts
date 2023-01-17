type Icon = {
  prefix: string,
  suffix: string
};

type Category = {
  icon: Icon,
  name: string,

};
export default interface CardModel {
  photos: Icon[],
  name: string,
  categories: Category[]
}
