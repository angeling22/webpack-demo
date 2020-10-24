// CommonJS spec require : 가져오기, export : 배포
// CommonJS 자바스크립트 모듈화
const _ = require('lodash');
import './style.css';
import './hello.scss';
//es 모듈화의 named import
import {area, circumference} from "./js/circle";

// 이름을 바꿀수 있음
import cube from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!', area(5), ' ', circumference(5)],' ');

  return element;
}

console.log(cube(5));

document.body.appendChild(component());