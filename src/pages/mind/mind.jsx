import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import './mind.scss';
import axios from 'axios';
import {baseUrl} from '../../config.json';
import { toast } from 'react-toastify';
import ButtonLoader from '../../components/buttonLoader/buttonLoader';
import PostView from '../../components/postView/postView';
import { Link } from 'react-router-dom';
import moment from 'moment';
  

const Mind = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const {data} = await axios.get(`${baseUrl}/api/feeds`)
        console.log(data)
        setPosts(data.posts)
        setLoading(false)
      })()
    }, [])   


    return ( 
        <div className="mind">
            <NavBar />
            {loading ? <ButtonLoader /> : 
      
      <div className="cont">
        <div className="header">MIND</div>
        <div className="posts">
          {posts.map(({ _id: id, title, feed, createdAt }) => {
            return (
              <Link key={id} style={{textDecoration: "none"}} to={{ pathname: '/post', state: id}}>
              <div className="post">
                <div className="top">
                  <p className="title">{title}</p>
                </div>
                <p className="body">{feed.slice(0,174)}...</p>
                <p className="date">{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
              </Link>
            );
          })}
        </div>
      </div>}
        </div>
     );
}
 
export default Mind;