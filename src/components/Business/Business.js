import React from "react";
import "./Business.css";

class Business extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.geoLocation = this.geoLocation.bind(this);
  // }
  // geoLocation(place) {
  //   return `https://maps.google.com/?q=${place}`;
  // }

  render() {
    const { business } = this.props;
    return (
      // https://maps.google.com/?q=term
      <a class="business-link-wrap" href={business.url} target='_blank'>
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt="" />
        </div>
        <h2> {business.name} </h2>
        <div className="Business-information">
          <div className="Business-address">
            <p> {business.address} </p>
            <p> {business.city} </p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3> {business.category.toUpperCase()} </h3>
            <h3 className="rating">{`${business.rating}stars`}</h3>
            <p>{`${business.reviewCount}
              reviews`}</p>
          </div>
        </div>
      </div>
      </a>
    );
  }
}

export default Business;
