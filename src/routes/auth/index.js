
const auth = [
  {
    path: '/',
    exact: true,
    redirect: '/auth/signin'
  },
  {
    path: '/auth/signin',
    name: 'SignIn',
    component: require('views/Auth/SignIn').default
  },
];

export default auth;