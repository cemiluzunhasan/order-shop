
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
  },
  {
    path: '/completed-orders',
    name: 'Completed Orders',
    component: require('views/Dashboard/CompletedOrders').default
  },
];

export default dashboard;