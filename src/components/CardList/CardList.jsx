import React, {useState} from 'react'
import CardItem from "../CardItem/CardItem";
import CardModal from "../CardModal/CardModal";
import './CardList.scss'

const CardList = ({posts}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const showModal = (index) => {
        setModalVisible(true);
        setSelectedCard(posts[index]);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <div className={`container ${modalVisible ? "modal-background-effect" : ""}`}>
                <div className="cards">
                    <div className="row">
                        {posts.map((card, index) => {
                            return <CardItem onCardClick={() => showModal(index)}
                                             key={index}
                                             id={card.id}
                                             date={card.date}
                                             title={card.title}
                                             content={card.content}
                                             thumbnail={card.thumbnail}
                                             author={card.author}
                                             index={index}
                            />
                        })}
                    </div>
                </div>
            </div>
            {modalVisible && <CardModal selectedCard={selectedCard} onModalClose={() => closeModal()}/>}
        </div>
    );
};

export default CardList;
