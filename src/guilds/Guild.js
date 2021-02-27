import { React } from 'react';
import './Guild.css';

function Guild(props) {
    return (
        <div className="Guild" draggable="true">
            <a href={"/chat/" + props.id}>
                <h1>{props.id}</h1>
            </a>
        </div>
    )
}

export default Guild;
