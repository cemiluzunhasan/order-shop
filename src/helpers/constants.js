import moment from 'moment';

export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'HH:mm';
export const DATE_TIME_FORMAT = 'DD/MM/YYYY - HH:mm';


export const ORDERS = [
  {
    id: 1,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
  {
    id: 2,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
  {
    id: 3,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
  {
    id: 4,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
  {
    id: 5,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
  {
    id: 6,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
  {
    id: 7,
    tableName: 'Table #001',
    date: moment().format(DATE_TIME_FORMAT),
    orderName: 'Order #3201',
    products: [
      { id: 1, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 2, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
      { id: 3, name: 'Vegetable Mix', notes: 'No Onion', quantity: '2' },
    ]
  },
]