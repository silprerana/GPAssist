import React from 'react';
import {Button} from './Elements/Button.js';
import {Country} from './Country.js'
import './Gpa_usa.css'
import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";
import fireworks from './res/fireworks.png';
import fireworks_flip from './res/fireworks_flip.png';

export class Gpa_usa extends React.Component {
    constructor (props) {
        super(props);
        this.add_subject = this.add_subject.bind(this);
        this.no_more_subjects = this.no_more_subjects.bind(this);
        this.gpa_result = this.gpa_result.bind(this);
        this.grades = []
        this.credits = [];
        this.total_credits = 0;
        this.total_grade_points = 0;
        this.gpa = 0;
        this.grade_points_obj = {
            'A+': 4.3,
            'A': 4,
            'A-': 3.7,
            'B+': 3.3,
            'B': 3,
            'B-': 2.7,
            'C+': 2.3,
            'C': 2,
            'C-': 1.7,
            'D+': 1.3,
            'D': 1,
            'D-': 0.7,
            'F': 0,
        };
        this.state = {
            no_more_subject: false
        }
    }
    // added a comment
    add_subject (e)  {
        e.preventDefault();
        e.target.value = "";
        let s_grade = this.s_grade.value;
        let s_credits = this.s_credits.value;
        this.grades.push(s_grade);
        this.credits.push(s_credits);
        console.log(this.grades);
        console.log(this.credits);
    }

    no_more_subjects () {
        this.state.no_more_subject = true;
        console.log(this.state.no_more_subject)
        this.gpa_result();
        this.forceUpdate(); 
    }

    gpa_result () {
        
        for (let i = 0; i < this.credits.length; i++) {
            this.total_credits += parseInt(this.credits[i]);
        }

        for (let i = 0; i < this.credits.length; i++) {
            let grade_point = this.grade_points_obj[this.grades[i]];
            this.total_grade_points += this.credits[i]*grade_point;
        }

        this.total_grade_points = this.total_grade_points.toFixed(2);

        this.gpa = (this.total_grade_points/this.total_credits).toFixed(3);
    }

    render () {
        return (
            !this.state.no_more_subject ? 
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
                    <div onClick={this.no_more_subjects}><Button backgroundColor='#FF686B' content='Done'/></div>
                </div>
            </div> :
            <div className='vertical-flex-score'>
                <div className='score-heading'>
                    <h1 id='score-title'>Score</h1>
                </div>
                <div className='score-info'>
                    <div className='banner'>
                        <img src={fireworks_flip}/>
                        <h1 className='gpa-title'>GPA</h1>
                        <img src={fireworks}/>
                    </div>
                    
                    <h3 className='gpa'>{this.gpa}</h3>
                    <h3 className='totals'>Total Credits: {this.total_credits}</h3>
                    <h3 className='totals'>Total Grade Points: {this.total_grade_points}</h3>
                </div>
            </div>
        )
        
    }  
}  