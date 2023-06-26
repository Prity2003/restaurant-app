import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './Payment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NMqFwSD2Ne8M750HgeAbdPt7qrbL1UGQofyQtjkcsX69oi50rwQYUyBCngzU1gfmmPSw9abE3MFy25JJSJxZmum00tRQzwte6');

export default function App({paymentSuccess}) {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{sk_test_51NMqFwSD2Ne8M750yEf9wVqT55gmM80Bh1Jq7TDVkNVS5eUoDH2SAVqUqu0a7PGBH9rCrVFp5GYhC5qsXMLrZR3V00WslBEZrB}}',
  // };

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm paymentSuccess={paymentSuccess}/>
    </Elements>
  );
};