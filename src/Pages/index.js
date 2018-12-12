import withSplitting from "../HOC/withSplitting";

export const Main = withSplitting(() => import('./MainPage'));
export const Login = withSplitting(() => import('./LoginPage'));
export const Join = withSplitting(() => import('./JoinPage'));
export const Order = withSplitting(() => import('./MyOrderPage'));
export const Profile = withSplitting(() => import('./ProfilePage'));
export const Detail = withSplitting(() => import('./RestaurantDetailPage'));
export const List = withSplitting(() => import('./ListPage'));
export const Cart = withSplitting(() => import('./CartPage'));
export const Pay = withSplitting(() => import('./PayPage'));
export const Result = withSplitting(() => import('./ResultPage'));
export const Search = withSplitting(() => import('./SearchPage'));