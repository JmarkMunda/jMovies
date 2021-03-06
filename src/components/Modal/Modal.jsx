import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const Modal = ({ isOpen, setIsOpen, movie }) => {
  const [fullMovieDetails, setFullMovieDetails] = useState({});

  const DETAILS_API = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await axios.get(DETAILS_API);
        const details = await data.data;
        setFullMovieDetails(details);
      } catch (err) {
        console.log("Fetch Details", err);
      }
    };
    fetchDetails();
    return () => {
      setFullMovieDetails({});
    };
  }, []);

  const renderTrailer = () => {
    const trailer = fullMovieDetails.videos.results.find(
      (video) => video.type === "Trailer"
    );

    if (typeof trailer !== "undefined")
      return (
        <YouTube
          opts={{ width: "100%", height: "390" }}
          videoId={trailer.key}
        />
      );
  };

  return (
    <div
      className={isOpen ? "modal-background" : "inactive-modal"}
      onClick={() => setIsOpen(false)}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Youtube */}
        {Object.keys(fullMovieDetails).length !== 0 &&
        typeof fullMovieDetails.videos.results !== "undefined" &&
        fullMovieDetails.videos.results !== 0
          ? renderTrailer()
          : console.log("cant render trailer")}

        {/* Genres */}
        <div className="modal-header">
          <h1 className="title">{fullMovieDetails.title}</h1>
          <div className="genre-list">
            {Object.keys(fullMovieDetails).length !== 0
              ? fullMovieDetails.genres.map((genre) => (
                  <p key={genre.id} className="genre">
                    {genre.name}
                  </p>
                ))
              : null}
          </div>
        </div>
        <p className="overview">{fullMovieDetails.overview}</p>
        <p className="status">
          <span>Status: </span> {fullMovieDetails.status}
        </p>
        <p className="released-date">
          <span>Released Date: </span> {fullMovieDetails.release_date}
        </p>
        <p className="homepage">
          <span>Homepage: </span>
          {fullMovieDetails.homepage}
        </p>
        <div className="production-companies">
          {Object.keys(fullMovieDetails).length !== 0
            ? fullMovieDetails.production_companies.map(
                (logo) =>
                  logo.logo_path && (
                    <img
                      key={logo.id}
                      style={{
                        width: "10%",
                        height: "10%",
                        padding: "10px",
                      }}
                      src={`https://image.tmdb.org/t/p/original${logo.logo_path}`}
                    />
                  )
              )
            : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
