import images from './images';

const wines = [
  {
    title: 'Sula Rasa Shiraz',
    price: '₹4,500',
    tags: 'IN | Bottle',
  },
  {
    title: 'Grover La Réserve',
    price: '₹3,800',
    tags: 'IN | Bottle',
  },
  {
    title: 'Fratelli Sette',
    price: '₹5,200',
    tags: 'IN | 750 ml',
  },
  {
    title: 'York Arros',
    price: '₹2,900',
    tags: 'IN | 750 ml',
  },
  {
    title: 'KRSMA Cabernet Sauvignon',
    price: '₹6,000',
    tags: 'IN | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Masala Mojito',
    price: '₹450',
    tags: 'Mint | Lemon | Soda | Indian spices',
  },
  {
    title: 'Mumbai Mule',
    price: '₹520',
    tags: 'Vodka | Ginger beer | Lime | Mint',
  },
  {
    title: 'Goan Sunset',
    price: '₹600',
    tags: 'White rum | Orange juice | Grenadine',
  },
  {
    title: 'Royal Old Fashioned',
    price: '₹750',
    tags: 'Indian whisky | Brown sugar | Bitters',
  },
  {
    title: 'Spiced Negroni',
    price: '₹680',
    tags: 'Gin | Vermouth | Campari | Orange peel',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Fine Dining',
    subtitle: 'Awarded for excellence in Indian hospitality.',
  },
  {
    imgUrl: images.award01,
    title: 'Top Chef Award',
    subtitle: 'Recognized for authentic Indian cuisine.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitality Excellence',
    subtitle: 'Outstanding customer service and dining experience.',
  },
  {
    imgUrl: images.award03,
    title: 'Luxury Restaurant Award',
    subtitle: 'Celebrating premium food and ambience.',
  },
];

export default { wines, cocktails, awards };