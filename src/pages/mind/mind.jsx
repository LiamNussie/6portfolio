import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './mind.scss';

const postList = [
    {
      id: 1,
      title: "EVERYTHING WRONG",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      date: "2ND OCT, 2020",
    },
    {
      id: 2,
      title: "EVERYTHING WRONG",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2ND OCT, 2020",
    },
    {
      id: 3,
      title: "EVERYTHING WRONG",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2ND OCT, 2020",
    },
    {
      id: 4,
      title: "EVERYTHING WRONG",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2ND OCT, 2020",
    },
    {
      id: 5,
      title: "EVERYTHING WRONG",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2ND OCT, 2020",
    },
  ];
  

const Mind = () => {
    return ( 
        <div className="mind">
            <NavBar />
      <div className="cont">
        <div className="header">MIND</div>
        <div className="posts">
          {postList.map(({ id, title, body, date }) => {
            return (
              <div className="post" key={id}>
                <div className="top">
                  <p className="title">{title}</p>
                  {/* <img src={icon} alt="del-icon" /> */}
                </div>
                <p className="body">{body.slice(0,174)}...</p>
                <p className="date">{date}</p>
              </div>
            );
          })}
        </div>
      </div>
        </div>
     );
}
 
export default Mind;