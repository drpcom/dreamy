import React, {useState, useEffect} from 'react';
import Article from './Article.js';
import pineapple from '../images/pineapple.jpg';
import { db } from '../backend/firebase_config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Falling = () => {

    const [data, setData] = useState([]);
    const [disable, setDisable] = useState(false);
    

    useEffect(() => {
            getAllLikes()
    }, [])

    const getAllLikes = () => {
        db.collection('likes').onSnapshot(function (querySnapshot) {
            const data= [];
            querySnapshot.forEach( doc => {
              console.log("Likes : ", doc.data().addedLikes);
              data.push(doc.data().addedLikes)
            })
            setData(data);
            console.log(data)
        })
    }

    const increment = firebase.firestore.FieldValue.increment(1);

    const incrementFlame = () => {
        setDisable(true);

        db.collection("likes").doc("flame").update({
            addedLikes: increment,
        })
    }
    const incrementLove = () => {
        setDisable(true);

        db.collection("likes").doc("love").update({
            addedLikes: increment,
        })
    }
    const incrementSexy = () => {
        setDisable(true);

        db.collection("likes").doc("sexy").update({
            addedLikes: increment,
        })
    }
    const incrementNeutral = () => {
        setDisable(true);

        db.collection("likes").doc("neutral").update({
            addedLikes: increment,
        })
    }
    const incrementFunny = () => {
        setDisable(true);

        db.collection("likes").doc("funny").update({
            addedLikes: increment,
        })
    }
    const incrementScary = () => {
        setDisable(true);

        db.collection("likes").doc("scary").update({
            addedLikes: increment,
        })
    }
    const incrementMindblowing = () => {
        setDisable(true);

        db.collection("likes").doc("mindblowing").update({
            addedLikes: increment,
        })
    }
    const incrementSad = () => {
        setDisable(true);

        db.collection("likes").doc("sad").update({
            addedLikes: increment,
        })
    }


    return (
        <React.Fragment>
        <div className="article-header">
        {/*  <div className="article-header__header-section"></div> */}
          <div className="bumper-sticker-container">
              <button className="bumper-sticker" onClick={() => incrementFlame()} disabled={disable}>
              <div className="bumper-sticker__count">{data[0]}</div>
              <div className="bumper-sticker__image">🔥</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementLove()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[2]}</div>
                  <div className="bumper-sticker__image">😍</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementSexy()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[7]}</div>
                  <div className="bumper-sticker__image">🥵</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementNeutral()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[4]}</div>
                  <div className="bumper-sticker__image">😐</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementFunny()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[1]}</div>
                  <div className="bumper-sticker__image">🤣</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementScary()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[6]}</div>
                  <div className="bumper-sticker__image">😨</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementMindblowing()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[3]}</div>
                  <div className="bumper-sticker__image">🤯</div>
              </button>
              <button className="bumper-sticker" onClick={() => incrementSad()} disabled={disable}>
                  <div className="bumper-sticker__count">{data[5]}</div>
                  <div className="bumper-sticker__image">😢</div>
                </button> 
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
