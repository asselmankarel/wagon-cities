import React, { PureComponent } from 'react';

class City extends PureComponent {
  render() {
    const { city } = this.props;
    const styles = { backgroundImage: `url('https://kitt.lewagon.com/placeholder/cities/${city.slug}'` };

    return (
      <div className="city" style={styles}>
        <p>{city.name}</p>
        <p>{city.address}</p>
      </div>
    );
  }
}

export default City;
