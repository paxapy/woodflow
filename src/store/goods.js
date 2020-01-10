import { writable } from 'svelte/store';

const initialCategories = [
  {
    title: 'Лодки',
    slug: 'boats'
  },
  {
    title: 'Каноэ',
    slug: 'canoes'
  }
]

const initialGoods = [
  {
    title: 'Лодка',
    slug: 'sun',
    category: 'boats',
    images: [
      'photos/boats/boat4.png',
      'photos/boats/boat2.png',
      'photos/boats/boat1.png',
      'photos/boats/boat3.png',
      'photos/boats/boat7.png',
      'photos/boats/boat6.png',
      'photos/boats/boat8.png',
      'photos/boats/boat5.png',
    ],
    length: 2.9,
    width: 1.2,
    height: 0.4,
    thickness: 7,
    weight: 29,
    capacity: 3,
    price: 90000
  },
  {
    title: 'Лодка 3.88',
    slug: 'long',
    category: 'boats',
    images: ['photos/boats/long1.png', 'photos/boats/long2.png'],
    length: 3.88,
    width: 1.4,
    height: 0.49,
    thickness: 7,
    weight: 45,
    capacity: 4,
    price: 125000
  },
  {
    title: 'Фофан',
    slug: 'fofan',
    category: 'boats',
    images: ['photos/boats/fofan3.png', 'photos/boats/fofan1.png'],
    length: 4.5,
    width: 1.48,
    height: 0.5,
    thickness: 9,
    weight: 60,
    capacity: 5,
    price: 150000
  },
  {
    title: 'Каноэ',
    slug: 'can',
    category: 'canoes',
    images: ['photos/canoes/canlong3.png'],
    length: 2.9,
    width: 0.7,
    height: 0.3,
    thickness: 7,
    weight: 14,
    capacity: 2,
    price: 60000
  },
  {
    title: 'Каноэ 4.8',
    slug: 'canlong',
    category: 'canoes',
    images: ['photos/canoes/canlong4.png', 'photos/canoes/canlong2.png', 'photos/canoes/canlong3.png'],
    length: 4.8,
    width: 0.94,
    height: 0.32,
    thickness: 7,
    weight: 30,
    capacity: 3,
    price: 125000
  }
];

export const allGoods = writable(initialGoods);
export const categories = writable(initialCategories);
export const currentGood = writable(initialGoods[0]);
export const currentCategory = writable('boats');
