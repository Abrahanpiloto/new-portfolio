import styled from "styled-components";

const Card = ({ image, title, description, link, code }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} className="card_image" alt="work_linkbridge" />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card__button"
          >
            Ir al sitio
          </a>
          {/* <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="card__button secondary"
          >
            Ver codigo
          </a> */}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 350px;
    aspect-ratio: 16/9;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #000000;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 10px 10px 10px;
    font-size: 12px;
    color: #777;
    line-height: 1.4;
  }

  .card__button {
    // margin-top: 35px;
    margin-left: 15px;
    padding: 10px;
    border-radius: 8px;
    background: #777;
    border: none;
    color: white;
    cursor: pointer;
  }

  .secondary {
    background: transparent;
    color: #777;
    border: 1px solid #777;
  }
  @media (max-width: 640px) {
    .card {
      flex-direction: column;
      aspect-ratio: auto;
      height: auto;
    }

    .card_image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card__content {
      position: static;
      transform: none !important;
      background-color: transparent;
      padding: 16px;
    }

    .card__title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .card__description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .card__button {
      margin-left: 0;
      margin-right: 10px;
    }

    .card svg {
      display: none;
    }
  }
`;

export default Card;
