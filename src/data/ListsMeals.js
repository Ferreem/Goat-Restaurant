import chickenwing from '../data/foodImages/chickenwing.jpg';
import chickenTortilla from '../data/foodImages/chickenTortilla.jpeg';
import cheezyChickenTortilla from '../data/foodImages/cheezyChickenTortilla.webp';
import chickenstrips from '../data/foodImages/chickenstrips.jpg';
import beefTortilla from '../data/foodImages/beefTortilla.jpg';
import friesThick from '../data/foodImages/friesThick.webp';
import friesThin from '../data/foodImages/friesThin.jpg';
import friesSweet from '../data/foodImages/friesSweetPotato.jpg';
import lambTortilla from '../data/foodImages/lambTortilla.jpg';
import chickenleg from '../data/foodImages/chickenleg.jpg'

const RecomendedList = [
    {
        id: 'rec1',
        name: 'Chicken legs',
        img: chickenleg,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 6.59,
    },
    {
        id: 'rec2',
        name: 'Chicken wings',
        img: chickenwing,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 6.59,
    },
    {
        id: 'rec3',
        name: 'Fries homemade style',
        img: friesThick,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 3.89,
    },
    {
        id: 'rec4',
        name: 'Tortilla chicken',
        img: chickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 7.29,
    },
    {
        id: 'rec5',
        name: 'Tortilla cheese chicken',
        img: cheezyChickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 8.49,
    },
    {
        id: 'rec6',
        name: 'Chicken strips',
        img: chickenstrips,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 5.69,
    },
    {
        id: 'rec7',
        name: 'Tortilla beef',
        img: beefTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 9.19,
    },
]

const friesList = [
    {
        id: 'fries1',
        name: 'Thin Fries',
        img: friesThin,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 3.29,
    },
    {
        id: 'fries2',
        name: 'Sweet Fries',
        img: friesSweet,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 6.59,
    },
    {
        id: 'fries3',
        name: 'homemade style Fries',
        img: friesThick,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 3.89,
    },
]

const chickenList = [
    {
        id: 'chicken1',
        name: 'Chicken legs',
        img: chickenwing,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 6.59,
    },
    {
        id: 'chicken2',
        name: 'Tortilla chicken',
        img: chickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 7.29,
    },
    {
        id: 'chicken3',
        name: 'Tortilla cheese chicken',
        img: cheezyChickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 8.49,
    },
    {
        id: 'chicken4',
        name: 'Tortilla cheese chicken',
        img: cheezyChickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 8.49,
    },
    {
        id: 'chicken5',
        name: 'Chicken strips',
        img: chickenstrips,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 5.69,
    },
]

const tortillaList = [
    {
        id: 'tortilla1',
        name: 'Tortilla chicken',
        img: chickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 7.29,
    },
    {
        id: 'tortilla2',
        name: 'Tortilla cheese chicken',
        img: cheezyChickenTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 8.49,
    },
    {
        id: 'tortilla3',
        name: 'Tortilla beef',
        img: beefTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 9.19,
    },
    {
        id: 'tortilla4',
        name: 'Tortilla lamb',
        img: lambTortilla,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 9.49,
    },
]

export {RecomendedList ,friesList, chickenList, tortillaList}