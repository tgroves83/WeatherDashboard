import styled from 'styled-components';

export const MainWrapper = styled.div`

height: 100vh;
background: linear-gradient(to right, #c7c7eb, #ccf2dd);
    
    p{
        margin: 10px 50px 10px 50px;
    }
    button{
        margin-top: 20px;
        background-color: lightgrey;
    }

.container {
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}


.getArea {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}


.getButton {
    outline: none;
    border: 1px;
    padding: 2px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
}
    
.weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 30px 10px 30px;

> .icon {
        font-size: 8rem;


        /* DO LATER NOT WHEN CREATING UI */
    }


> h1 {
        font-size: 3rem;
        margin-top: 20px;

        font-family: "Bebas Neue", sans-serif;
    }


> span {
        margin-bottom: 10px;
        font-family: "Inter", sans-serif;
    }


> h2 {
        font-size: 2rem;
        font-family: "Inter", sans-serif;
        font-weight: 400;
    }
}


.bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: linear-gradient(
        90deg,
        rgba(243, 255, 253, 1) 0%,
        rgba(253, 255, 232, 1) 100%
);
    border-radius: 12px;
    padding: 10px;
}
.humidityLevel,
.wind {
    display: flex;
    align-items: center;
    margin: 0 20px;


> .humidIcon {
        font-size: 1.5rem;
    }
}


.windIcon {
    font-size: 1.5rem;
    margin-right: 10px;
}


.loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;


.loadingIcon {
        font-size: 3rem;
        /* DO LATER NOT WHEN CREATING UI */
        animation: spin 2s linear infinite;
    }
    p {
        font-size: 22px;
        margin-top: 10px;
        font-family: "Josefin Sans", sans-serif;
    }
}


/* DO LATER NOT WHEN CREATING UI */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;