import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Reducer/Reducer'; // Import your Redux action here
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './CSS/Post.css';
import { selectAllaccount } from '../Reducer/Accountreducer'; // Import your account selector here
import Rightbar from './Rightbar';

const Post = () => {
  const account = useSelector(selectAllaccount);
  const latestAccountPost = account && account[account.length - 1];
  const Account = latestAccountPost && latestAccountPost.image ? (
    <article key={latestAccountPost.id}>
      <img src={latestAccountPost.image} alt="Image" className="postcircular-image" />
    </article>
  ) : null;

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [locations, setLocations] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocation = (e) => {
    setLocations(e.target.value);
  } 

  const handleSave = () => {
    if (title && image && locations) {
      const newPost = {
        id: nanoid(),
        title,
        image,
        locations,
      };
      dispatch(addPost(newPost)); // Dispatch your Redux action to add the new post
      setTitle("");
      setImage(null);
      setLocations('');
    } else {
      // Handle form validation errors or display a message to the user.
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="postsidebar">
          <Sidebar />
        </div>
        <div className="postbar">
          <div className="postbar1">
            <h4 className='newpost'>New Post</h4>
            <hr />
            <div className="profile">
              {Account}
            </div><br /><br /><br />
        
            <label htmlFor="" className='locationlabel'><h5>POST : </h5></label> <br />

            <div className="post">
              <input type="file" name="image" accept="image/*" onChange={handleImageChange}  /><br />
              <input type="text" name="title" value={title} onChange={handleTitleChange} placeholder='Write your caption' className='title' /><br/><br />

              {image && <img src={image} alt="SelectedImage" style={{ maxWidth: "200px" }} className='SelectedImage' />
              }
            </div>
            <div><br />


            <div className="location">
                  <label htmlFor="" className='locationlabel'> <h5>Add Location : </h5></label> <br />
                   <input type="text" name="locations" value={locations} onChange={handleLocation} placeholder="Enter location" className="locationinput"  /><br/>
             </div><br />


            </div>
            <button onClick={handleSave} className='bg-primary'>POST</button>
          </div>
        </div>
        <div className="rightbar">
          <Rightbar/>
        </div>
      </div>
    </div>
  );
}

export default Post;
