import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import React from "react";
import Home from "./Routing/Home";
import Blog from "./Routing/Blog";
import AboutUs from "./Routing/AboutUs";

const App = () => {
  return (
    <div className=" pt-4 mx-auto w-3/5">
      <Router>
        <nav className="bg-blue-100 p-4 py-8 mb-2">
          <ul className="flex gap-4 text-lg font-bold text-blue-600">
            <li>
              <NavLink
                exact
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "m-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                    : "m-2 mb-0"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={(navData) =>
                  navData.isActive
                    ? "m-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                    : "m-2 mb-0"
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={(navData) =>
                  navData.isActive
                    ? "m-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                    : "m-2 mb-0"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// //useReducer hook
// import React, { useReducer } from "react";
// import ArrayEntry from "./ArrayMethodSimulation/ArrayEntry";
// import ArrayList from "./ArrayMethodSimulation/ArrayList";
// import Controls from "./ArrayMethodSimulation/Controls ";

// //reducer fxn //action.payload is the element to be added
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ON_PUSH":// Push a new date object from the payload
//       return [...state, action.payload];
//     case "POP":
//       return state.slice(0, -1); // Pop removes the last date object
//     case "UN_SHIFFT":
//       return [action.payload, ...state]; // Unshift adds at the beginning, a new date object from the payload
//     case "SHIFT":
//       return state.slice(1); // Shift (remove) the first date object
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const initialState = [];

//   const [state, dispatch] = useReducer(reducer, initialState );

//   return (
//     <div className="">
//       <ArrayEntry dates={state} dispatch={dispatch} />
//       <ArrayList dates={state} dispatch={dispatch} />
//       <Controls dates={state} dispatch={dispatch} />
//     </div>
//   );
// };

// export default App;

// //contextAPI App.js code
// import "./App.css";
// import ShowUI from "./ContextAPI/ShowUI";
// import Logic from "./ContextAPI/Logic";
// import {ContextComponent} from "./ContextAPI/ContextComponent";

// function App() {
//   return (
//     <>
//       <div className="flex  h-screen">
//         <div className="w-3/5 h-3/4 mt-10 bg-blue-200 border border-blue-400 mx-auto rounded-md p-4">
//           <ContextComponent>
//             <ShowUI />
//             <Logic />
//           </ContextComponent>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState, createContext } from "react";
// import Header from "./Components3/Header";
// import Content from "./Components3/Content";
// import "./App.css";

// export const MyContext = createContext();
// // const MyContext = createContext();

// function App() {
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const languages = ["English", "German", "French", "Spanish"];

//   return (
//     <div className="bg-orange-100 h-screen">
//       <MyContext.Provider value={{ selectedLanguage, setSelectedLanguage, languages }}
//       >
//         <Header />
//         <Content />
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Profile from "./Pages/Profile";
// import ErrorPage from "./Pages/ErrorPage";

// function App() {
//   return (
//     <Router>
//       <nav className="bg-blue-500 p-4">
//         <Link to="/" className="text-white mr-4">Home</Link>
//         <Link to="/about" className="text-white mr-4">About</Link>
//         <Link to="/profile" className="text-white mr-4">Profile</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/profile/:username" element={<Profile />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//       {/* <div className="p-4 mt-72 bg-gray-200">Footer</div> */}
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// // import { BrowserRouter as Router, Route, Switch, Redirect, useHistory  } from 'react-router-dom';
// // import ColorList from './Components/ColorList';
// // import Color from './Components/Color';
// // import ColorForm from './Components/ColorForm';

// function App() {
//   return (
//     <p> Hello world </p>
//     // <Router>
//     //   <Switch>
//     //     <Route exact path="/colors" component={ColorList} />
//     //     <Route path="/colors/new" component={ColorForm} />
//     //     <Route path="/colors/:color" component={Color} />
//     //     <Redirect from="/colors/*" to="/colors" />
//     //     <Redirect from="*" to="/colors" />
//     //   </Switch>
//     // </Router>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="bg-red-500 font-bold text-white text-2xl">
//     <h1> Hello World </h1>
//     </div>
//   );
// }

// export default App;
