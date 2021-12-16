const dev = process.env.NODE_ENV !== 'production';

export const DOMAIN = dev
  ? 'http://localhost:3000'
  : 'https://nevell-portfolio.vercel.app/';
