import React, {Component} from "react";
import classNames from "classnames";

import {MegadraftIcons} from "megadraft";


export default class BlockInput extends Component {
  renderError(error) {
    if (!error) {
      return;
    }
    return (
      <div className="block__input__error-text">{error}</div>
    );
  }

  handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  render(){
    let {value, error, styles, ...props} = this.props;
    styles = styles || {};

    let className = classNames({
      "block__input": true,
      "block__input--empty": !value,
      "block__input--error": error,
      [`block__input--${styles.padding}-padding`]: styles.padding,
      [`block__input--${styles.text}-text`]: styles.text
    });

    return (
      <div className="block__input__row">
        <div className="block__input__wrapper">
          <textarea {...props} value={value} type="text" className={className} onDrop={this.handleDrop}/>
        </div>
        {this.renderError(error)}
      </div>
    );
  }
}
