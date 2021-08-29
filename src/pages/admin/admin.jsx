import React, { useState } from 'react';
import AdNavBar from '../../components/adnavbar/adnavbar';
import NavBar from '../../components/navbar/navbar';
import './admin.scss';
import {baseUrl} from '../../config.json';
import axios from 'axios';
import { useHistory } from 'react-router';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [feed, setFeed] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const formData = {
       title,
       feed
    }

    const AddPost = async (e) => {
        setLoading(true)
        try {
          const {data} = await axios.post(`${baseUrl}/api/feed`, formData)
          console.log(data)
          setLoading(false)
          history.push('/broadcast-thoughts/edit')
        } catch (error) {
          console.log(error.response)
          setLoading(false)
        }
       
    }

    return ( 
        <div className="admin">
           <AdNavBar func={AddPost} />
           <form onSubmit={AddPost}>
               <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="TITLE" /> <br />
               <textarea value={feed} onChange={e => setFeed(e.target.value)} cols="30" rows="10" placeholder="BODY"></textarea>
           </form>
        </div>
     );
}
 
export default Admin;