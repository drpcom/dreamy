import React, {useState, useEffect} from 'react';
import Article from './Article.js';
import { db } from '../backend/firebase_config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import allArticles from './allArticles.js';

const Spiders = () => {
    const [data, setData] = useState([]);
    const [disable, setDisable] = useState(false);
    

    useEffect(() => {
            getAllLikes()
    }, [])

    const getAllLikes = () => {
        db.collection('spiders').onSnapshot(function (querySnapshot) {
            const data= [];
            querySnapshot.forEach( doc => {
              data.push(doc.data().addedLikes)
            })
            setData(data);
        })
    }

    const increment = firebase.firestore.FieldValue.increment(1);

    const incrementFlame = () => {
        setDisable(true);

        db.collection("spiders").doc("flame").update({
            addedLikes: increment,
        })
    }
    const incrementLove = () => {
        setDisable(true);

        db.collection("spiders").doc("love").update({
            addedLikes: increment,
        })
    }
    const incrementSexy = () => {
        setDisable(true);

        db.collection("spiders").doc("sexy").update({
            addedLikes: increment,
        })
    }
    const incrementNeutral = () => {
        setDisable(true);

        db.collection("spiders").doc("neutral").update({
            addedLikes: increment,
        })
    }
    const incrementFunny = () => {
        setDisable(true);

        db.collection("spiders").doc("funny").update({
            addedLikes: increment,
        })
    }
    const incrementScary = () => {
        setDisable(true);

        db.collection("spiders").doc("scary").update({
            addedLikes: increment,
        })
    }
    const incrementMindblowing = () => {
        setDisable(true);

        db.collection("spiders").doc("mindblowing").update({
            addedLikes: increment,
        })
    }
    const incrementSad = () => {
        setDisable(true);

        db.collection("spiders").doc("sad").update({
            addedLikes: increment,
        })
    }

    return (
        <React.Fragment>
                <div className="article-header">
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
                title={allArticles[9].title}
                triggerWarning={allArticles[9].triggerWarning}
                image={allArticles[9].imageOne}
                imageSubheading={allArticles[9].imageSubheading}
                imageCredit={allArticles[9].imageCredit}
                imageTwo={allArticles[9].imageTwo}
                tags={allArticles[9].tags}
                overview={allArticles[9].overview.join("\n\n")}
                interpretation={allArticles[9].interpretation}
                relatedArticles={allArticles[9].relatedArticles}
                />
        </React.Fragment>
    )
}

export default Spiders;