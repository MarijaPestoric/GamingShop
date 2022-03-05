import "./Card.css";

const Card = ({ firstName, lastName, photo, position, socials }) => {
  return (
    <div className="card">
      <div className="card__bg"></div>
      <img
        src={`/images/team/${photo}`}
        className="card__img"
        alt={`${firstName} ${lastName} team member`}
      />
      <div className="card__content">
        <h2 className="card__fullName">
          {firstName} {lastName}
        </h2>
        <h3 className="card__position">{position}</h3>

        <div className="card__socials">
          {socials.map(({ name, url }) => (
            <a className="social-link" href={url} target="_blank">
              <img className="social-icon" src={`/images/icons/${name}.svg`}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
