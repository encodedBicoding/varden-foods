import React, { Component} from "react";
import { Carousel } from 'react-bootstrap';
const Homepage = () => {
    return (
      <div className="container-fluid">
				<div className="home-container">
					<HomeComponent />
				</div>
      </div>
    )
}

class HomeComponent extends Component {
  state = {
    photos: [
      {
        filename: 'chicken_full.jpeg',
        alt: 'Chicken full'
      },
      {
        filename: 'chilli_peppers.jpeg',
        alt: 'Chilli Peppers'
      },
      {
        filename: 'garden_eggs.jpeg',
        alt: 'Garden Eggs'
      },
      {
        filename: 'sweet_melon.jpg',
        alt: 'Sweet Melon'
      },
      {
        filename: 'eggs.jpg',
        alt: 'Eggs'
      },
      {
        filename: 'fresh_pepper.jpg',
        alt: 'Fresh Pepper'
      },
      {
        filename: 'pepper.jpg',
        alt: 'More Fresh Pepper'
      },
      {
        filename: 'spicy.jpg',
        alt: 'Red hot pepper'
      },
      {
        filename: 'water_melon.jpg',
        alt: 'Green Pepper'
      },
      {
        filename: 'plantain.jpg',
        alt: 'Plantains'
      },
      {
        filename: 'Carrots.jpeg',
        alt: 'Carrots'
      }
  ]
  }
	render() {
    const carousel = this.state.photos.map ( photo => (
      <Carousel.Item key={photo.alt}>
        <img
        className="d-block w-90"
        src={`/src/Images/${photo.filename}`}
        alt={photo.alt}
        height="500px"
        >
        </img>
        <Carousel.Caption key={photo.alt}>
          <h3 id="carousel-caption">{photo.alt}</h3>
          <button className="btn btn-primary">Order Now!</button>
        </Carousel.Caption>
      </Carousel.Item>
    ))
		return (
			<div className="container-fluid">
					<div className="home-component">
            <div className="home-content">
              <Carousel>
                { carousel }
              </Carousel>
            </div>
            <div className="how-to-container">
                <div className="how-to-content">
                      <h4>How to Use</h4>
                </div>
            </div>
					</div>
			</div>
		)
	}
}

export default Homepage;