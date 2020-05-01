import React, { useState, useEffect } from 'react'
import NasaCard from './NasaCard';
import axios from "axios";

import styled from 'styled-components';

function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}    

function MainContent() {
    const [nasaPics, setNasaPics] = useState([]);
    //let today = getDate();
    const [photDate, setPhotoDate] = useState(getDate());

    //getDate();

    function formatDate(badDate){
        var dd = String(badDate.getDate()).padStart(2, '0');
        var mm = String(badDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = badDate.getFullYear();
        
        const newDate = yyyy + '-' + mm + '-' + dd;
        console.log(newDate);
        setPhotoDate(newDate);
        
        
    }

    ///console.log(today);

    useEffect(() => {  
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${photDate}`)
            .then(response => {
                //console.log(response.data);
                setNasaPics(response.data);
            })
            .catch(err => {
                console.log(err);
            }
            );
    }, [photDate])


    const Content = styled.div`
        background-color: #6c757d;
        display: flex;
        justify-content: center;
        
    
    `;   

    

    return (
        <Content >
            <NasaCard nasaPics={nasaPics} formatDate={formatDate}/>
        </Content>
    );
}

export default MainContent;
