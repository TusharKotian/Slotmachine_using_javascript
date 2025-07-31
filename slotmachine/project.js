// 1. Deposit money
// 2. Determine the No.of lines to bet
// 3. Collect bet amount
// 4. Spin the Slot machine
// 5. Check if user won
// 6. Give the user winnings
// 7.Play Again

const prompt =require("prompt-sync")();

const ROWS=3;
const COLS=3;

const SYMBOLS_COUNT={"A":2,"B":4,"C":6,"D":8}

const SYMBOLS_VALUES={
  "A":5,"B":4,"C":3,"D":2
}




const deposit =() =>{
  while (true){
    const depositAmount=prompt("Enter a deposit amount: ");
    const numberDepositAmount=parseFloat(depositAmount);
    if(isNaN(numberDepositAmount) || numberDepositAmount <=0 ){
      console.log("Invalid amount,Try again");
    }else{
      return numberDepositAmount;
    }
  }
};
const getNumberOfLines=()=>{
  while(true) {
    const lines=prompt("Enter The Number of lines: ");
    const numberoflines=parseFloat(lines);
    if (isNaN(numberoflines)||(numberoflines<=0)||(numberoflines>3)){
      console.log("Invalid Number of lines,Try again");
    }
    else{
      return numberoflines;
    }
  }
};

const getBet=(Balance,Lines) =>{
  while(true){
    betamount=prompt("Enter your bet amount:");
    const numberbet=parseFloat(betamount);
    if(isNaN(numberbet)|| numberbet<0){
      console.log("Invalid bet amount,Try again");
    }else{
      if(numberbet>Balance/Lines){
        console.log("Invalid Bet amount");
      }else{
        return numberbet;
      }
    }
  }
}

const spin =()=>{
  const symbols=[];
  for (const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
    for(let i=0;i<count;i++){
      symbols.push(symbol);
    }
  }

  const reels=[];
  for(let i=0;i<COLS;i++){
    reels.push([])
    const reelSymbols=[...symbols];
    for(let j=0;j<ROWS;j++){
      const randomIndex=Math.floor(Math.random()*reelSymbols.length);
      const selectedSymbol=reelSymbols[randomIndex];
      reels[i].push(selectedSymbol)
      reelSymbols.splice(randomIndex,1);
    }
  }
  return reels
};

const transpose=(reels) =>{
  const rows=[];
  for(let i=0;i<ROWS;i++){
    rows.push([]);
    for(let j=0;j<COLS;j++){
      rows[i].push(reels[j][i])
    }
  }
  return rows
}

const printRows=(rows)=>{
  for (const row of rows){
    let rowString ="";
    for(const [i,symbol] of row.entries()){
      rowString+=symbol
      if(i != row.length - 1){
        rowString +=" | "
      }
    }
    console.log(rowString);
  }
}

const getWinnings=(rows,betAmount,Lines) =>{
  let winnings=0;
  for(let row=0;row<Lines;row++){
    const symbols=rows[row];
    let allSame=true;

    for (const symbol of symbols){
      if(symbol!==symbols[0]){
        allSame=false;
        break;
      }
    }
    if (allSame){
      winnings += betAmount * SYMBOLS_VALUES[symbols[0]];

    }
    return winnings
    
  }
}

const game=() =>{
  let balance=deposit();
  while(true){
    console.log("You have a balance of $"+balance)
    const numberoflines=getNumberOfLines();
    const betAmount=getBet(balance,numberoflines);
    balance -= betAmount*numberoflines;
    const reels=spin()
    const rows=transpose(reels)
    printRows(rows)
    const winnings=getWinnings(rows,betAmount,numberoflines)
    balance += winnings;
    console.log("You Won ,$"+winnings.toString())


    if(balance<=0){
    console.log("You have run out of money")
    break;
  }
  const playAgain=prompt("Do you want to play again(y/n)?");
  if (playAgain != "y"){
    break;
  }

  }
  
    
}
game();
