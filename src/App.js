import { useState } from "react";
import hdtv from './hdtv.png';
import tv from './pngwing.com.png';
import char from './paperChar.png';

export const App = () => {
    const [charLocation, setCharLocation] = useState({ top: 500, left: 700 });

    const handleCharMove = async (top, left) => {
        const animationNum = 5;
        const distanceToTop = top - charLocation.top;
        const distanceToLeft = left - charLocation.left;
        const travelTop = Math.round(distanceToTop / animationNum);
        const travelLeft = Math.round(distanceToLeft / animationNum);

        let updatedState;

        for(let i = 0; i <= animationNum; i++) {
            updatedState = {...charLocation, top: (charLocation.top + travelTop), left: (charLocation.left + travelLeft)}
            setCharLocation({...charLocation, ...updatedState});
        }

    }
    return (
        <div onClick={(e) => handleCharMove(e.pageY, e.pageX)} style={{ height: '2000px', width: '2000px' }}>
            <InteractObject image={tv} glowyImage={hdtv} location={{ top: '500px', left: '500px' }} />
            <Character location={charLocation} />
        </div>
    )
}

const InteractObject = ({ image, glowyImage, location }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div>
            <img onMouseLeave={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                alt="interact" src={isHovered ? glowyImage : image}
                style={{ border: isHovered ? '2px solid gold' : '', height: '50px', width: '50px', position: 'absolute', top: location.top, left: location.left }}>
            </img>
        </div>
    )
}

const Character = ({ location }) => {

    return (
        <div>
            <img alt="char" style={{ position: 'absolute', height: '100px', width: '50px', top: `${location.top}px`, left: `${location.left}px` }} src={char} />
        </div>
    )
}