const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR'
});

const formatPrice = (price) => formatter.format(price);

export default formatPrice;