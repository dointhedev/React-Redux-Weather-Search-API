import React, {Component} from 'react';
import {Container, Card, CardHeader, CardBody, Table} from 'reactstrap';
import Chart from '../components/chart';
import GoogleMap from'../components/google_map';
import {connect} from 'react-redux';
import './weather.css';

class WeatherList extends Component {
    renderWeather(cityData) {
        const ID = cityData.city.id;
        const TEMPS = cityData.list.map(weather => weather.main.temp);
        const PRESS = cityData.list.map(weather => weather.main.pressure);
        const HUMID = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={ID} className="align-middle">
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={TEMPS} color="red" units="K" /></td>
                <td><Chart data={PRESS} color="green" units="hPa"/></td>
                <td><Chart data={HUMID} color="blue" units="%"/></td>
            </tr>
        );
    }
    render() {
        return (
            <Container>
                <Card className="table-wrapper mt-4 mb-3">
                    <CardHeader className="table-title blue-bg text-white">
                        <div>
                            <h4>5 Day
                                <b>&nbsp;Forecast</b>
                            </h4>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table id="wethTable"   className="text-center" striped hover bordered>
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Temperature (K)</th>
                                    <th>Pressure (hPa)</th>
                                    <th>Humidity (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this
                                    .props
                                    .weather
                                    .map(this.renderWeather)}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
