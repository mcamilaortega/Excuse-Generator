/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = [" A ", " The "];
  let subject = [" person ", " cat ", " dog ", " comedian "];
  let action = [" took my ", " eat my ", " trew my ", " bit my "];
  let object = [" homework ", " toe ", " car ", " shoe "];
  let where = [" on the stret ", " in my house ", " at the park "];

  let pronounindex = Math.floor(Math.random() * pronoun.length);
  let subjectindex = Math.floor(Math.random() * subject.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let objectindex = Math.floor(Math.random() * object.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounindex] +
    "" +
    subject[subjectindex] +
    "" +
    action[actionindex] +
    "" +
    object[objectindex] +
    "" +
    where[whereindex] +
    ""
  );
};
