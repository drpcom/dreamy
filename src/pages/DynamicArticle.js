import React, {useEffect, useState} from 'react';
import { db } from '../backend/firebase_config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useParams } from 'react-router-dom';
import imgTwoPlaceholder from '../images/imgTwoPlaceholder1.jpg';

const DynamicArticle = () => {
    const [allArticles, setAllArticles] = useState([]);

    let params = useParams();

        useEffect(() => {
            
            const fetchAll = async () => {
                try {
                    const ref = db.collection("Articles");
                    const docs = await ref.get();

                    let articleArr = [];
                    docs.forEach((doc) => {
                        const data = doc.data();
                            articleArr.push(data)
                    })
                    setAllArticles(articleArr);
                    
                } catch (error) {
                    console.log("Unable to grab articles :(")
                }
            }
            
            fetchAll();
            
        },[])

        console.log(allArticles)

        const myArticle = [];
        allArticles.forEach((article) => {
            if (article.route === params.id) {
                myArticle.push(article)
            }
        })

        console.log("my article is: ", myArticle)

  return (
      <>
        {myArticle.length > 0 && 
            <div className="article-container">
            <div className="article-title">
                <h1>{myArticle[0].title}</h1>
                {myArticle[0].triggered ? <h4 className="trigger">[trigger warning]</h4> : null}
            </div>
            <div className="article-content">
                <div className="article-content__section-one">
                    <div className="section-one__image">
                        <img src={myArticle[0].image} alt={myArticle[0].title} />
                        <div className="image-subheading-container-one">
                            <p>{myArticle[0].subheading}</p>
                        </div>
                        <div className="image-subheading-container-two">
                            <p>Credit: {myArticle[0].credit} <a href="http://Unsplash.com">Unsplash</a></p>
                        </div>
                    </div>

                    <p>{myArticle[0].overview}</p>
                </div>
                <div className="article-content__section-two">
                    <h2>Possible Interpretation</h2>
                    <img src={imgTwoPlaceholder} alt={imgTwoPlaceholder} />
                    <p>{myArticle[0].interpretation}</p>
                </div>
            </div>
            </div>
        }
      </>
    );
};

export default DynamicArticle;
