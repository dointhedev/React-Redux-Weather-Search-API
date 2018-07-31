import React, {Component} from 'react';
import {Container, Card, CardHeader, CardBody, Table} from 'reactstrap';
import {connect} from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }

    render() {
        return (
            <Container>
                <Card className="table-wrapper mt-4 mb-3">
                    <CardHeader className="table-title blue-bg text-white">
                        <div>
                            <h4>These are your
                                <b>&nbsp;Cities</b>
                            </h4>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table id="wethTable" striped hover bordered>
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Temperature</th>
                                    <th>Pressure</th>
                                    <th>Humidity</th>
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
