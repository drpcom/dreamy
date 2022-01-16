import React from 'react'
import Banner from '../components/Banner';

const Disclaimers = () => {
    return (
        <>
        <Banner name="Disclaimers" link="/disclaimers" />
        <div className="boh-container">
            <h1 className="boh-title">Disclaimers</h1>
            <h3 className="boh-content">None of this is professional. I'm just a dude sitting at home writing these articles. Don't take these articles and interpretations as anything other than my opinion. There's no science behind them. Most of the time I'm not even doing research. I'm literally just coming up with stuff off the top of my head. If you need therapy, go see a therapist -- don't read my dumb website as a substitute for therapy. If you need a crisis counselor, speak with a crisis counselor. And if you need a doctor, please -- go see a doctor. </h3>
        </div>
        </>
    )
}

export default Disclaimers;
