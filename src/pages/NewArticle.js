import React, {useState} from 'react';
import { db } from '../backend/firebase_config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect } from 'react';
import Card from './Card';

const NewArticle = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticlesFromFirebase = [];
        const subscriber = db
        .collection('Articles')
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getArticlesFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                })
            })
            setArticles(getArticlesFromFirebase);
            setLoading(false);
        })
        return () => subscriber()

    },[]);

    if (loading) {
        return <h1>Loading data...</h1>
    }

  return (
      <div className="container">
      <h1>articles:</h1>
      {articles.length > 0 ? (
          articles.map((article) => {
              return (
                  <Card 
                  key={article.id}
                  title={article.title}
                  desc={article.overview}
                  link={`/article/${article.route}`}
                  />
              )
          })
      ) : (
          <h1>No articles yet</h1>
        )}

      </div>
  )
};

export default NewArticle;
