import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import SignupForm from './components/SignupForm';
import Routes from './routes';
import './App.css'
import { Route } from 'react-router-dom';



function App() {
 // const [searchTerm, setSearchTerm] = useState('');
  //const containerRef = useRef();

  /*useEffect(() => {
    console.log('useEffect')
  }, [searchTerm]);*/

 // const handleNavbarSearch = (term) => {
    //console.log(containerRef.current);
    //console.log(containerRef.current.setSearch(''));
 //   console.log(containerRef.current.getterSomething);
  //  setSearchTerm(term);
  //};


  //console.log(searchTerm, 10);
 

 //return (
   // <>
    // <Navbar onSearch={handleNavbarSearch} ref={containerRef}/>
    // <Events searchTerm={searchTerm}/>
    // {/*<SignupForm/>*/}
   // </>
 // )

 return <Routes/>;
}

export default App
