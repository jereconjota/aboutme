import {useRef, useEffect} from 'react';

export default function Cat({ url }) {
    const ref = useRef(null);

    let startTime = new Date().getTime();
    // console.log(window.screen.width);
    let walkTheCat = function () {
        let catEl = ref.current;
        let currTime = new Date().getTime();
        let newRight = (((currTime - startTime) / 1000) * 100);
        catEl.style.right = newRight + "px";

        if (newRight < window.screen.width) {
            window.requestAnimationFrame(walkTheCat);
        } else {
            catEl.style.right = "0px";
            startTime = new Date().getTime();
            window.requestAnimationFrame(walkTheCat);
        }
    };

    useEffect(() => {
        walkTheCat();
    }, []);

    return (
        <div>
            <img src={url} 
            width="75" 
            height="75"  
            id="cat"
            ref={ref} />
        </div>
    )
}
