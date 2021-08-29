import React, { useState, useEffect } from "react";
import NavBar from "../../../components/navbar/navbar";
import "./distort.scss";
import icon from './icon.svg';
import axios from 'axios';
import {baseUrl} from '../../../config.json';
import { Link } from 'react-router-dom';
import ButtonLoader from "../../../components/buttonLoader/buttonLoader";
import moment from 'moment';



const Distort = () => {
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

    const deletePost = async (id) => {
      setLoading(true)
      try {
        const { data } = await axios.delete(`${baseUrl}/api/deletefeed/${id}`)
        console.log(data)
        window.location.reload()
      } catch (error) {
        console.log(error.response)
      }
    }

  return (
    <div className="distort">
      <NavBar />
      {loading ? <ButtonLoader /> :
      <div className="cont">
        <div className="header">MIND</div>
        <div className="posts">
          {posts.map(({ _id: id, title, feed, createdAt }) => {
            return (
              <div className="post" key={id}>
                <div className="top">
                  <p className="title">{title}</p>
                  <img onClick={() => deletePost(id)} src={icon} alt="del-icon" />
                </div>
                <p className="body">{feed.slice(0,174)}...</p>
                <p className="date">{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            );
          })}
        </div>
      </div>}
    </div>
  );
};

export default Distort;
