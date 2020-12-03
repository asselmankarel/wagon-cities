import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';

class App extends PureComponent {

  render() {
    const { selectedCity } = this.props;
    return (
      <div className="app">
        <CityList />
        {selectedCity !== null &&
          <div className="selected-city">
            <City city={selectedCity} key={selectedCity.name} />
          </div>
        }
      </div>
    );
  }
  
}

function mapReduxStateToProps(reduxState) {
  return { selectedCity: reduxState.selectedCity };
}

export default connect(mapReduxStateToProps)(App);
