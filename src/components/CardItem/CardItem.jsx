import React, {useState} from 'react'
import './CardItem.scss'

const CardItem = ({title, content, thumbnail, author, onCardClick, index}) => {
    const [learnMoreButton, setLearnMoreButton] = useState(false);

    const onCardHoverIn = () => {
        setLearnMoreButton(true);
    };
    const onCardHoverOut = () => {
        setLearnMoreButton(false);
    };
    const onCardClicked = () => {
        onCardClick(index);
    };

    return (
        <div>
            <div className="card"
                 onMouseEnter={() => onCardHoverIn()}
                 onMouseLeave={() => onCardHoverOut()}>
                <div className="card-thumbnail-container" onClick={() => onCardClicked()}>
                    <img src={thumbnail.small} className="card-img" alt="Default"/>
                    <div className="learn-more-overlay">
                        <h2>Learn More</h2>
                    </div>
                </div>
                <div className="card-body text-dark">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text text-muted">{content}</p>
                    <div className="card-text-user">
                        <div className="row-user-info">
                            <div className="row-span">
                                <p className="text-muted">{author.name}</p>
                                <span className="text-muted my-span">-</span>
                                <p className="text-muted">{author.role}</p>
                            </div>
                            <div>
                                <p className="text-muted">Nov 25,2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardItem;
