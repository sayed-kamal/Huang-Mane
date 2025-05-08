
// Creating Elements:
let characters =document.querySelector('.characters');
let category_span = document.querySelector('.category span');
let letters = document.querySelector('.letters');
let the_draw =document.querySelector('.the-draw');
let Lose =document.querySelector('.Lose');
let YourLose =document.querySelector('.YourLose ');
let YourWin =document.querySelector('.Win ');



// Add Letters in characters and making Loop:
let AllCharacters= Array.from('abcdefghijklmnopqrstuvwxyz');
    AllCharacters.forEach((lett)=>{
    //Add create Element span:
    let span = document.createElement('span');
    // Add class to span:
    span.classList.add('letter_box')
    // Add create Text Node to span:
    span.appendChild(document.createTextNode(lett));
    // add span to characters:
    characters.appendChild(span);
});
// Add Section words of object:
let Section_Words = {
        programming:['php','javascript','go','scala','fortran','r','mysql','python'],
    movies:['prestige','inception','Maverick','Dominion','The Batman','The Woman King'],
    people:['Ahmed Zewial','Van Damme','James Cook','Shakespeare','Aristotle'],
    countries:['Egypt','Jordan','Kuwait','Saudi','Palestine','Emirates']
}
// Section Array and chosen Words
let Words_Array = Object.keys(Section_Words);
let RandomNumber_Words = Math.floor(Math.random() * Words_Array.length);
let RandomName_Words = Words_Array[RandomNumber_Words];
category_span.textContent = RandomName_Words ;

// Words Array and chosen Word
let Words_keys = Section_Words[RandomName_Words]
let WordNumber_chosen = Math.floor(Math.random() * Words_keys.length);
let WordName_chosen = Words_keys[WordNumber_chosen];
let WordName_chosen_Array = Array.from(WordName_chosen.toLowerCase());
WordName_chosen_Array.forEach(letter =>{
    let span = document.createElement('span');
    if (letter ==' ') {
        span.classList.add('ele_empty');
    }else{
        span.classList.add('ele_paly');
       }

       letters.appendChild(span);
});

let letters_span = Array.from(document.querySelectorAll('.letters span'))
let wrong=0;
document.addEventListener('click',(e)=>{
    //set the status:
    let theStatus = false;
   if (e.target.className == 'letter_box') {
    e.target.classList.add('clicked');
    WordName_chosen_Array.forEach((lett , index) =>{
        if (e.target.textContent.toLowerCase() === lett) {
            theStatus =true;
            letters_span.map((span , spanIndex)=>{
                if (index === spanIndex) {
                    span.innerHTML = lett;
                }
            });
        } 
    });
   if (theStatus !== true) {
    wrong++;
    the_draw.classList.add(`wrong${wrong}`);
    document.querySelector('.error').play();
       
   } else {
     document.querySelector('.right').play();
   }
   } 
   if (wrong == 7) {
    characters.classList.add('stop_Event');
    Lose.style.display = 'flex'
    console.log('YOU ARE LOSE');
    
   }
   let allGuessed = true;
letters_span.forEach((span) => {
    if (!span.classList.contains('ele_empty') && span.textContent === '') {
        allGuessed = false;
    }
});

if (allGuessed) {
    characters.classList.add('stop_Event');
    YourWin.style.display = 'flex';
    console.log('YOU WIN!');
}
});


YourLose.onclick = function () {
    location.reload();
}
