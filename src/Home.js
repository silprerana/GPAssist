import React from 'react';
import {Button} from './Elements/Button.js';
import './Home.css'
import { Country } from './Country.js';
import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";

export class Home extends React.Component {
    render () {
        return (
            <div>

                <div className='title'>GPAssist</div> 
                <h3 className='body'>The Ultimate Grade Matcher</h3>

                <div class='button'>
                
                    <Link to="/country"><Button backgroundColor="#FFF75E" content="Get Started"/></Link>
                </div>

                <Routes>
                    <Route path="/country" exact element={<Country />} />
                </Routes>
            </div>
        )
    }
}