import React, {Component} from "react";
import {DraftJS, insertDataBlock} from "megadraft";

import Icon from "./icon.js";
import constants from "./constants";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {
      questions: [{key: DraftJS.genKey()}],
      type: constants.PLUGIN_TYPE,
      title: '',
    };
    this.props.onChange(insertDataBlock(this.props.editorState, data));
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick} title={this.props.title}>
        <Icon className="sidemenu__button__icon" />
      </button>
    );
  }
}
