import React, {useState, useEffect} from 'react';
import Article from './Article.js';
import pineapple from '../images/pineapple.jpg';
import { db } from '../backend/firebase_config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Falling = () => {

    const [flamesCount, setFlamesCount] = useState(0);
    const [incrementLove, setIncrementLove] = useState(0);
    const [incrementSexy, setIncrementSexy] = useState(0);
    const [incrementNeutral, setIncrementNeutral] = useState(0);
    const [incrementFunny, setIncrementFunny] = useState(0);
    const [incrementScary, setIncrementScary] = useState(0);
    const [incrementMindblowing, setIncrementMindblowing] = useState(0);
    const [incrementSad, setIncrementSad] = useState(0);
    const [disable, setDisable] = useState(false);
    

    useEffect(() => {
            getFlameLikes()
    }, [])

    const data = [];

    const getFlameLikes = async () => {
        const flameRef = db.collection('likes').doc('flame');
        const doc = await flameRef.get();
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log(doc.data().addedLikes);
        
    }
    setFlamesCount(doc.data().addedLikes)
    console.log(doc.data().addedLikes)
    }

    const increment = firebase.firestore.FieldValue.increment(1);

    const incrementFlames = () => {
        setFlamesCount(flamesCount+1);
        setDisable(true);

        db.collection("likes").doc("flame").update({
            addedLikes: increment,
        })
    }


    return (
        <React.Fragment>
        <div className="article-header">
        {/*  <div className="article-header__header-section"></div> */}
          <div className="bumper-sticker-container">
              <button className="bumper-sticker" onClick={() => incrementFlames()} disabled={disable}>
              <div className="bumper-sticker__count">{flamesCount}</div>
              <div className="bumper-sticker__image">🔥</div>
              </button>
        {/*      <button className="bumper-sticker" onClick={() => dispatch(incrementLove())}>
                  <div className="bumper-sticker__count">{counters.love}</div>
                  <div className="bumper-sticker__image">😍</div>
              </button>
              <button className="bumper-sticker" onClick={() => dispatch(incrementSexy())}>
                  <div className="bumper-sticker__count">{counters.sexy}</div>
                  <div className="bumper-sticker__image">🥵</div>
              </button>
              <button className="bumper-sticker" onClick={() => dispatch(incrementNeutral())}>
                  <div className="bumper-sticker__count">{counters.neutral}</div>
                  <div className="bumper-sticker__image">😐</div>
              </button>
              <button className="bumper-sticker" onClick={() => dispatch(incrementFunny())}>
                  <div className="bumper-sticker__count">{counters.funny}</div>
                  <div className="bumper-sticker__image">🤣</div>
              </button>
              <button className="bumper-sticker" onClick={() => dispatch(incrementScary())}>
                  <div className="bumper-sticker__count">{counters.scary}</div>
                  <div className="bumper-sticker__image">😨</div>
              </button>
              <button className="bumper-sticker" onClick={() => dispatch(incrementMindblowing())}>
                  <div className="bumper-sticker__count">{counters.mindblowing}</div>
                  <div className="bumper-sticker__image">🤯</div>
              </button>
              <button className="bumper-sticker" onClick={() => dispatch(incrementSad())}>
                  <div className="bumper-sticker__count">{counters.sad}</div>
                  <div className="bumper-sticker__image">😢</div>
    </button> */}
          </div>
      </div>
                <Article 
                title="Classic Fall Dream"
                triggerWarning={false}
                image={pineapple}
                imageSubheading="Sure is a long way down..."
                tags={['exhilarating', 'fear', 'true awakening', 'recurring', 'pre-human', 'phobia', 'death', 'anxiety', 'pointless' ]}
                overview=
                "Recently, there has been a renewed interest in emo, especially midwest emo. These bands are heavily influenced by Cap'n Jazz and often have a strong bent towards math rock and post-rock in their song structure and guitar work. A few examples of these twinkledaddy bands are Street Smart Cyclist, Snowing, Algernon Cadwallader, The World Is A Beautiful Place & I Am No Longer Afraid to Die, and Glocca Morra. As this scene grew and grew in popularity, #emorevival became a near-mainstream style of indie rock which took from various facets of Midwest, screamo, and emo pop, as played by bands such as the Hotelier, Free Throw, and late-period You Blew It! There is even an emo pop revival scene centered around Midwest-influenced indie rock bands with mildly intricate guitar work and deeply personal, confessional lyrics. These bands include Modern Baseball, Sorority Noise, and the Front Bottoms. Within this scene is a style known as sparklepunk, which combines Braid-like twinkles with lo-fi, noodly college rock guitar work, built around a base of pop-punk. Sparklepunk bands include Mom Jeans, Darkle, and Donovan Wolfington."
                interpretation="I really didn’t expect The Brothers Karamazov to have much of an effect on me after I finished it. It didn’t knock me off my feet. But I’ve caught myself thinking about the characters a lot. The characters really do stay with you. Each one is so well-drawn. Mitya, Ivan, Alyosha, #Grushenka, Katerina Ivanovna, Smerdyakov, Lise, Madame Khokhlakov. Even characters like Snegiryov and Kolya Krasotkin. There’s just no flatness to any of them. Dostovesky didn’t know how to write a flat character."
                relatedArticles={["dunsparce", "blaziken", "dusklops", "tropius", "metagross", "lugia"]}
                />
        </React.Fragment>
    )
}

export default Falling
