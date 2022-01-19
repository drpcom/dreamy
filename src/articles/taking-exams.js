import React, {useState, useEffect} from 'react';
import Article from './Article.js';
import { db } from '../backend/firebase_config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import allArticles from './allArticles.js';

const TakingExams = () => {
    const [data, setData] = useState([]);
    const [disable, setDisable] = useState(false);
    

    useEffect(() => {
            getAllLikes()
    }, [])

    const getAllLikes = () => {
        db.collection('taking-exams').onSnapshot(function (querySnapshot) {
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

        db.collection("taking-exams").doc("flame").update({
            addedLikes: increment,
        })
    }
    const incrementLove = () => {
        setDisable(true);

        db.collection("taking-exams").doc("love").update({
            addedLikes: increment,
        })
    }
    const incrementSexy = () => {
        setDisable(true);

        db.collection("taking-exams").doc("sexy").update({
            addedLikes: increment,
        })
    }
    const incrementNeutral = () => {
        setDisable(true);

        db.collection("taking-exams").doc("neutral").update({
            addedLikes: increment,
        })
    }
    const incrementFunny = () => {
        setDisable(true);

        db.collection("taking-exams").doc("funny").update({
            addedLikes: increment,
        })
    }
    const incrementScary = () => {
        setDisable(true);

        db.collection("taking-exams").doc("scary").update({
            addedLikes: increment,
        })
    }
    const incrementMindblowing = () => {
        setDisable(true);

        db.collection("taking-exams").doc("mindblowing").update({
            addedLikes: increment,
        })
    }
    const incrementSad = () => {
        setDisable(true);

        db.collection("taking-exams").doc("sad").update({
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
                title={allArticles[8].title}
                triggerWarning={allArticles[8].triggerWarning}
                image={allArticles[8].imageOne}
                imageSubheading={allArticles[8].imageSubheading}
                imageCredit={allArticles[8].imageCredit}
                imageTwo={allArticles[8].imageTwo}
                tags={allArticles[8].tags}
                overview={allArticles[8].overview.join("\n\n")}
                interpretation={allArticles[8].interpretation}
                relatedArticles={allArticles[8].relatedArticles}
                />
        </React.Fragment>
    )
}

export default TakingExams;