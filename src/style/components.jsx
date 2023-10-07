import { styled } from "styled-components";

const primary = "#0088FF";
const schedule = '#E4EDFF';
const schedule_date = '#FFEBFE';

export const Drawer = styled.section`
width: 20em;
height: 100vh;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 2em;
position: fixed;
.up-front {
    margin-top: 1.5em;
}

.logo {
    margin-bottom: 5em;
    display: flex;
    gap: 10px;
}
ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2.4em;
}
`
export const LogoutButton = styled.button`
    border: none;
    padding-block: 1em;
    border-radius: 50px;
    background-color: ${primary};
    color: white;
    font-family: inherit;
`

export const Body = styled.div`
display: flex;
`

export const Content = styled.div`
display: flex;
gap: 3em;
padding-inline: 2.8em;
.post-section{
width: 100%;
display: flex;
flex-direction: column;
gap: 1.5em;
}
.point-section{
    width: 35em;
}
.
`

export const Card = styled.div`
background-color: #ffffff;
border-radius: 7px;
padding: .9em;
display: flex;
flex-direction: column;
padding-inline: 2em;

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2em;

    .post-profile {
        display: flex;
        align-items: center;
        gap: 7px;

        small {
            color: #A0A4AA;
        }
    }

    .schedule {
        display: flex;
        gap: 10px;

        .schedule-color{
            color: black;
            background: ${schedule_date}
        }

        .type-color{
            color: black;
            background: ${schedule}
        }
    }
}

.sdh5 {
    padding-bottom: 1.5em;
}
.post {
    padding-bottom: 2em;
    font-size: .9rem;
}


.music-post {
    padding-bottom: 1.2em;
    display: flex;
    gap: .7em;

    span {
        display: flex;
        flex-direction: column;
        gap: 5px;
        
        a {
            text-decoration: none;
            font-size: .8em;
        }
    }
}
a {
    text-decoration: none;
    font-size: .9em;
}
`

export const Button = styled.button`
    border: none;
    padding-block: .7em;
    padding-inline: 1em;
    border-radius: 50px;
    background-color: ${primary};
    color: white;
    font-family: inherit;
`

export const MusicPicture = styled.div`
background-position: center;
background-size: contain;
border-radius: 7px;
width: 60px;
height: 60px;
`