import { MenuItem, Location } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Chicken Momo',
    description: 'Juicy minced chicken with Himalayan herbs, wrapped in thin dough and steamed to perfection.',
    price: 12,
    category: 'Steamed',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    popular: true,
  },
  {
    id: '2',
    name: 'Pork Momo',
    description: 'Succulent pork filling seasoned with ginger, garlic, and our secret spice blend.',
    price: 12,
    category: 'Steamed',
    imageUrl: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: '3',
    name: 'Veggie Delight',
    description: 'A crunchy mix of cabbage, carrot, onion, and paneer. A vegetarian favorite.',
    price: 10,
    category: 'Steamed',
    imageUrl: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: '4',
    name: 'Fried Chicken Momo',
    description: 'Our classic chicken momos deep-fried until golden and crispy. Served with spicy red chutney.',
    price: 13,
    category: 'Fried',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    popular: true,
  },
  {
    id: '5',
    name: 'Jhol Momo (Soup)',
    description: 'Steamed momos drowned in a tangy, spicy, and nutty sesame-tomato soup (Achar).',
    price: 14,
    category: 'Specialty',
    imageUrl: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: '6',
    name: 'C-Momo (Chilli)',
    description: 'Fried momos tossed in a spicy, sweet, and tangy chilli sauce with bell peppers and onions.',
    price: 15,
    category: 'Specialty',
    imageUrl: 'https://picsum.photos/400/300?random=6',
  },
  {
    id: '7',
    name: 'Himalayan Fries',
    description: 'Crispy fries tossed in Timur (Szechuan pepper) salt.',
    price: 6,
    category: 'Sides',
    imageUrl: 'https://picsum.photos/400/300?random=7',
  },
];

export const LOCATIONS: Location[] = [
  {
    id: 'l1',
    day: 'Monday',
    time: '11:00 AM - 3:00 PM',
    name: 'Downtown Tech Park',
    address: '100 Innovation Dr, Tech City',
  },
  {
    id: 'l2',
    day: 'Wednesday',
    time: '11:00 AM - 7:00 PM',
    name: 'Central Plaza Market',
    address: '45 Market St, Downtown',
  },
  {
    id: 'l3',
    day: 'Friday',
    time: '5:00 PM - 10:00 PM',
    name: 'The Brewery District',
    address: '88 Hops Lane, Old Town',
  },
  {
    id: 'l4',
    day: 'Saturday',
    time: '12:00 PM - 9:00 PM',
    name: 'Riverfront Park',
    address: '200 River Rd, Riverside',
  },
];
