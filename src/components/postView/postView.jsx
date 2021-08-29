import React, { useEffect, useState } from 'react';
import './postView.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import {baseUrl} from '../../config.json';
import NavBar from '../navbar/navbar';
import ButtonLoader from '../buttonLoader/buttonLoader';
import { Link } from 'react-router-dom';

const PostView = (props) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const postId = props.location.state

    useEffect(() => {
        (async () => {
          const {data} = await axios.get(`${baseUrl}/api/feed/${postId}`)
          console.log(data)
          setPost(data.post)
          setLoading(false)
        })()
      }, [])

    return ( 
        <div className="post-view">
            <NavBar />
            <Link to="/mind"><i className="fas fa-arrow-left"></i></Link>
            {loading ? <ButtonLoader /> :
            <div className="post">
                <div className="top">
                  <p className="title">{post.title}</p>
                </div>
                <p className="date">{post.createdAt}</p>
                <p className="body">{post.feed}</p>
            </div>}
        </div>
     );
}
 
export default PostView;