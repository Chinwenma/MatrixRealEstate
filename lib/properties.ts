export type Property = {
id: string
title: string
location: string
price: number
beds: number
baths: number
area: number
image: string
featured?: boolean
}


export const properties: Property[] = [
{
id: 'p1',
title: 'Modern 3-Bedroom Home',
location: 'Victoria Island, Lagos',
price: 35000000,
beds: 3,
baths: 2,
area: 1800,
image:
'/assets/house.jpg',
featured: true,
},
{
id: 'p2',
title: 'Luxury Apartment with Sea View',
location: 'Lekki Phase 1, Lagos',
price: 78000000,
beds: 4,
baths: 4,
area: 3000,
image:
'/assets/house1.jpg',
},
{
id: 'p3',
title: 'Cozy Studio in the City Centre',
location: 'Ikeja, Lagos',
price: 6500000,
beds: 1,
baths: 1,
area: 420,
image:
'/assets/house.jpg',
},
]