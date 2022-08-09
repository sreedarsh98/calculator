//display all number and operator other than ac &= inside input with id = result ,, when we click it

function display(num){
  result.value+=num // .vlue il aanh number store ayath concole inspect cheytha kanum
  //console.log(result.value); //input id =result

}

// clear all content from input when we click on ac button

function clearAll(){
  result.value= ""
}

// evaluate expression using eval

function output(){
  result.value=eval(result.value)
}


//remove last item

function remove(){
 result.value=(result.value).slice(0,-1) // 0,-1 to delet last number ,, you can give 0, 0,2 etc 
}