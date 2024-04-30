/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const dominio = document.getElementById("dominio");
  function domainGenerator() {
    let pronouns = ["the", "our"];
    let adjectives = ["great", "big"];
    let nouns = ["jogger", "racoon"];

    for (let pronoun of pronouns) {
      for (let adj of adjectives) {
        for (let noun of nouns) {
          let result = `<p>${pronoun}${adj}${noun}.com</p>`;
          dominio.innerHTML += result;
        }
      }
    }
  }
  domainGenerator();
};
