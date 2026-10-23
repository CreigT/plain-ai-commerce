// Vercel serverless function - returns public config from env vars
export default function handler(req, res) {
  const products = [
    {
      name: process.env.PRODUCT_1_NAME || 'Starter Pack',
      price: process.env.PRODUCT_1_PRICE || '29',
      link: process.env.PRODUCT_1_LINK || '#'
    },
    {
      name: process.env.PRODUCT_2_NAME || 'Growth Bundle',
      price: process.env.PRODUCT_2_PRICE || '79',
      link: process.env.PRODUCT_2_LINK || '#'
    },
    {
      name: process.env.PRODUCT_3_NAME || 'Pro Suite',
      price: process.env.PRODUCT_3_PRICE || '149',
      link: process.env.PRODUCT_3_LINK || '#'
    }
  ];

  const member = {
    name: process.env.MEMBER_NAME || 'AI Library Membership',
    price: process.env.MEMBER_PRICE || '9',
    link: process.env.MEMBER_LINK || '#'
  };

  res.status(200).json({
    appName: process.env.APP_NAME || 'Plain AI Commerce',
    supportEmail: process.env.SUPPORT_EMAIL || 'hello@example.com',
    products,
    member
  });
}
