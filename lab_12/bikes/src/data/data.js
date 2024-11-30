export const carsData = [
  {
    id: 1,
    name: 'Tesla Model 3 Standard Range Plus',
    price: '56690',
    location: 'Florida, USA',
    year: 2020,
    drive: 'Rear-wheel Drive',
    fuel: 'Electric',
    transmission: 'Automatic',
    mileage: 15000,
    reviews: 12,
    description: 'This Tesla Model 3 offers a remarkable driving experience with cutting-edge technology and impressive range.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPExsqcuJoGDKCo_gJPoCj8e_CaANOGHJG3w&s',
  },
  {
    id: 2,
    name: 'Ford F-250 Super Duty',
    price: '82098',
    location: 'Milan, Italy',
    year: 2021,
    drive: 'Four-wheel Drive',
    fuel: 'Diesel',
    transmission: 'Manual',
    mileage: 22000,
    reviews: 12,
    description: 'This Ford F-250 is built for heavy-duty tasks with impressive power and durability.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZyAqFD8UaAe6TPfGTJQScSl0xJu4XER6OA&s',
  },
  {
    id: 3,
    name: 'Honda Pilot Touring 7-Passenger',
    price: '43735',
    location: 'Caracas, Venezuela',
    year: 2021,
    drive: 'All-wheel Drive',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    mileage: 18000,
    reviews: 12,
    description: 'A spacious and reliable Honda Pilot, perfect for family road trips with ample seating.',
    image: 'https://cdn.ebizautos.media/used-2021-honda-pilot-blackeditionawd-14381-21899563-1-640.jpg',
  },
  {
    id: 4,
    name: 'BMW X5 M',
    price: '92800',
    location: 'Berlin, Germany',
    year: 2022,
    drive: 'Four-wheel Drive',
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: 10000,
    reviews: 20,
    description: 'The BMW X5 M combines luxury and performance with a sporty feel and powerful engine.',
    image: 'https://images.prismic.io/carwow/9ec37287-fcc7-45fd-99df-2e6bea3cdbef_LHD+BMW+X5+M+Exterior+2.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750',
  },
  {
    id: 5,
    name: 'Mercedes-Benz G-Class',
    price: '131750',
    location: 'Los Angeles, USA',
    year: 2022,
    drive: 'Four-wheel Drive',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    mileage: 8000,
    reviews: 35,
    description: 'This iconic Mercedes-Benz G-Class offers a luxurious interior with rugged off-road capabilities.',
    image: 'https://www.topgear.com/sites/default/files/2024/05/20-Mercedes-G-Class-review.jpg',
  },
  {
    id: 6,
    name: 'Audi Q7 Premium',
    price: '69900',
    location: 'Munich, Germany',
    year: 2022,
    drive: 'All-wheel Drive',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    mileage: 12000,
    reviews: 15,
    description: 'The Audi Q7 Premium combines a spacious interior with top-notch tech and luxury.',
    image: 'https://audi.kz/userdata/cars/cars_17/image_13/1653392776_885752844_b.jpg',
  },
];


export const options = [
  {
    value: 'year',
    label: 'Year from new to old'
  },
  {
    value: 'year_rev',
    label: 'Year from old to new'
  },
  {
    value: 'price',
    label: 'Price from low to high'
  },
  {
    value: 'price_rev',
    label: 'Price from high to low'
  },
  {
    value: 'name',
    label: 'Name'
  }
]

export const fuelOptions = [
  { value: 'all', label: 'All' },
  { value: 'Gasoline', label: 'Gasoline' },
  { value: 'Diesel', label: 'Diesel' },
  { value: 'Electric', label: 'Electric' }
];