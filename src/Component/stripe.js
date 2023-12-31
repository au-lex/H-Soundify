import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OMN7fG1iUEuOoXncG7gJHmUslRyENz0EntzyaYHolHoPOdcvXT4Q0KsOcDTF4L5o1L3fa7PTMYkBaSI0oa5NhuY00vXmidzUc');

export default stripePromise;