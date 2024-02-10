import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error:', error);
    console.error('Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Hold On !!!!There is an Error </div>;
    }

    return this.props.children;
  }
}

const title = 'My Food App';
const activeCategory = 1;
const foodItems = [
  {
    title: 'Pizza',
    image: 'https://example.com/pizza.jpg',
    prepTimeValue: '30',
    prepTimeUnit: 'mins',
    rating: '4.5',
    cat1: 'Italian',
    cat2: 'Cheese',
    range: '10 miles',
    price: 12.99
  },
  {
    title: 'Burger',
    image: 'https://example.com/burger.jpg',
    prepTimeValue: '20',
    prepTimeUnit: 'mins',
    rating: '4.2',
    cat1: 'American',
    cat2: 'Beef',
    range: '5 miles',
    price: 8.99
  }
];

const categories = [
  {
    id: 1,
    icon: 'https://example.com/icon1.jpg',
    text: 'Category 1'
  },
  {
    id: 2,
    icon: 'https://example.com/icon2.jpg',
    text: 'Category 2'
  }
];

const cartItems = [
  {
    title: 'Pizza',
    quantity: 2,
    price: 12.99
  },
  {
    title: 'Burger',
    quantity: 1,
    price: 8.99
  }
];

function App() {
  return (
    <ErrorBoundary>
      <div className="flex" v-cloak id="dribbleShot">
        <div className="main px-16 border-r border-gray-200">
          <div className="h-12 mt-8 flex items-center">
            <i className="fa fa-bars cursor-pointer"></i>
            <h6 className="font-bold text-lg mx-10">{title}</h6>
            <div className="flex items-center ml-auto bg-gray-100 self-stretch custom-rounded px-4 w-2/3">
              <i className="fa fa-search"></i>
              <input type="text" className="px-4 self-stretch bg-transparent flex-grow outline-none" placeholder="Search" />
            </div>
          </div>
          <div className="grid grid-cols-3 bg-orange-100 mt-12 rounded-lg">
            <div>
              <img src="https://image.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg" alt="fooood" className="self-end" />
            </div>
            <div className="row-auto flex flex-col justify-center items-center">
              <h3 className="tracking-wide text-orange-600 text-lg ml-6">$0 delivery for 15 days!&nbsp;&nbsp;&nbsp;🎉</h3>
              <h5 className="text-xs text-gray-500">$0 delivery fee for orders over $10 for 30 days</h5>
            </div>
            <div className="flex justify-end items-end pb-4 pr-4">
              <a className="font-hairline text-orange-500" href="">Learn More <i className="ml-3 fa fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="flex mt-12 items-end">
            <h3 className="text-xl font-bold">Restaurants</h3>
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/hamburger_1f354.png" className="mx-4 h-8 w-8" alt="" />
            <button className="ml-auto rounded-full p-2 bg-orange-600 hover:bg-orange-500 hover:shadow-lg text-white cursor-pointer text-sm">
              <i className="fa fa-clock mx-2"></i>
              <span className="font-hairline">Delivery: </span><span>Now</span>
              <i className="fa fa-chevron-down mx-2"></i>
            </button>
          </div>
          <div className="grid grid-cols-9 gap-6 mt-12">
            {categories.map((cat, idx) => (
            <div key={idx} className={`border rounded-full p-2 flex flex-col items-center shadow-xl cursor-pointer transition-colors duration-700 ease-in-out ${cat.id == activeCategory ? 'bg-yellow-400' : ''}`}>
            <div className="border rounded-full p-2 bg-white">
              <img className="h-12 w-12" src={cat.icon} alt="" />
            </div>
            <p className="mt-3 mb-10 font-bold  text-xs">{cat.text}</p>
          </div>
            ))}
            <button className="h-10 rounded-lg self-center hover:shadow-xl flex justify-center items-center bg-gray-100 p-3 ml-auto"><i className="fa fa-chevron-right"></i></button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-10">
            {foodItems.map((food, idx) => (
              <div key={idx} className="flex flex-col" v-for="food in foodItems">
                <div className="shadow-lg relative h-40 custom-rounded" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , backgroundImage: `url(${food.image})` }}>
                  <div className="absolute bottom-0 left-0 w-1/3 bg-gray-200 rounded-tr-lg p-2 text-center text-xs"><span className="font-bold">{food.prepTimeValue}</span> {food.prepTimeUnit}</div>
                </div>
                <p className="mt-4 font-medium">{food.title}</p>
                <div className="mt-2 flex items-center">
                  <span className="text-xs"><i className="fa fa-star"></i> {food.rating}</span>
                  <span className="text-gray-600 font-hairline text-xs mx-4">{food.cat1}</span>
                  <span className="text-gray-600 font-hairline text-xs mx-4">{food.cat2}</span>
                  <span className="text-gray-600 font-hairline text-xs mx-4">{food.range}</span>
                </div>
              </div>
              ))}
          </div>
        </div>
        <div className="bg-gray-100 sidebar flex flex-col">
          <div className="px-6">
            <div className="h-12 mt-8 flex justify-end items-center">
              <i className="fa fa-user"></i>
              <div className="rounded-lg bg-yellow-400 px-3 font-bold text-xs py-1 ml-6">3</div>
            </div>
            <div className="mt-12">
              <p className="font-medium text-xl">My Order 😎</p>
            </div>
            <div className="mt-12 p-6 bg-purple-800 custom-rounded font-hairline text-xs">
              <div className="flex justify-between items-center">
                <p className="text-white">625 St Marks Ave</p>
                <p className="text-yellow-400 cursor-pointer">Edit</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="rounded-lg px-2 py-1 timer"><i className="fa fa-clock text-yellow-400"></i></div>
                <p className="text-white mx-3">35 min</p>
                <p className="text-yellow-400 cursor-pointer ml-auto">Choose time</p>
              </div>
            </div>
            {cartItems.map((item, index) => (
       <div key={index} className={"grid grid-cols-4 gap-1 mb-5 " + (index == 0 ? "mt-12" : "")}>
                <div className="h-10 rounded-lg" style="{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , backgroundImage: 'url(\'' + foodItems.image + '\')' }"></div>
                <div className="col-span-2 grid grid-cols-3 text-xxs font-semibold ">
                  <p className="col-span-2 flex justify-center items-center">{item.quantity} <span className="ml-1">x</span></p>
                  <p className="col-span-2 flex items-center">{item.title}</p>
                </div>
                <div className="flex justify-end items-center text-gray-600 font-hairline text-xs">
                  ${item.price}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-4 gap-1 mb-5">
              <div className="h-10 rounded-lg" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , backgroundImage: `url(${foodItems.image})` }}>
                <i className="fa fa-car m-auto text-orange-500"></i>
               </div>
              <div className="col-span-2 grid grid-cols-3 text-xxs font-semibold ">
                <p className="col-span-2 flex justify-center items-center">Delivery</p>
                <p className="flex items-center"></p>
              </div>
              <div className="flex justify-end items-center text-gray-600 font-hairline text-xs">
                $0.00
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col pl-6 justify-end">
            <div className="flex justify-between items-center border-b-2 pb-2">
              <span>Total:</span>
              <span className="text-xl font-medium pr-6">${cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</span>
            </div>
            <div className="flex justify-between pt-4 text-xs font-bold">
              <div className="flex flex-col">
                <span>Persons</span>
                <div className="flex items-center mt-3">
                  <span className="border border-r-0 p-2 rounded-l-lg">-</span>
                  <span className="border-b border-t p-2 ">1</span>
                  <span className="border border-l-0 p-2 rounded-r-lg">+</span>
                </div>
                </div>
              <div className="ml-auto bg-yellow-400 p-6 rounded-l-lg">
                  Checkout <i className="ml-3 fa fa-arrow-right" /></div>
            </div>
        </div>
        </div>
      </div>
      </ErrorBoundary>
  )
}

export default App;