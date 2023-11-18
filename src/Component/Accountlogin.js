import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import'./CSS/Account.css'
import { useDispatch } from 'react-redux';
import { addaccount } from '../Reducer/Accountreducer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
const Accountlogin = () => {
  const [username, setUsername] = useState(''); 
  const [names, setNames] = useState(''); 
  const [date, setDate]=useState('')
  const[about, setAbout]=useState('');
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);


  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlenames = (e) => {
    setNames(e.target.value);
  };

  const handledate = (e) => {
    setDate(e.target.value);
  };

  const handleabout = (e) => {
    setAbout(e.target.value);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSave = () => {
    if (username || image ||names||date||about) {
      dispatch(
        addaccount({
          id: nanoid(),
          username: username,
          image: image,
          names: names,
          date: date,
          about: about,

        })
      );
      setUsername('');
      setImage(null);
      setNames('');
      setDate("");
      setAbout("");
    }
  };

  return (
    <div>
        <div><Navbar/></div>
      <div className="sidebar"><Sidebar/></div>


        <div>
              <div className=" input-group input-group-sm aclogin">
                <div className="input-group-prepend accountbox">
                  <h3>ACCOUNT</h3><br /><br />
              <label className='accountlabel'>NAME </label><br />
              <span>
              <input type="text" name="" value={names} onChange={handlenames} className='input-group-text accountinput'id='inputGroup-sizing-sm' /></span><hr />

              <label className='accountlabel'>USERNAME </label><br />
              <input type="text" name="" value={username} onChange={handleUsername}className='input-group-text accountinput'  /><hr />
             
              <label className='accountlabel'>DATE </label><br />
              <input type="date" name="" value={date} onChange={handledate}className='input-group-text accountinput' /><hr />
            
              <label className='accountlabel'>ABOUT </label><br />
              <input type="text" name="" value={about} onChange={handleabout}className='input-group-text accountinput' /><hr />
              <input type="file" name="image" accept="image/*" onChange={handleImage} /><br />
                {image && <img src={image} alt="Selected Image" style={{ maxWidth: "200px" }} />} <br />
                <button onClick={handleSave} className='btn btn-success btn-sm'>login</button>
                
     </div>
     </div>
    </div>
    <div className="rightbar">
      <Rightbar/>
    </div>
    </div>
  );
}

export default Accountlogin;
