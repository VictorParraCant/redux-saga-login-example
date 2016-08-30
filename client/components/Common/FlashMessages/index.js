import React, {Component, PropTypes as PT} from "react";
import { connect } from "react-redux";

import { deleteFlashMessage } from "actions/flashMessages";
import FlashMessage from "components/Common/FlashMessages/FlashMessage";

const FlashMessages = ({ messages, deleteFlashMessage }) => {

    const listMessages = messages.length > 0 ? messages.map(
        message =>
            <FlashMessage
                key={message.id}
                id={message.id}
                type={message.type}
                text={message.text}
                onClick={ (id) => deleteFlashMessage(id) } />
        ) : null;

    return (<div>{ listMessages }</div>);

};

FlashMessages.propTypes = {
    messages: PT.array.isRequired,
    deleteFlashMessage: PT.func
};

FlashMessages.defaultProps = {
    messages: [],
    deleteFlashMessage: () => {}
};

const mapStateToProps = state => ({
    messages: state.flashMessages
});

const mapDispatchToProps = dispatch => ({
    deleteFlashMessage: (id) => {
        dispatch(deleteFlashMessage(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);
