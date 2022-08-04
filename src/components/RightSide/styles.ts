import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 20%;
    background: #fff;
`

export const TextContainer = styled.div`
    padding: calc(20vh + 35px) 0 0 20%;

    #right-line {
        position: absolute;
        height: 1px;
        right: 0px;
        border:1px solid rgba(33, 54, 29, 0.7);
        animation: right_line_anim 1s linear forwards;
       
    }

    @keyframes right_line_anim {
        0%{
            width: 0%;
        }
        100%{
            width: 20%;
        }
    }

    p {
     display: flex;
     justify-content: flex-end;
     align-items: center;
     font-family: 'Futura LT';
     font-style: normal;
     font-weight: 800;
     font-size: 11px;
     line-height: 15px;

     color: #21361D;
     margin-right: 5%;
    }

    `

export const GreenItem = styled.div`
    display: flex;
    width: 90%;
    height: 60px;
    background: #fff;
    margin: 10px auto;
    color: #fff;
    justify-content: space-evenly;
    align-items: center;
    font-size: 10px;
`

export const MenuBottom = styled.div`
 position: absolute;
 display: flex;
 bottom: 0;
 width: 20%;
 height: 30px;
 margin: 0 0 25px 0;

 ul {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  list-style: none;
 }

 a {
  text-decoration: none;
  color: inherit;

  &:hover {
   color: #21361D;
   transition: 0.3s;
  }
 }
`
   
   
