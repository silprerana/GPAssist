import React from 'react';
import {Button} from './Elements/Button.js';
import {Country} from './Country.js'
import './Gpa_usa.css'
import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";

export class Gpa_usa extends React.Component {
    constructor (props) {
        super(props);
        this.add_subject = this.add_subject.bind(this);
        this.no_more_subjects = this.no_more_subjects.bind(this);
        this.subjects = [];
        // this.no_more_subject = false;
        this.state = {
            no_more_subject: false
        }
    }

    add_subject (e)  {
        e.preventDefault();
        let s_name = this.s_name.value;
        e.target.value = "";
        let s_grade = this.s_grade.value;
        let s_credits = this.s_credits.value;
        this.subjects.push([s_name, s_grade, s_credits]);
        console.log(this.subjects);
    }

    no_more_subjects () {
        this.state.no_more_subject = true;
        console.log("No more subjects pressed");
        console.log(this.no_more_subjects)
    }

    render () {
        if (this.state.no_more_subjects != true) {
        return (
            
            <div>
                <div className='gpa-usa-title'>Enter a Subject</div>
                <div className='form-element'>
                    <label className='label'>Subject Name: </label>
                    <input className='input' ref={(c) => this.s_name = c} name/><br />
                </div>
                
                <div className='form-element'>
                    <label className='label'>Subject Grade: </label>
                    <input className='input' ref={(c) => this.s_grade = c} name/><br />
                </div>
                
                <div className='form-element'>
                    <label className='label'>Subject Credits: </label>
                    <input className='input' ref={(c) => this.s_credits = c} name/>
                </div>

                <div className='subject-buttons'>
                    <div onClick={this.add_subject}><Button backgroundColor='#96E072' content='Add Subject'/></div>
                    <div onClick={this.no_more_subjects}><Button backgroundColor='#FF686B' content='No More Subjects?'/></div>
                </div>
            </div>
        ) } else {
            return (
                <div>Wassup, this is after there are no more subjects</div>
            )
        }

        
    }  
}  