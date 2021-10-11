let validInputArr=['rock', 'paper', 'scissors'];
let input=prompt('Enter your value');
var checkInp= input.toLowerCase


const mainProg = () =>{
if (validInputArr.includes(checkInp)){
    min=0;
    max=3;
    const compPlay=Math.floor(Math.random() * (max - min)) + min;
    if (checkInp==='rock'){
        if (checkInp==='rock' && compPlay===0){
            document.getElementById('play1').innerHTML='Player = Rock'
            document.getElementById('play2').innerHTML='Computer = Rock'
            document.getElementById('rand').innerHTML='Oh! it\'s a tie'
        }
        else if (checkInp==='rock' && compPlay===1){
            document.getElementById('play1').innerHTML='Player = Rock'
            document.getElementById('play2').innerHTML='Computer = Paper'
            document.getElementById('rand').innerHTML='Computer wins'
        }
        else {
            document.getElementById('play1').innerHTML='Player = Rock'
            document.getElementById('play2').innerHTML='Computer = Scissors'
            document.getElementById('rand').innerHTML='Player win'
        }
    }    
    else if(checkInp==='paper'){
        if (checkInp==='paper' && compPlay===0){
            document.getElementById('play1').innerHTML='Player = Paper'
            document.getElementById('play2').innerHTML='Computer = Rock'
            document.getElementById('rand').innerHTML='Player win'
        }
        else if (checkInp==='paper' && compPlay===1){
            document.getElementById('play1').innerHTML='Player = Paper'
            document.getElementById('play2').innerHTML='Computer = Paper'
            document.getElementById('rand').innerHTML='Oh! it\'s a tie'
        }
        else {
            document.getElementById('play1').innerHTML='Player = Rock'
            document.getElementById('play2').innerHTML='Computer = Scissors'
            document.getElementById('rand').innerHTML='Computer wins'
        }
    }
    else{
        if (checkInp=='scissors' && compPlay==0){
            document.getElementById('play1').innerHTML='Player = Scissors'
            document.getElementById('play2').innerHTML='Computer = Rock'
            document.getElementById('rand').innerHTML='Computer win'
        }
        else if (checkInp=='scissors' && compPlay==1){
            document.getElementById('play1').innerHTML='Player = Scissors'
            document.getElementById('play2').innerHTML='Computer = Paper'
            document.getElementById('rand').innerHTML='Player win'
        }
        else {
            document.getElementById('play1').innerHTML='Player = Rock'
            document.getElementById('play2').innerHTML='Computer = Scissors'
            document.getElementById('rand').innerHTML='Oh! it\'s a tie'
        }
    }
    
}
else{
    document.getElementById('rand2').innerHTML='Input can only be Rock, Paper or Scissors. Please enter a valid input'    
}

}

mainProg()