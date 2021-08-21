
const dashboard = [
  {
    path: '/',
    name: 'Home',
    component: require(`views/Dashboard`).default,
    exact: true,
    redirect: '/active-orders'
  },
  {
    path: '/active-orders',
    name: 'Active Orders',
    component: require('views/Dashboard/ActiveOrders').default
  }
];

export default dashboard;