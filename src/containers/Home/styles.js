import styled from "styled-components";


export const Container = styled.div`
    background-image: linear-gradient( #601D0D ,#20100C);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

    min-width: 350px;
`;

export const Image = styled.img`
    width: 315px;
    height: 280px;
`;

export const ContainerItens = styled.div`
    background:linear-gradient(180.00deg,
        rgba(151, 89, 20,0.6) 0.6%,
        rgba(151, 89, 20,0.4) 20.6%,
        rgba(255,255,255,0.01) 56%);
    border-radius: 61px 61px 0px 0px;

    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    min-width: 250px;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;

    margin-bottom: 30px;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-size: 14px;
    /* line-height: 22px; */

    letter-spacing: -0.408px;
    color: #EEEEEE; 
    
    margin: 0px 0px 2px;
`;

export const Input = styled.input`

    padding-left: 20px;
    width: 250px;    
    height: 44px;

    background:#dbcdb9;
    border-color: transparent;
    border-radius: 4px;

    outline: transparent;
        
    ::placeholder{ 
        color: #363636; 
    } 
    
    margin-bottom: 20px;
    text-overflow:ellipsis
`;

export const ButtonRequests = styled.button`

    margin-top: 15px;

    background-color: #AE0000;
    
    color: white;
    width: 180px;
    height: 50px;

    border: none;
    
    border-radius: 4px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    align-items: center;
    cursor: pointer;

    display: flex;
    text-decoration: none;
    justify-content: center;
    align-self: center;

    &:hover{
       opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }

`

export const Button = styled.button`
    background-color: #AE0000;
    
    color: white;

    margin-top: 50px;

    width: 250px;
    height: 53px;

    border: none;
    
    border-radius: 4px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    align-items: center;
    cursor: pointer;

    display: flex;
    text-decoration: none;
    justify-content: center;

    &:hover{
       opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`;

