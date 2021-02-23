import {ADD_PERSON} from "../constant";

const initState = [
  {name: 'tom', age: 18, id: '001'},
];

export default function personReducer(preState = initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      // return返回值是进行的浅拷贝比较，需要返回不同于preState的新值
      return [data, ...preState];
    default:
      return preState;

  }
}
