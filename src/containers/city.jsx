import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { selectCity } from '../actions';

class City extends PureComponent {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    const { city } = this.props;
    const styles = { backgroundImage: `url('https://kitt.lewagon.com/placeholder/cities/${city.slug}'` };

    return (
      <div style={styles} onClick={this.handleClick} role="button" tabIndex={0}>
        <p>{city.name}</p>
        <p>{city.address}</p>
      </div>
    );
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCity
  }, dispatch);
}

function MapReduxStateToProps() {

}

export default connect(MapReduxStateToProps, MapDispatchToProps)(City);
