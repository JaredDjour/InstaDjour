import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostShowContainer from "../../components/posts/post_show_container"

const mapStateToProps = (state) => {
   
    return {
        modal: state.ui.modal,
        posts: state.entities.posts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

function Modal({ modal, closeModal, item}) {
    if (!modal) {
        return null;
    }
    // debugger
  
    let component;
    // switch (modal) {
    // switch (Object.keys(modal)[0]) {
        switch (modal[0]) {
            case 'showPost':
            // component = <PostShowContainer post={modal.showPost}/>;
            component = <PostShowContainer post={modal[1]}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}



export default connect(mapStateToProps, mapDispatchToProps)(Modal);