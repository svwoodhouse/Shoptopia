import { useState } from 'react';
import { Badge } from '@mui/material';
import searchImage from '../assets/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import {ShoppingCartOutlined, StoreOutlined} from '@mui/icons-material';

import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const {cart} = useSelector((state: any) => state)
    const navigate = useNavigate()
    
    return (
        <div className="header-container">
            <div className="header-right-section" onClick={()=> navigate('/')}>
                <StoreOutlined className='company-logo'/>
            </div>
            <div className='header-middle-section'>
                <form className='search-bar-form'>
                    <input
                        className='search-bar' 
                        type='text' 
                        value={searchInput}
                        placeholder='Search'
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <input className="search-button" type='image' src={searchImage} alt='Search' width={48} height={48}></input>
                </form>
            </div>
            <div className='header-left-section' onClick={()=> navigate('/checkout')}>
                <Badge color="secondary" badgeContent={cart.cartNumber}>
                    <ShoppingCartOutlined color="action" />
                </Badge>
            </div>
        </div>
    )
}
export default Header;