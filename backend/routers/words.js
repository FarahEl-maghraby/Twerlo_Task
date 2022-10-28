const express = require("express");
const router = express.Router();
const data = require("../data/TestData.json");

// Get 10 random objects

router.get("/words", async (req, res) => {
  try {
    // Sort array randomly
     const randomData = data.wordList
    .sort(()=>0.5-Math.random())

    /* 
    Insure that array has at least one place reserved for each type
     -1 adjective, 1 adverb, 1 noun, and 1 verb-
    */
    let result = new Array()
    let adj = 1
    let adverb =1 
    let noun = 1
    let verb = 1
    let numberOfQuestions = 10
    let reserved
    for(let i =0;i<randomData.length;i++){
      let type = randomData[i].pos 
      reserved = adj + adverb + noun + verb

      if(type == 'adjective'){
        if(adj != 0){
          result.push(randomData[i])
          adj --
        }
        else if(reserved + result.length < numberOfQuestions){
          result.push(randomData[i])
        }
      }

      else if(type == 'noun'){
        if(noun != 0){
          result.push(randomData[i])
          noun --
        }
        else if(reserved + result.length < numberOfQuestions){
          result.push(randomData[i])
        }
      }


      else if(type == 'adverb'){
        if(adverb != 0){
          result.push(randomData[i])
          adverb --
        }
        else if(reserved + result.length < numberOfQuestions){
          result.push(randomData[i])
        }
      }


      else if(type == 'verb'){
        if(verb != 0){
          result.push(randomData[i])
          verb --
        }
        else if(reserved + result.length < numberOfQuestions){
          result.push(randomData[i])
        }
      }
    }
    res.status(200).send(result);
    
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/rank", async (req, res) => {
  try {
    let counter = 0;
    const score = req.body.score;
    data.scoresList.forEach((el) => {
      if (el < score) {
        counter++;
      }
    });
    // Calcluate rank using the following equation
    const rank = (counter / data.scoresList.length) * 100;

    /* rounded to the nearest hundredth using toFixed(2)*/
    const numFixed = rank.toFixed(2);
    res.status(200).json(numFixed);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
