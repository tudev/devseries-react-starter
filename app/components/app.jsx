import React from 'react';

// Loads styles for this component into the DOM
import styles from './_app.scss';

export default class App extends React.Component {
  render() {
    return (
      <body>
        <header>
          <div className="hamburger">
            <i className="material-icons">&#xE5D2;</i>
          </div>
          <div className="title">React Starter</div>
        </header>
        <main>Hello World</main>
      </body>
    );
  }
}