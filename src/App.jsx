import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const GoodDetail = lazy(() => import('./pages/GoodDetail/GoodDetail'));
const Delivery = lazy(() => import('./pages/Delivery/Delivery'));
const Payment = lazy(() => import('./pages/Payment/Payment'));
const Policy = lazy(() => import('./pages/Policy/Policy'));
const Refund = lazy(() => import('./pages/Refund/Refund'));
const AboutPaymentAndDelivery = lazy(() =>
  import('./pages/AboutPaymentAndDelivery/AboutPaymentAndDelivery'),
);
const Description = lazy(() => import('./components/Description/Description'));
const AdditionalInfo = lazy(() =>
  import('./components/AdditionalInfo/AdditionalInfo'),
);
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="payment" element={<Payment />} />
        <Route path="policy" element={<Policy />} />
        <Route path="refund" element={<Refund />} />
        <Route path="aboutPayment" element={<AboutPaymentAndDelivery />} />

        <Route path=":goodId" element={<GoodDetail />}>
          <Route path="description" element={<Description />} />
          <Route path="additional" element={<AdditionalInfo />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
