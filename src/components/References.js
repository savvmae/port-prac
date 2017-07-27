import React, { Component } from 'react';

class References extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let style = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/project.jpeg)",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
      "borderRadius": "50px"
    }
    let subHeadings = {
      "color": "#fff",
    }

    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <section className="row findus" style={style}>
          <div className="col-lg-8 map">
            <h3 className="headings" style={subHeadings}>Reference</h3>
            <ul>
            <li className="primary-text">Name: bob </li>
            <li className="primary-text">Phone: 765-444-2222</li>
            <li className="primary-text">Email: fdjslfjdlfj@fjdsklfjs.com</li>
            </ul>
            <p className="primary-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, veniam repellendus quibusdam accusamus animi nostrum! At aliquam culpa ipsa error doloribus omnis, fugit placeat! Perspiciatis sed assumenda hic, odio modi.</p>
      </div>
    </section>
    <section className="row findus" style={style}>
          <div className="col-lg-8 map">
            <h3 className="headings" style={subHeadings}>Reference</h3>
            <ul>
            <li className="primary-text">Name: bob </li>
            <li className="primary-text">Phone: 765-444-2222</li>
            <li className="primary-text">Email: fdjslfjdlfj@fjdsklfjs.com</li>
            </ul>
            <p className="primary-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, veniam repellendus quibusdam accusamus animi nostrum! At aliquam culpa ipsa error doloribus omnis, fugit placeat! Perspiciatis sed assumenda hic, odio modi.</p>
      </div>
    </section>
        <section className="row findus" style={style}>
          <div className="col-lg-8 map">
            <h3 className="headings" style={subHeadings}>Reference</h3>
            <ul>
            <li className="primary-text">Name: bob </li>
            <li className="primary-text">Phone: 765-444-2222</li>
            <li className="primary-text">Email: fdjslfjdlfj@fjdsklfjs.com</li>
            </ul>
            <p className="primary-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, veniam repellendus quibusdam accusamus animi nostrum! At aliquam culpa ipsa error doloribus omnis, fugit placeat! Perspiciatis sed assumenda hic, odio modi.</p>
      </div>
    </section>
  </div>
    );
  }
}

export default References;