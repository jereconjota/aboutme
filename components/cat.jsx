import {useRef, useEffect} from 'react';

export default function Cat() {
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
            <img src="https://art.pixilart.com/sr2aa10ad38ee2e.gif" 
            width="50" 
            height="50"  
            id="cat"
            ref={ref} />
        </div>
    )
}
