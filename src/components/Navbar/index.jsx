import { useState,useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef (({ onSearch }, ref) => {
    /*const {search, setSearch} = useState('');

    const handleInputChange = (evt) => {
        console.log(evt.target.value);
    };*/

    const [search, setSearch] = useState('');
    const containerRef = useRef();

    useEffect(() => {
        console.log('onSearch cambio');
    }, [onSearch]);

    useEffect(() => {
        console.log('componente listo');
    }, []);

    useEffect(() => {
        console.log('search cambio');
    }, [search]);

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }))

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    //console.log(search);

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };

    console.log(containerRef);

    //const flex = 'flex';

   return (
    <div ref={ref} style={{
        marginBottom: 14,
        width: '100%',
        display: 'flex',
    }}>
        <div style={{ flex: 1, display: 'flex' }}>
            <p style={{
                fontSize: 18,
                fontWeight: 'bold',
            }}>Mi boletera</p>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <input 
             placeholder="Busca tu evento favorito" 
             onChange={handleInputChange} 
             onKeyDown={handleInputKeyDown}
             value={search}
             style={{
                fontSize: 16,
                padding: '6px 12px',
                borderRadius: 4,
                border: 'none',
                width: 200,
             }}
            />
            <Link to='/profile/my-info' style={{
                marginLeft: 24,
                color: "gray",
                textDecoration: 'none',

            }}>Mi Perfil</Link>
        </div>
    </div>
   );
});

Navbar.displayName = 'Navbar';

export default Navbar;