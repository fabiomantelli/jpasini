import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 60px;
    width: 70%;
    position: fixed;
    z-index: 20;
    margin: 10px 0 10px 5%;
`

export const NavigationMenu = styled.ul`
    list-style: none;
    color: white;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    
 a {
  text-decoration: none;
  color: inherit;

  &:hover {
   color: black;
   transition: 0.3s;
  }
 }
`