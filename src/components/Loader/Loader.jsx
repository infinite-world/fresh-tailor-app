import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const SimpleBackdrop = ({ isLoading }) => {
    const classes = useStyles();

    return (
        <div className={isLoading ? "d-block" : "d-none"}>
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLoading: state.LoadingReducer.isLoading
    }
}
export default connect(mapStateToProps, null)(SimpleBackdrop);