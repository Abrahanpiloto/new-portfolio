import styled from "styled-components";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ image, title, description, link, code, ad }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledWrapper>
      <div className="card">
        <img
          src="/ragapp/Macbook-Air2.webp"
          className="card_image"
          alt="work_linkbridge"
        />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <div
            className={`card__description-wrap ${expanded ? "expanded" : ""}`}
          >
            <p className="card__description">{description}</p>
          </div>
          <button
            type="button"
            className="card__toggle"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Leer menos" : "Leer más"}
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card__button"
          >
            Ver Demo
            <FaExternalLinkAlt className="text-xs" />
          </a>
          <p className="ad">{ad}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .card {
    padding: 4px;
    position: relative;
    width: 70%;
    aspect-ratio: 16/9;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    min-height: 260px; /* altura base */
  }

  .card > svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__button svg {
    width: auto;
    height: 1em;
    fill: currentColor;
    transition: none;
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
    padding: 30px;
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
    margin-top: 18px;
    // margin: 0;
    font-size: 16px;
    color: #000000;
    font-weight: 700;
  }

  .card:hover > svg {
    scale: 0;
  }

  .card__description {
    margin: 8px 8px 8px 0px;
    font-size: 14px;
    color: #000606;
    line-height: 1.2;
    white-space: pre-line;
  }

  .card__button {
    // margin-top: 35px;
    // margin-left: 15px;
    padding: 6px 36px;
    border-radius: 5px;
    background: #000606;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .card__button:hover {
    background: blue;
  }

  .card__toggle {
    display: none;
  }

  .ad {
    color: gray;
    line-height: 1;
    margin-top: 8px;
    font-size: 12px;
  }

  .secondary {
    background: transparent;
    color: #777;
    border: 1px solid #777;
  }
  @media (max-width: 640px) {
    .card {
      width: 95%;
      flex-direction: column;
      aspect-ratio: auto;
      height: auto;
      padding: 6px;
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

    .card__description-wrap {
      display: grid;
      grid-template-rows: 3.6em;
      transition: grid-template-rows 0.6s ease;
      margin-bottom: 0.75rem;
    }

    .card__description-wrap.expanded {
      grid-template-rows: 1fr;
    }

    .card__description-wrap .card__description {
      overflow: hidden;
      min-height: 0;
      margin: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .card__description-wrap.expanded .card__description {
      -webkit-line-clamp: unset;
    }

    .card__description {
      font-size: 1rem;
    }

    .card__toggle {
      display: block;
      margin-bottom: 0.75rem;
      padding: 0;
      border: none;
      background: none;
      font-size: 0.9rem;
      font-style: italic;
      color: blue;
      cursor: pointer;
    }

    .card__toggle:hover {
      text-decoration: underline;
    }

    .card__button {
      margin-left: 0;
      margin-right: 10px;
    }

    .card > svg {
      display: none;
    }
  }
`;

export default Card;
