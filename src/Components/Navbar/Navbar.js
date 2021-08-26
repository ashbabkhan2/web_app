import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import Hover1 from './Hover1';
import Hover2 from './Hover2';
import './Navbar.css';
import CloseIcon from '@material-ui/icons/Close';
import Hover3 from './Hover3';
const Navbar = () =>{

   const show_modal = () =>{
        let menus = document.getElementsByClassName('menus')[0];
        menus.style.display='block';
   }

   const close_modal = () =>{
       let close = document.getElementsByClassName('menus')[0];
       close.style.display='none';
   }
    return(
        <div className='flows'>
            <div className='menus'>
                <div className='close_icon' onClick={close_modal}><CloseIcon style={{color:'white',fontSize:'27px'}}/></div>
                <ul className='ul3'>
                   <div className='purples'>
                   <li><a className='purple slider_effect' href='#' >Why Webpanel</a></li>
                   <Hover1 /></div>
                   <div className='dark_oranges'>
                   <li><a className='dark_orange slider_effect' href='#'>Solutions</a></li>
                   <Hover2 />
                   </div>
                   <div className='sky_blue'>
                   <li><a className='skyblue slider_effect' href='#'>Resources</a></li>
                    <Hover3 />
                   </div>
                   <li><a className='yellow slider_effect' href='#'>Pricing</a></li>
                                      {/* <LanguageIcon className='slider_effect' style={{color:'white'}} /> */}
                   <li className='line'><p className='l_icon'>|</p></li>
                   <li><a className='slider_effect' href='#'>Contact Sales</a></li>
                   <li><a className='slider_effect' href='#'>Log In</a></li>
                   <li><a href='#' className='sign-up'>Sign Up</a></li>
               </ul>

            </div>
            <div className='Navbar1'>
                <nav>
                <div className='brand'>
                  <img src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_960_720.png' />
                </div>
                <div className='hamburger' onClick={show_modal}>
                   <span className='span1'></span>
                   <span className='span2'></span>
                   <span className='span3'></span>
                </div>
                </nav>
            </div>
        <div className='Navbar'>
           <nav>
               <div className='nav-2'>
               <div className='brand'>
                   <img src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_960_720.png' />                  
               </div>
               <ul className='ul1'>
                   <div className='purples'>
                   <li><a className='purple slider_effect' href='#' >Why Webpanel</a></li>
                   <Hover1 /></div>
                   <div className='dark_oranges'>
                   <li><a className='dark_orange slider_effect' href='#'>Solutions</a></li>
                   <Hover2 />
                   </div>
                   <div className='sky_blue'>
                   <li><a className='skyblue slider_effect' href='#'>Resources</a></li>
                    <Hover3 />
                   </div>
                   <li><a className='yellow slider_effect' href='#'>Pricing</a></li>
               </ul>
               </div>
               <ul className='ul2'>
                   <LanguageIcon className='slider_effect' style={{color:'white'}} />
                   <li className='line'><p className='l_icon'>|</p></li>
                   <li><a className='slider_effect' href='#'>Contact Sales</a></li>
                   <li><a className='slider_effect' href='#'>Log In</a></li>
                   <li><a href='#' className='sign-up'>Sign Up</a></li>
               </ul>
           </nav>
        </div>
        </div>
    );
}

export default Navbar;