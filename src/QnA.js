import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";

import BlockText from "./BlockText";

const {BlockInput} = MegadraftPlugin;


export default class QA extends Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = ::this.handleTitleChange;
    this.handleLinkChange = ::this.handleLinkChange;
    this.handleDeleteClick = ::this.handleDeleteClick;
  }

  handleTitleChange(event) {
    this.props.updateQuestion(this.props.item.key, "title", event.target.value);
  }

  handleLinkChange(event) {
    this.props.updateQuestion(this.props.item.key, "link", event.target.value);
  }

  handleDeleteClick(event) {
    this.props.removeQuestion(this.props.item.key);
  }

  render() {
    return (
      <div className="question-and-answer">
        <div className="question-and-answer__inputs">
          <BlockInput
            placeholder={__("Question")}
            styles={{padding: "small", text: "big"}}
            value={this.props.item.title}
            onChange={this.handleTitleChange} />
          <BlockText
            placeholder={__("Answer")}
            value={this.props.item.link}
            styles={{padding: "small"}}
            onChange={this.handleLinkChange} />
        </div>
        <div className="question-and-answer__trash" onClick={this.handleDeleteClick}>
          <MegadraftIcons.DeleteIcon/>
        </div>
      </div>
    );
  }
}
