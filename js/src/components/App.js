import React, { Component } from 'react';
import GMaps, { Marker } from './taqsMap';

export default class App extends Component {
    render() {
        return <GMaps {...this.props} apiKey={"AIzaSyAdHdePExLrWT5do9Y1bdQ72HIlSWpCOG0"} center={{ lat: 35.996023, lng: 36.784644 }}>
            <Marker position={{lat: position.coords.latitude, lng: position.coords.latitude}} animation="DROP" />
        </GMaps>;
    }
}
