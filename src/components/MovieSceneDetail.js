import { Link } from 'react-router-dom';
import MovieSceneNotFound from './MovieSceneNotFound';
const MovieSceneDetail = (props) => {
  return (
    <>
      {props.movie === undefined ? (
        <MovieSceneNotFound />
      ) : (
        <div className="detail">
          <img
            className="detail__image"
            alt={'Scene'}
            src={props.movie.poster}
          />
          <div className="detail__box">
            <h4 className="detail__box--title">{props.movie.movie}</h4>
            <p className="detail__box--quote">{props.movie.quote}</p>
            <p className="detail__box--director">
              Director: {props.movie.director}
            </p>

            <p className="detail__box--audio">
              <i class="fa-solid fa-volume detail__box--audio--vol"></i>
              <a
                href={props.movie.audio}
                target="_blank"
                rel="noreferrer"
                className="detail__box--audio "
              >
                Listen to audio
              </a>
            </p>
            <Link to="/" className="detail__back">
              <i class="fa-solid fa-arrow-left detail__back--arrow"></i>
              Back
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieSceneDetail;
