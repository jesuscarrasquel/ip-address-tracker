import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "assets/css/Home/home.css";
import { Row, Col, Input } from "reactstrap";
import iconArrow from "assets/img/icon-arrow.svg";
import MapView from "components/MapView";
import * as usuariosActions from "actions/usuariosActions";

const Home = (props) => {

    const {usuarios, domainLocation, traerTodos, ipLocation} = props;

    const [busqueda, setBusqueda] = useState('');

    const handleClick = async () => {

      if(isNaN(busqueda)) {

        await domainLocation(busqueda)

      }else {

        await ipLocation(busqueda)

      }


    }

  useEffect(() => {
    traerTodos();
  }, []);

  return (
    <div id="home">
      <div className="card-container">
        <Row>
          <Col md="12" className="search-container">
            <h1 className="tracker-title">IP Address Tracker</h1>
          
          <div className="search-main-container">

            <Input
              className="search"
              placeholder="Search for any IP address or domain"
              name="busqueda"
              onChange={(e) => setBusqueda(e.target.value)}
              value={busqueda}
            />

            <button className="search-buttom" onClick={handleClick}>
              <img src={iconArrow} alt="Icono flecha" />
            </button>
          </div>

          </Col>
        </Row>

        {usuarios !== undefined && (
          <Row className="row-results">
            <Col md="8"  className="results-container">
              <Row className="result-items">
                <Col md="2">
                  <span className="title-results">IP ADDRESS</span> <br />
                  <span className="results">{usuarios.ip}</span>
                </Col>
                <Col md="2">
                  <span className="title-results">LOCATION</span> <br />
                  <span className="results">
                    {usuarios.location.city}
                  </span>
                </Col>
                <Col md="2">
                  <span className="title-results">TIMEZONE</span> <br />
                  <span className="results">
                    {usuarios.location.timezone}
                  </span>
                </Col>
                <Col md="2">
                  <span className="title-results">ISP</span> <br />
                  <span className="results">{usuarios.isp}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        )}

        <Row className="row-map-container">
          <Col md="12" className="map-container" id="map-container">
            <MapView />
          </Col>
        </Row>
      </div>
      {console.log(props)}
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuarioReducer;
};

// const mapDispatchToProps = {
//     ...usuariosActions,
//     ...publicacionesActions
// }

export default connect(mapStateToProps, usuariosActions)(Home);
