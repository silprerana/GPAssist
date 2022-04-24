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
        this.gpa_result = this.gpa_result.bind(this);
        this.grades = []
        this.credits = [];
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
        this.forceUpdate(); 
    }

    gpa_result () {
        let total_credits = 0;
        let total_grade_points = 0;
        for (let i = 0; i < this.credits.length; i++) {
            total_credits += parseInt(this.credits[i]);
        }

        for (let i = 0; i < this.credits.length; i++) {
            let grade_point = this.grade_points_obj[this.grades[i]];
            total_grade_points += this.credits[i]*grade_point;
        }

        console.log("GPA: " + (total_grade_points/total_credits).toFixed(3));
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
                    <h1>Score</h1>
                </div>
                <div className='score-info'>
                    <h1>GPA</h1>
                    <h3>Show GPA Here</h3>
                    <h3>Total Credits: </h3>
                    <h3>Total Grade Points: </h3>
                </div>
            </div>
        )
        
    }  
}  