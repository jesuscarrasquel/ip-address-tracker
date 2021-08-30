import React, { useState } from "react";
import { connect } from "react-redux";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

import { iconPerson } from 'components/Icon';



const MapView = (props) => {

  const { usuarios } = props;
  
  return (
    <>
      {usuarios !== undefined && (
        <MapContainer
          center={{
            lat: `${usuarios.location.lat}`,
            lng: `${usuarios.location.lng}`,
          }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={{
              lat: `${usuarios.location.lat}`,
              lng: `${usuarios.location.lng}`,
            }}

            // icon={iconPerson}
          >
            <Popup>{usuarios.as.name}</Popup>
          </Marker>
          {console.log(usuarios.location.lat, "entre")}
        </MapContainer>
      )}

      {/* {console.log(usuarios)} */}
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuarioReducer;
};

export default connect(mapStateToProps, null)(MapView);
