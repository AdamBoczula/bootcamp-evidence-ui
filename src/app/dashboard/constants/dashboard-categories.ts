import {
  DashboardCategory,
  Subcategory,
} from '../models/dashboard-category.type';

export const DASHBOARD_CATEGORIES_LIST: DashboardCategory[] = [
  { id: '1', title: 'Home', color: '#85985f', icon: 'home' },
  { id: '2', title: 'Groceries', color: '#103dbc', icon: 'shopping_cart' },
  { id: '3', title: 'Sport', color: '#6a9a7c', icon: 'fitness_center' },
  { id: '4', title: 'Investment', color: '#0dfb', icon: 'euro' },
  {
    id: '5',
    title: 'Remodeling',
    color: '#2ddabd',
    icon: 'imagesearch_roller',
  },
  { id: '6', title: 'Holiday', color: '#823', icon: 'flight' },
  { id: '7', title: 'Pets', color: '#103945', icon: 'pets' },
  { id: '8', title: 'Garden', color: '#459321', icon: 'local_florist' },
  { id: '9', title: 'Restaurants', color: '#881', icon: 'restaurant' },
  { id: '10', title: 'Devices', color: '#90d', icon: 'headset_mic' },
];

// {} - Object
// { [key: string]: Subcategory[] }
// export const SUBCATEGORIES: { [key: string]: Subcategory[] } = {

export const SUBCATEGORIES: Record<string, Subcategory[]> = {
  '1': [
    { id: '11', name: 'accessories' },
    { id: '12', name: 'insurance' },
    { id: '13', name: 'decoration' },
  ],
  '6': [
    { id: '61', name: 'hotel' },
    { id: '62', name: 'tickets' },
    { id: '63', name: 'food' },
    { id: '64', name: 'souvenir' },
  ],
  '10': [
    { id: '101', name: 'music' },
    { id: ' 102', name: 'games' },
  ],
};
