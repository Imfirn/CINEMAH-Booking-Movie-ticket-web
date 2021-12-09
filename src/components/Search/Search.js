// import React, { useState, useEffect, useRef } from "react";
// import * as FaIcons from "react-icons/fa";
// import { IconContext } from "react-icons";
// // import './Search.css'

// const SearchBar = ({setSearchTerm}) => {
//     const [state, setState] = useState('');
//     const inital = useRef(true);

//     useEffect(() => {
//         if (inital.current){
//             inital.current = false;
//             return;
//         }

//         const timer = setTimeout(() => {
//             setSearchTerm(state);
//         },500)

//         return () => clearTimeout(timer)
//     },[setSearchTerm, state])

//     return(
//         <div className='Wrapper'>
//             <div className='Content'>
//                 <IconContext.Provider value={{ className: "search-icons" }}>
//                     <FaIcons.FaSearch className="icon" />
//                 </IconContext.Provider>
//                 <input 
//                     type='text' 
//                     className="input"
//                     placeholder='Serch Movie' 
//                     onChange={event => setState(event.currentTarget.value)}
//                     value={state}
//                 />
//             </div>
//         </div>
//     );
// };

// export default SearchBar; 