import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import './card.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NasaCard = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    function setDate(newDate) {
        setStartDate(newDate, () => { // Had to use call back useEffect wasn't working.
            props.formatDate(startDate);
        });


    }

    /*useEffect(() => {  
        console.log(startDate);
        props.formatDate(startDate);
    }, [startDate])*/

    console.log(props);
    return (
        <div>    
            <Card>
                <CardImg className="img" top width="100%" src={props.nasaPics.url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.nasaPics.title}</CardTitle>
                    <CardSubtitle>Picture take on: <DatePicker
                        showPopperArrow={false}
                        selected={startDate}
                        /* PROBLEMS ****/
                        //onSelect={date => setStartDate(date)}
                        onChange={date => props.formatDate(date)}
                        //onChange={date => setStartDate(date)}
                      
                    /></CardSubtitle>
                    {/*<CardText className='card'>{props.nasaPics.explanation}</CardText>*/}
                    <div className='cardText'>{props.nasaPics.explanation}</div>

                </CardBody>
            </Card>

        </div>
    );
};

export default NasaCard;


