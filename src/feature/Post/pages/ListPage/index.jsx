import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import {Link, useParams} from "react-router-dom";

ListPage.propTypes = {
  
};


function ListPage() {
    // declare calendar in dayjs
    dayjs.extend(calendar);

    //base url
    const baseUrl = "https://js-post-api.herokuapp.com/api/posts";

  const [postList, setPostList] = useState(null);

  useEffect(() => {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
          setPostList(data)
        })
}, [])

  return (
      <div className="container">
          <ul className="post__list" style={{listStyle: 'none'}}>
              {
                  postList
                      ? postList.map(post => {
                          return (
                              <li className="post__item">
                                  <h2 className="post__title">{post.title}</h2>
                                  <Link to={ `posts/${post.id}` }><img className="post__image" src={post.imageUrl} alt=""/></Link>

                                  <span classname="post__time">{dayjs().calendar(dayjs(`${post.createdAt}`))}</span>
                              </li>
                          )
                      })
                      : null
              }
          </ul>
      </div>

  );
}

export default ListPage;