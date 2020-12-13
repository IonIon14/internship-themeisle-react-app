import React from 'react'
import './CardModal.scss'

const CardModal = ({selectedCard, onModalClose}) => {
    const hideModal = () => {
        onModalClose();
    };

    return (
        <>
            {selectedCard &&
            <div className="modal fade show zoom" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={() => hideModal()} data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={selectedCard.thumbnail.small} className="card-img" alt="Default"/>
                            <h2 className="card-title">{selectedCard.title}</h2>
                            <p className="card-text text-muted">{selectedCard.content}</p>
                        </div>
                        <div className="modal-footer">
                            <div className="card-text-user">
                                <div className="row-user-info">
                                    <div className="row-span">
                                        <img src={selectedCard.author.avatar} alt='avatar'/>
                                        <p className="text-muted">{selectedCard.author.name}</p>
                                        <span className="text-muted my-span">-</span>
                                        <p className="text-muted">{selectedCard.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default CardModal;
