import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Cards = ({ fetchURL, title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movies, setMovies] = useState([]);
  const [modalData, setModalData] = useState({});

  var tmdb = "https://api.themoviedb.org/3";

  var baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchedFile = async () => {
      var movieData = await axios.get(tmdb + fetchURL);
      if (movieData.data.results) {
        setMovies(movieData.data.results);
      } else {
        setMovies([]);
      }
      console.log(movieData);
    };

    fetchedFile();
  }, [tmdb + fetchURL]);

  const showModalData = data => {
    console.log(data);
    handleShow();
    let newData = JSON.parse(JSON.stringify(data));
    setModalData(newData);
  };

  if (movies.length === 0) return;
  console.log(baseURL, "hello:::::::");

  return (
    <>
      <div className="title">{title}</div>
      <div className="main_box">
        <div className="shortPosters">
          {movies.map((movie, i) => {
            const { poster_path, id, backdrop_path, title } = movie;
            return (
              <div
                key={id}
                style={{ margin: "10px", position: "relative" }}
                onClick={() => showModalData(movie)}
                className="myCard">
                {poster_path ? (
                  <img
                    src={baseURL + poster_path}
                    alt={id}
                    style={{ width: "200px", height: "100%" }}
                  />
                ) : (
                  <Skeleton
                    count={1}
                    highlightColor="#525252"
                    width={"200px"}
                    height={"300px"}
                  />
                )}
                <button
                  type="button"
                  class="btnModal"
                  data-toggle="modal"
                  style={{
                    backgroundColor: "#3498db",
                    color: "#fff",
                    padding: "5px 5px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                  }}
                  data-target="#exampleModal"
                  onClick={() => showModalData(movie)}>
                  More Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        {/* <Modal.Header className="dark-modal">
          <Modal.Title>
           <b>{modalData.title || modalData.original_name}</b> 
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="dark-modal">
          <div className="modalBackGroundImage">
            <img
              src={baseURL + modalData.backdrop_path}
            />
          </div>
          <br/>
          <div><h4><b>{modalData.title || modalData.original_name}</b></h4></div>
          <div>
            <b>Release Date</b> :{" "}
            {modalData.release_date || modalData.first_air_date}
          </div>
          <div>
            <b>Rating</b> : {modalData.vote_average} / <b>10</b>
          </div>
          <br />
          <div>{modalData.overview}</div>
          <div className="modalButtons">
            <Button variant="danger" onClick={handleClose}>
              Favourite <i className="fa-regular fa-heart"></i>
            </Button>
            <Button variant="info" onClick={handleClose}>
              Add To List <i className="fa-solid fa-plus"></i>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cards;
