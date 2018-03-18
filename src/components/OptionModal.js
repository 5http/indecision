import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearOption}
        contentLabel='Selected option'
        closeTimeoutMS={250}
        className='modal'
    >
        <h3 className='modal__title'>First things first</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button
            className='button'
            onClick={props.clearOption}
        >Let's do it!</button>
    </Modal>
)

export default OptionModal;
