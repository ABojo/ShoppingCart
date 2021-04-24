import FireRed from '../img/firered.jpg';
import halo from '../img/halo.png';
import bo2 from '../img/bo2.jpg';
import uniqid from 'uniqid';

const products = [
  { name: 'Pokemon Fire Red', price: 29.99, image: FireRed, id: uniqid() },
  { name: 'Halo Infinite', price: 69.99, image: halo, id: uniqid() },
  { name: 'CoD: Black Ops 2', price: 59.99, image: bo2, id: uniqid() },
];

export default products;
