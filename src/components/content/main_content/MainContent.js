import React, { useState } from 'react'
import MyCarousel from '../../carousel/MyCarousel';

import styled from 'styled-components';

function MainContent() {

    const Content = styled.div`
        border: 1px solid blue;
        background-color: #6c757d;
        display: flex;
        justify-content: center;
        border:  1px solid red;
    
    `;   


    return (
        <Content >
            <MyCarousel />
        </Content>
    );
}

export default MainContent;
