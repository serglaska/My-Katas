import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // function disemvowel(str) {
  //   let count = str.length;
  //   var arr = "";
  //   for (let i = 0; i < count; i++) {
  //     if ("aioue".includes(str[i].toLowerCase())) continue;
  //     arr += str[i];
  //   }
  //   return arr;
  // }
  // ///////////////////////////////////////////////
  // function array_diff(a, b) {
  //   var arrReturn = [];
  //   var lengthArr = a.length;
  //   for (let i = 0, j = 0; i < lengthArr; i++, j++) {
  //     if (b.includes(a[j]))
  //     {i--; lengthArr--; continue;}
  //     arrReturn[i] = a[j];
  //   }
  //   console.log('lenght', a.length);
  //   return arrReturn;
  // }

  // console.log(array_diff([1, 2, 5, 5, 9], [2,5]));

  // //////////////////////////////////////////////
  // function openOrSenior(data) {
  //   let newData = data.map((age) => {
  //     if (age[0] > 54 && age[1] > 6) return "Senior";
  //     return "Open";
  //   });
  //   return newData;
  // }

  // console.log(
  //   openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]])
  // );
  // //////////////////////////////////////////////
  // function toCamelCase(str) {
  //   let newStr = "";
  //   let trick = true;
  //   for (let i = 0; i < str.length; i++) {
  //     if ("_-".includes(str[i])) {
  //       trick = false;
  //       continue;
  //     }
  //     if (trick === false) {
  //       newStr += str[i].toUpperCase();
  //       trick = true;
  //       continue;
  //     }
  //     newStr += str[i];
  //   }
  //   return newStr;
  // }
  // /////////////////////////////////////////////////
  // var isSquare = function (n) {
  //  if (true === Number.isInteger(Math.sqrt(n))) return true;
  //  return false;
  // }

  // <div class="flex-parent">
  //   <div class="long-and-truncated">
  //     1. This is a long string that is OK to truncate please and thank you
  // </div>
  //   <div class="flex-child short-and-fixed">
  //     <div />
  //     <div />
  //     <div />
  //   </div>
  // </div>

  // <div class="flex-parent">
  //   <div class="long-and-truncated">
  //     1. This is a long string that is OK to truncate please and thank you
  // </div>
  //   <div class="flex-child short-and-fixed">
  //     <div />
  //     <div />
  //     <div />
  //   </div>
  // </div>

  // isogram
  function isIsogram(str) {
    for (let i = 0; i < str.length; i++) {}
  }
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
