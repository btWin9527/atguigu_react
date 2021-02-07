import React, {Component} from 'react';

// import qs from 'querystring';

const data = [
  {id: '01', content: '01内容'},
  {id: '02', content: '02内容'},
  {id: '03', content: '03内容'},
]

class Detail extends Component {

  render() {
    // 接收params参数
    // const {match: {params: {id}}} = this.props;
    // 接收search参数
    // const {location: {search}} = this.props;
    // const {id, title} = qs.parse(search.slice(1));
    console.log(this.props, 'props')
    // 接收state参数 (清缓存刷新会数据丢失)
    // const {id, title} = this.props.location.state || {};
    const {id, title} = this.props.location.state || {};
    const findResult = data.find((detailObj) => detailObj.id === id) || {};
    return (
      <div>
        <ul>
          <li>ID:{findResult.id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

export default Detail;
