import React, { useState } from "react";
import "./Create.css";
import { db } from "../backend/firebase_config";
import Banner from "../components/Banner";
import firebase from "firebase/app";

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
    tags: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const writeToDB = async () => {
    // Sending the form info to the correct collection.
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
      tags: newArticle.tags.split(","),
    });

    // Sending the tags to the correct collection.
    const tagsToImport = newArticle.tags.split(",");
    const tagsArr = db.collection("Tags").doc("9mbewr5gGihaX2sefiOG");
    await tagsArr.update({
      tags: firebase.firestore.FieldValue.arrayUnion(...tagsToImport),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newArticle.title &&
      newArticle.route &&
      newArticle.triggered &&
      newArticle.overview &&
      newArticle.interpretation &&
      newArticle.tags
    ) {
      setValid(true);
    }
    setSubmitted(true);
    writeToDB();
    setNewArticle({
      title: "",
      route: "",
      triggered: false,
      image: "",
      subheading: "",
      credit: "",
      overview: "",
      interpretation: "",
      tags: [],
    });
  };

  return (
    <>
      <Banner name="Create" link="/create" />
      <div className="create-container">
        <h1 className="create-heading">Article Creation</h1>
        <form className="create-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">
              Success! You've made an article!
            </div>
          ) : null}
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="create-title"
            value={newArticle.title}
            onChange={(e) =>
              setNewArticle({ ...newArticle, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            name="route"
            placeholder="Route"
            className="create-route"
            value={newArticle.route}
            onChange={(e) =>
              setNewArticle({ ...newArticle, route: e.target.value })
            }
            required
          />
          <div className="whole-checkbox">
            <input
              type="checkbox"
              name="trigger-warning"
              className="create-checkbox"
              value={newArticle.triggered}
              onChange={(e) =>
                setNewArticle({ ...newArticle, triggered: e.target.value })
              }
            />
            <label htmlFor="trigger-warning">Trigger Warning</label>
          </div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="create-image"
            value={newArticle.image}
            onChange={(e) =>
              setNewArticle({ ...newArticle, image: e.target.value })
            }
          />
          <input
            type="text"
            name="subheading"
            placeholder="Image Subheading"
            className="create-subheading"
            value={newArticle.subheading}
            onChange={(e) =>
              setNewArticle({ ...newArticle, subheading: e.target.value })
            }
          />
          <input
            type="text"
            name="credit"
            placeholder="Image Creator"
            className="create-credit"
            value={newArticle.credit}
            onChange={(e) =>
              setNewArticle({ ...newArticle, credit: e.target.value })
            }
          />
          <textarea
            name="overview"
            placeholder="Full Overview ..."
            className="create-overview"
            required
            value={newArticle.overview}
            onChange={(e) =>
              setNewArticle({ ...newArticle, overview: e.target.value })
            }
          />
          <textarea
            name="interpretation"
            placeholder="Interpretation ..."
            className="create-interpretation"
            required
            value={newArticle.interpretation}
            onChange={(e) =>
              setNewArticle({ ...newArticle, interpretation: e.target.value })
            }
          />
          <textarea
            name="tags"
            placeholder="Tags separated by comma (no spaces)"
            className="create-tags"
            required
            value={newArticle.tags}
            onChange={(e) =>
              setNewArticle({ ...newArticle, tags: e.target.value })
            }
          />
          <button className="create-button">Create</button>
        </form>
      </div>
    </>
  );
};

export default Create;
