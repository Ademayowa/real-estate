import { ImOffice } from 'react-icons/im';
import { BsHouse } from 'react-icons/bs';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { GiGreenhouse } from 'react-icons/gi';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    page: '/',
  },
  {
    id: 'property',
    title: 'Property',
    page: '/',
  },
];

export const properties = [
  {
    id: 1,
    icon: <BsHouse />,
    title: 'Apartment',
    text: '2000 properties',
  },
  {
    id: 2,
    icon: <ImOffice />,
    title: 'Office',
    text: '800 properties',
  },
  {
    id: 3,
    icon: <GiGreenhouse />,
    title: 'Studio',
    text: '500 properties',
  },
  {
    id: 4,
    icon: <TbBuildingWarehouse />,
    title: 'Store',
    text: '300 properties',
  },
];
