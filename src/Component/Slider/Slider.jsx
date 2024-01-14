import React, { useState, useEffect } from "react";
import "./Slider.css";
import requests from "../../ApiRequestData";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../Store/cartSlice";
import { Link } from "react-router-dom";
const Slider = () => {
  const [info, setInfo] = useState([]);

  var tmdb = "https://api.themoviedb.org/3";
  const dispatch = useDispatch();
  var baseURL = "https://image.tmdb.org/t/p/original";
  const fetchedData = async () => {
    var myData = await axios.get(tmdb + requests.fetchNetflixOriginals);
    setInfo(myData.data.results[Math.floor(Math.random() * 20)]);
  };
  useEffect(() => {
    fetchedData();
    let interval = setInterval(() => {
      fetchedData();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const addTOCart = data => {
    // setCart([...cart, data]);
    dispatch(addCart(data));
    toast.success("Add Your Movie...")
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url(${baseURL}${info?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}>
        <div className="banner_content" style={{ color: "white" }}>
          <h2>
            {info?.title || info?.name || (
              <Skeleton
                count={1}
                highlightColor="#525252"
                width={"250px"}
                height={"40px"}
              />
            )}
          </h2>
          <div className="banner__buttons">
            <button className="inside_button" onClick={() => addTOCart(info)}>
              <i class="fa-solid fa-plus"></i> Add List
            </button>
            <Link to="/cart">
              <button className="inside_button">
                <i class="fa-solid fa-list"></i> My List
              </button>
            </Link>
          </div>

          <div className="movie_overview">
            {info?.overview || (
              <Skeleton count={4} width={"500px"} height={"20px"} />
            )}
          </div>
          <div className="movie_Rating" style={{ fontWeight: "600" }}>
            Rating : {info?.vote_average}/10
          </div>
        </div>
      </header>
    </>
  );
};

export default Slider;
