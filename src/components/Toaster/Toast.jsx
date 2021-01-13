import React from 'react';
import toast from 'react-toast-notification';
import { connect } from "react-redux";

const Toast = ({ Responsemessage }) => {

    return (
        <div className={Responsemessage ? "d-block animate__animated animate__fadeIn" : "d-none"}>
            {Responsemessage.type === 'success' ? toast.success(Responsemessage.msg) : toast.error(Responsemessage.msg)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        Responsemessage: state.ResponseReducer.message
    }
}

export default connect(mapStateToProps, null)(Toast);