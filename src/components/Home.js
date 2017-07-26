import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class Home extends Component {
  render() {
    // INLINE STYLING
    let servicesStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/def.jpeg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row radius" style={servicesStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              Services
            </h2>
            <hr/>
            <li className="primary-text bullet">
              Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor.\</li>
            <li className="primary-text bullet">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo. 
            </li>
            <li className="primary-text bullet">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo. 
            </li>
            <li className="primary-text bullet">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo. 
            </li>
          </article>
        </section>
      </div>
    );
  }
}