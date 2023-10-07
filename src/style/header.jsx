import { styled } from "styled-components";

const schedule = '#E4EDFF';
const scedule_date = '#FFEBFE';

export const Main = styled.section`
margin-left: 20em;
width: 100%;
display: flex;
flex-direction: column;

.textarea {
    width: 100%;
    padding: 1em;
    background-color: #F2F3F5;
    border-radius: 7px;
    margin: 20px 0px 15px 0px;
}

.next-step{
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin-bottom: 5px;

    .config{
        display: flex;
        gap: 10px;
        width: 100%;

     select {
        background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") right 1rem center / 1em no-repeat rgb(241, 248, 252);
        font-size: 0.9rem;
        appearance: none;
        padding-inline: 1.1em;
        padding-block: .6em;
        border-radius: 50px;
        border: none;
        width: 20%;
        background-color: ${schedule}
    }
    input {
        border-radius: 50px;
        border: none;
        width: 25%;
        background-color: ${scedule_date};

        &::placeholder {
            color: black;
        }
    }
}
}
`
export const Header = styled.header`
padding-block: 2em;
padding-inline: 2.8em;
display: flex;
justify-content: space-between;
align-items: center;

.search-console {
    width: 17%;
}

.search {
    border: none;
    padding: 10px;
    padding-left: 15px;
    text-decoration: none;
    outline: none;
    -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    width: 100%;
    font-family: 'Montserrat', sans-serif !important;
    border-radius: 30px;
    background-color: #ffffff;
    font-weight: 500;
    color: #205072;
}
`
export const Avatar = styled.div`
background-position: center;
background-size: contain;
border-radius: 50px;
border: 2px solid #ffffff;
width: 40px;
height: 40px;
`