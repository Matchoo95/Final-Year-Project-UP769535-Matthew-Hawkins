import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="jp">{props.jp}</div>
            </div>
            <div className="back">
                <div className="reading">{props.reading}</div>
                <div className="meaning">{props.meaning}</div>
                <div className="en">{props.en}</div>
            </div>
        </div>
    </div>
)

export default Card