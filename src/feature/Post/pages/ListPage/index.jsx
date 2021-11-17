import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Link, NavLink, useParams } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";

ListPage.propTypes = {};

function ListPage() {
  // declare calendar in dayjs
  dayjs.extend(relativeTime);

  //base url
  const baseUrl = "https://js-post-api.herokuapp.com/api/posts";

  const [postList, setPostList] = useState(null);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setPostList(data);
      });
  }, []);

  return (
    <div className="container">
      <h1>home page</h1>
      <ul className="post__list" style={{ listStyle: "none" }}>
        {postList
          ? postList.map((post) => {
              return (
                <Link to={`posts/${post.id}`} style={{ textDecoration: "none", color: 'inherit' }}>
                <li key={post.id} className="post__item">
                  <h2 className="post__title">{post.title}</h2>
                  <p className="post__time">
                    {dayjs(post.updatedAt).fromNow()}
                  </p>
                  <div className="post__wrapper-image">
                    <img className="post__image" src={post.imageUrl} alt="" />
                  </div>
                </li>
                </Link>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default ListPage;
