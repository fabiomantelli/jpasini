import styled from "styled-components";

export const Container = styled.div`
    background-image: url('./background.webp');
    background-size: cover;
    height: 100vh;
    width: 75%;
`

export const TextContainer = styled.div`
    margin: 20vh 0 0 20%;

    h1 {
        font-size: 113px;
    }

    p {
        margin-top: 50px;
        width: 50%;
        line-height: 28px
    }

    #left-line {
        position: absolute;
        height: 1px;
        left: 0px;
        margin-top: 20px;
        border:1px solid rgba(255, 255, 255, 0.2);
        animation: left_line_anim 1s linear forwards;
       
    }

    @keyframes left_line_anim {
        0%{
            width: 0%;
        }
        100%{
            width: 78%;
        }
    }

    #right-line {
        position: absolute;
        height: 1px;
        right: 0px;
        margin-top: 20px;
        border:1px solid rgba(33, 54, 29, 0.7);
        animation: right_line_anim 1s linear forwards;
       
    }

    @keyframes right_line_anim {
        0%{
            width: 0%;
        }
        100%{
            width: 22%;
        }
    }

    #circle {
        display: inline-block;
        position: absolute;
        height: 200px;
        width: 200px;
        /* left: 5%; */
        top: 200px;
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