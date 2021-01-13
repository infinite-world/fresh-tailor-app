import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from "react-redux";

const Toast = ({ Responsemessage }) => {

    const success = (msg) => toast(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "success"
    });

    const error = (msg) => toast(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error"
    });

    return (
        <div>
            {Responsemessage.type === 'success' ? success(Responsemessage.msg) : error(Responsemessage.msg)}
            <ToastContainer />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        Responsemessage: state.ResponseReducer.message
    }
}

export default connect(mapStateToProps, null)(Toast);