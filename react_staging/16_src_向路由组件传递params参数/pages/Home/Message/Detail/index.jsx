import React, {Component} from 'react';

const data = [
  {id: '01', content: '01内容'},
  {id: '02', content: '02内容'},
  {id: '03', content: '03内容'},
]

class Detail extends Component {

  render() {
    const {match: {params: {id}}} = this.props;
    const findResult = data.find((detailObj) => detailObj.id === id);
    return (
      <div>
        <ul>
          <li>ID:{findResult.id}</li>
          <li>TITLE:{findResult.title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

export default Detail;
