import faker from 'faker'

// TODO this should be the checkout flow that returns a paymentId
// The value returned simulate the paymentId
export default () => faker.random.alphaNumeric(6)
