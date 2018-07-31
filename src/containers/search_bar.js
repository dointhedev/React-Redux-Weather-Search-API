import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from '../actions/index';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    Button,
    Form
} from 'reactstrap';
import './search_bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = e => {
        const term = (e.target.value);
        this.setState({term});
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.getWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <Container className="search">
                <Card className="mt-2 mb-3">
                    <CardHeader className="blue-bg text-white">
                        <h4>Search&nbsp;
                            <b>Weather</b>
                        </h4>
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center">
                        <Form inline className="input-group" onSubmit={this.onFormSubmit}>
                            <input
                                value={this.state.term}
                                onChange={this.onInputChange}
                                className="form-control"
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search Weather"/>
                            <span className="input-group-btn">
                                <Button type="submit" color="info">Search</Button>
                            </span>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWeather
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);