const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddleware //Use the authMiddleware in the construct of Apollo server
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cors = require('cors')
app.use(cors())

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51IB2FYDWlFXjkhsbjkzqTRKrbh9B69KDfMtE5g30PQhOmNFIF1drpzHcFeEj6aaSddWpfHLiuQOvGlVSPv9H9Dhk00tZTGEgAA');

app.post('/create-checkout-session', async (req, res) => {

  let { amount } = req.body 
  amount *= 100

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation',
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// NEW

app.use(express.static(path.join(__dirname, '../client/build')));


db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
   })
 })
