import React, {useState} from 'react';
import './Create.css';
import { db } from '../backend/firebase_config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Create = () => {
    const [newArticle, setNewArticle] = useState({
        title: "",
        route: "",
        triggered: false,
        image: "",
        subheading: "",
        credit: "",
        overview: "",
        interpretation: "",
        tags: []
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const writeToDB = async() => {
            await db.collection("Articles").add({
            id: Math.floor(Math.random() * 999999999),
            title: newArticle.title,
            route: newArticle.route,
            triggered: newArticle.triggered,
            image: newArticle.image,
            subheading: newArticle.subheading,
            credit: newArticle.credit,
            overview: newArticle.overview,
            interpretation: newArticle.interpretation,
            tags: newArticle.tags,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newArticle.title 
            && newArticle.route
            && newArticle.triggered 
            && newArticle.overview 
            && newArticle.interpretation 
            && newArticle.tags) {
                setValid(true);
            }
        setSubmitted(true);
        writeToDB()
        setNewArticle({
            title: "",
            route: "",
            triggered: false,
            image: "",
            subheading: "",
            credit: "",
            overview: "",
            interpretation: "",
            tags: []
        })
    }

    return (
        <div className='create-container'>
            <h1>this is the create page.</h1>
            <form className="create-form" onSubmit={handleSubmit}>
            {submitted && valid ? <div className='success-message'>Success! You've made an article!</div> : null}
            <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={newArticle.title} 
            onChange={e => setNewArticle({...newArticle, title: e.target.value})} 
            required
            />
            <input 
            type="text" 
            name="route" 
            placeholder="Route" 
            value={newArticle.route} 
            onChange={e => setNewArticle({...newArticle, route: e.target.value})} 
            required
            />
            <input 
            type="checkbox" 
            name="trigger-warning" 
            value={newArticle.triggered} 
            onChange={e => setNewArticle({...newArticle, triggered: e.target.value})}
            />
            <label htmlFor="trigger-warning">Trigger Warning</label>
            <input 
            type="text" 
            name="image" 
            placeholder="Image" 
            value={newArticle.image}
            onChange={e => setNewArticle({...newArticle, image: e.target.value})}
            />
            <input 
            type="text" 
            name="subheading" 
            placeholder="Image Subheading" 
            value={newArticle.subheading}
            onChange={e => setNewArticle({...newArticle, subheading: e.target.value})}
            />
            <input 
            type="text" 
            name="credit" 
            placeholder="Image Creator" 
            value={newArticle.credit}
            onChange={e => setNewArticle({...newArticle, credit: e.target.value})}
            />
            <textarea 
            name="overview" 
            placeholder="Full Overview ..." 
            required 
            value={newArticle.overview}
            onChange={e => setNewArticle({...newArticle, overview: e.target.value})}
            />
            <textarea 
            name="interpretation" 
            placeholder="Interpretation ..." 
            required 
            value={newArticle.interpretation}
            onChange={e => setNewArticle({...newArticle, interpretation: e.target.value})}
            />
            <textarea 
            name="tags" 
            placeholder="Tags" 
            required 
            value={newArticle.tags}
            onChange={e => setNewArticle({...newArticle, tags: e.target.value})}
            />
            <button>Create</button>
            </form>
        </div>
    )
}

export default Create
