import React from 'react';
import './Button.css';

export class Button extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const bgColor = this.props.backgroundColor;
        return (
            <div>
                <button style={{backgroundColor: bgColor}} class="button-56" role="button">{this.props.content}</button>
            </div>
        )
    }
}