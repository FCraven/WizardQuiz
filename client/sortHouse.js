const sortHouse = (answers) => {
  let tally = {}
  let winner = ''
  let count = 0

  for(let i = 0; i < answers.length; i++){
    const currentAnswer = answers[i]

    if(!tally[currentAnswer]){
      tally[currentAnswer] = 1
    } else {
      tally[currentAnswer] += 1
    }
  }

  for(let key in tally){
    if(tally[key] > count){
      count = tally[key]
      winner = key
    }
  }
  console.log(`Tally --->`, tally)
  return winner
}

export default sortHouse
