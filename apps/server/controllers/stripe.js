import Stripe from "stripe"
import express from "express"

const stripe = new Stripe(process.env.STRIPE)



export const payment = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:5173/success",
      // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
  
    res.send({url: session.url});
  };  