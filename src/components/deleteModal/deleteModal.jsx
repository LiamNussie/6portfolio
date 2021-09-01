import React from 'react';
import './deleteModal.scss';

const DeleteModal = ({setDeleteModal, deletePost, postId}) => {
    return ( 
        <div className="delete-modalx">
            <div className="wrapperx">
                <div className="modalx">
                    <p className="titx">ARE YOU SURE YOU WANT TO DELETE?</p>
                    <div className="btns">
                        <button onClick={() => setDeleteModal()}>CANCEL</button>
                        <button onClick={() => deletePost(postId)}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DeleteModal;