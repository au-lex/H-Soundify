const headphonesList = [
  {
    id: 12,
    name: 'AirPods Pro',
    price: 49.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_a_4_a1zwtv.webp',
    description: 'Experience the next level of audio quality with the AirPods Pro. These premium earbuds deliver immersive sound and feature advanced noise cancellation technology.',
  },
  {
    id: 13,
    name: 'Sony WH-10',
    price: 59.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_b_4_j4o9ly.webp',
    description: 'Step into the world of superior sound with the Sony WH-10 headphones. Enjoy rich bass, clear mids, and crisp highs for an unparalleled listening experience.',
  },
  {
    id: 14,
    name: 'Bose 35 II',
    price: 39.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_a_3_inzztb.webp',
    description: 'Immerse yourself in music with the Bose 35 II headphones. These wireless headphones offer comfort, style, and exceptional noise-canceling capabilities.',
  },
  {
    id: 15,
    name: 'Beats Studio3',
    price: 69.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_b_1_lfafdd.webp',
    description: 'Elevate your audio experience with the Beats Studio3 headphones. Enjoy the perfect balance of clarity, emotion, and bass response for a studio-quality sound.',
  },
  {
    id: 16,
    name: 'Sennheiser less',
    price: 79.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_c_2_xgzivn.webp',
    description: 'Sennheiser less headphones combine cutting-edge technology with sleek design. Experience unparalleled sound quality and comfort for extended listening sessions.',
  },
  {
    id: 17,
    name: 'Beats Solo Pro',
    price: 49.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_b_2_pcjguw.webp',
    description: 'Get ready to be immersed in sound with the Beats Solo Pro headphones. Enjoy a premium audio experience with active noise cancellation and a sleek design.',
  },
  {
    id: 18,
    name: 'Sony WH-C10N',
    price: 59.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_c_1_xgnsry.webp',
    description: 'Sony WH-C10N headphones offer a perfect blend of style and performance. Enjoy wireless freedom and superior sound quality for an elevated listening experience.',
  },
  {
    id: 19,
    name: 'Bose Nois7t5',
    price: 89.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245862/FOOD_APP/HEADPHONE/headphones_a_2_rdmxgj.webp',
    description: 'Bose Nois7t5 headphones are designed for those who demand the best. Immerse yourself in crystal-clear audio and enjoy the comfort of noise-canceling technology.',
  },
  {
    id: 20,
    name: 'Sennheiser S',
    price: 99.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245862/FOOD_APP/HEADPHONE/headphones_c_4_pasbla.webp',
    description: 'Sennheiser S headphones redefine audio excellence. Experience premium sound quality and craftsmanship that elevate your listening experience to new heights.',
  },
  {
    id: 21,
    name: 'Apple EarPods',
    price: 29.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245862/FOOD_APP/HEADPHONE/earphones_a_2_yvsw8v.webp',
    description: 'Apple EarPods deliver a seamless audio experience. Enjoy crisp sound and a comfortable fit for your everyday listening needs.',
  },
  {
    id: 22,
    name: 'JBL Free X',
    price: 59.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245862/FOOD_APP/HEADPHONE/headphones_c_3_pscwv7.webp',
    description: 'JBL Free X headphones provide wireless freedom without compromising on sound quality. Dive into your favorite tunes with these stylish and portable earbuds.',
  },
  {
    id: 23,
    name: 'Galaxy Buds',
    price: 39.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245862/FOOD_APP/HEADPHONE/earphones_a_1_objrug.webp',
    description: 'Galaxy Buds offer a true wireless experience with powerful bass and clear treble. Stay connected and enjoy your music on the go with these sleek earbuds.',
  },
  {
    id: 24,
    name: 'BSoundSport',
    price: 49.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245863/FOOD_APP/HEADPHONE/earphones_c_2_tsgszk.webp',
    description: 'BSoundSport earphones are designed for active individuals who demand high-performance audio. Stay motivated with these comfortable and sweat-resistant earbuds.',
  },
  {
    id: 25,
    name: 'Jabra Elite 75t',
    price: 34.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245863/FOOD_APP/HEADPHONE/earphones_b_2_frp14b.webp',
    description: 'Jabra Elite 75t earbuds combine a compact design with powerful sound. Enjoy a secure fit and customizable controls for an immersive listening experience.',
  },
  {
    id: 26,
    name: 'Beats Power',
    price: 79.99,
    inStock: true,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245863/FOOD_APP/HEADPHONE/headphones_b_3_aeymlf.webp',
    description: 'Beats Power headphones deliver deep bass and dynamic sound. With a sleek design and long battery life, these headphones are perfect for music enthusiasts.',
  },
  {
    id: 27,
    name: 'Anker Score ',
    price: 44.99,
    inStock: false,
    imgUrl: 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245863/FOOD_APP/HEADPHONE/earphones_b_3_ici0wk.webp',
    description: 'Anker Score earphones offer impressive audio quality and a comfortable fit. Ideal for daily use, these earbuds provide clear sound for calls and music.',
  },
  
];

export default headphonesList;
