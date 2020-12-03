import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

class ActiveCity extends PureComponent {
  render() {
    const { selectedCity } = this.props;
    if (selectedCity) {
      const styles = { backgroundImage: `url('https://kitt.lewagon.com/placeholder/cities/${selectedCity.slug}'` };
      return (
        <div className="active-city" style={styles}>
          <p>{selectedCity.name}</p>
          <p>{selectedCity.address}</p>
        </div>
      );
    }
    return null;
  }
}

function mapReduxStateToProps(reduxState) {
  return { selectedCity: reduxState.selectedCity };
}

export default connect(mapReduxStateToProps)(ActiveCity);
