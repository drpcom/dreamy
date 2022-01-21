import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({title, desc, link}) => {
  return (
    <>
        <div className="article-body">
            <h2 className="article-title">{title}</h2>
            <p className="article-text">{desc}</p>
            <Link to={link}>Go to article</Link>
        </div>
    </>
  );
};

export default Card;
