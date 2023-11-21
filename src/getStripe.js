import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <img
        src="https://img.freepik.com/premium-vector/buy-me-coffee-post-design-template-vector-flat-illustration-web-landing-page_556845-260.jpg?w=200"
        alt="coffee-pic"
      />
      <button>Buy Me a Coffee</button>
    </form>
  );
};

export default CheckoutForm;
