import React from 'react';
import './Country.css'
import { Button } from './Elements/Button.js';
import { Gpa_usa } from './Gpa_usa';

import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";

export class Country extends React.Component {
    render () {
        return (
            <div>
                <div className='country-title'>Select a Country</div>
                <div className='buttons'>
                    <Link to="/usa"><Button backgroundColor="#FFC8DD" content="USA"/></Link>
                    {/* <Link to="/country/canada"><Button backgroundColor="#FFC8DD" content="Canada"/></Link> */}
                </div>                  
            </div>
        )
    }
}