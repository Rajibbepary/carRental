
import NavbarOwner from '../../components/owner/NavbarOwner';
import Sidebar from '../../components/owner/Sidebar';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';

const Layout = () => {

    const {isOwner} = useAppContext()


    useEffect(()=>{
        if(!isOwner){
            console.log('You are not owner')
        }

    },[isOwner])


    return (
        <div className='flex flex-col'>
           <NavbarOwner/> 
           <div className='flex'>
            <Sidebar/>
            <Outlet/>
           </div>
        </div>
    );
};

export default Layout;