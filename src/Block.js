import React, {Component} from "react";
import {MegadraftPlugin, MegadraftIcons, DraftJS} from "megadraft";

import QnA from "./QnA";


const {BlockContent, CommonBlock, BlockInput} = MegadraftPlugin;


export default class QnABlock extends Component {
  constructor(props) {
    super(props);

    this.handleAddAnotherClick = ::this.handleAddAnotherClick;
    this.updateQuestion = ::this.updateQuestion;
    this.removeQuestion = ::this.removeQuestion;
    this.handleChangetitle = ::this.handleChangetitle;

    this.actions = [
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  handleAddAnotherClick(event) {
    event.preventDefault();
    this.props.container.updateData(
      {questions: this.props.data.questions.concat({key: DraftJS.genKey()})}
    );
  }

  handleChangetitle(e) {
    this.props.container.updateData({
      title: e.target.value,
    });
  }

  updateQuestion(key, field, value) {
    // Should we use immutable or helpers?
    for (let item of this.props.data.questions) {
      if (item.key === key) {
        item[field] = value;
      }
    }
    this.props.container.updateData({questions: this.props.data.questions});
  }

  removeQuestion(key) {
    // Should we use immutable or helpers?
    let questions = Array();
    for (let item of this.props.data.questions) {
      if (item.key !== key) {
        questions.push(item);
      }
    }
    this.props.container.updateData({questions: questions});
  }

  render(){
    return (
      <div className="question-and-answer__figure">
        <CommonBlock {...this.props} actions={this.actions}>
          <div className="title">
          <BlockInput
            placeholder="Title"
            value={this.props.data.title}
            styles={{padding: "small"}}
            onChange={this.handleChangetitle} />
          </div>

          <BlockContent className="with-padding">
            {this.props.data.questions.map((item) => {
              return (
                <QnA
                  key={item.key}
                  item={item}
                  updateQuestion={this.updateQuestion}
                  removeQuestion={this.removeQuestion}
                  {...this.props} />
              );
            })}
            <div className="markup-hints">
              <span className="italic">_italic_</span>
              <span className="bold">**bold**</span>
            </div>
            <div className="question-and-answer__add-new-wrapper">
              <a href="#"
                 onClick={this.handleAddAnotherClick}
                 className="question-and-answer__add-new">
                {__("Add Q & A")}
              </a>
            </div>
          </BlockContent>
        </CommonBlock>
      </div>
    );
  }
}
