import styled from "styled-components";

export const Container = styled.div`
    background-image: url('./background.webp');
    background-size: cover;
    height: 100vh;
    width: 80%;
`

export const TextContainer = styled.div`
    padding: 20vh 0 0 20%;

    h1 {
        font-size: 113px; 
        animation: fadeInUp 1s;

        @keyframes fadeInUp {
            from {
                transform: translate3d(0,20vh,0);
                opacity: 0;
            }

            to {
                transform: translate3d(0,0,0);
                opacity: 1;
            }
        }
    }

    

    p {
        margin-top: 50px;
        width: 50%;
        line-height: 28px;
        
    }

    #left-line {
        position: absolute;
        height: 1px;
        left: 0px;
        border:  1px solid rgba(255, 255, 255, 0.2);
        animation: left_line_anim 1s linear forwards;
       
    }

    @keyframes left_line_anim {
        0%{
            width: 0%;
        }
        100%{
            width: 80%;
        }
    }

    #circle {
        display: inline-block;
        position: absolute;
        height: 200px;
        width: 200px;
        top: 25vh;
        border-radius: 50%;
        border:1px solid rgba(255, 255, 255, 0.2);   
        animation: circle_anim 1s linear forwards;
    }

    @keyframes circle_anim {
        0%{
            left: 0%;
        }
        100%{
            left: 5%;
        }
    }


`

export const GreenItem = styled.div`
 position: absolute;
 display: flex;
 flex-direction: row;
 align-items: center;
 bottom: 0;
  width: 40%;
  height: 100px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding-left: 14%;
  margin: 0 0 10px 10px;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: ${props => props.theme.colors.text};
  }

  h2 {
    font-family: 'Avanti';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 28px;
    color: #FFFFFF;
  }

  #arrow-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
    width: 50px;
    height: 6px;
    margin: 10px;
  }

  #arrow-right::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(45deg);
    right: 0;
    bottom: -2px;
  }

  #arrow-left {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
    width: 50px;
    height: 6px;
    margin: 10px;
  }

  #arrow-left::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(-135deg);
    left: 0;
    bottom: -2px;
  }

  #arrow-flex {
    display: flex;
    margin: 15px 0 0 20px;
  }
`