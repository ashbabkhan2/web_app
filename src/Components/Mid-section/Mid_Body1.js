import React from 'react';
import Mid_Body_2 from './Mid_Body2';
import Mid_Body_3 from './Mid_Body_3';
import './Mid_section.css';
const Mid_Body1 = () =>{
    return(
        <React.Fragment>
        <div className='mid-body-1'>
            <h1 className='main-header'>Build Better Products</h1>
            <h1 className='sub-header'>Powerful, self-serve product analytics to help you convert, engage, and retain more users.
            </h1>
            <div className='buttons'>
                <a href='#' className='watch'>Watch Demo</a>
                <a href='#' className='sign'>Sign Up</a>
            </div>
        </div>
        <div className='image'>
        <img src='https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
        </div>
        <Mid_Body_2 />
        <Mid_Body_3 /> 

        </React.Fragment>
    );
}
export default Mid_Body1;