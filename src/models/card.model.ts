type Icon = {
  prefix: string,
  suffix: string
};

type Category = {
  icon: Icon,
  name: string,

};
export default interface CardModel {
  fsq_id: string,
  photos: Icon[],
  name: string,
  categories: Category[],
  rating: number,
  location: { address: string },
  hours: {
    display: string
  },
  tel: string,
  website: string,
  geocodes: {
    main: {
      latitude: number,
      longitude: number
    }
  }
}
