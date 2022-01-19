import React from 'react'

const Create = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>this is the create page.</h1>
            <input type="text" name="title" placeholder="Title" required></input>
            <input type="checkbox" name="trigger-warning" />
            <label htmlFor="trigger-warning">Trigger Warning</label>
            <input type="text" name="image" placeholder="Image"></input>
            <input type="text" name="subheading" placeholder="Image Subheading"></input>
            <input type="text" name="credit" placeholder="Image Creator"></input>
            <textarea name="overview" placeholder="Full Overview ..." required></textarea>
            <textarea name="interpretation" placeholder="Interpretation ..." required></textarea>
            <textarea name="tags" placeholder="Tags" required></textarea>
            <button type="submit">Create</button>
        </div>
    )
}

export default Create
