import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux'
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {

  addPerson = () => {
    const personObj = {
      id: nanoid(),
      name: this.nameRef.value,
      age: this.ageRef.value
    }
    this.props.addPerson(personObj)
    this.nameRef.value = '';
    this.ageRef.value = '';
  }

  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <h3>上方求和为{this.props.sum}</h3>
        <input type="text" placeholder="输入名字" ref={c => this.nameRef = c}/>
        <input type="text" placeholder="输入年龄" ref={c => this.ageRef = c}/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personList.map((person) => <li key={person.id}>名字{person.name} -- 年龄{person.age}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({
  personList: state.person,
  sum: state.count
}), {
  addPerson: createAddPersonAction
})(Person);
