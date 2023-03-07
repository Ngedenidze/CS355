
const $ = document.querySelector.bind(document);
const root = document.getElementById('root');

const div =$('.div') 

function change_brown(e){
    root.classList.add('color-brown');
}
function back_brown(e){
    root.classList.remove('color-brown');
}

function change_green(e){
    root.classList.add('color-green');
}
function back_green(e){
    root.classList.remove('color-green');
}


function change_blue(e){
    root.classList.add('color-blue');
}
function back_blue(e){
    root.classList.remove('color-blue');
}

const navigate_database = () => {
    window.location.href = 'database.html';
   
};
const navigate_home = () => {
    window.location.href = 'index.html';
   
};
const navigate_login = () => {
    window.location.href = 'login-page.html';
   
};

var counter = 1;
function createNewToDo(){
    
    const d = document.createElement('div');
    d.className = "newItem";
    
    $('.items').appendChild(d);
    d.innerHTML = counter + '.' + $('.newtodo').value;
    $('.newtodo').value = '';
    counter++; 
    d.onclick = function(){
        d.className = 'completed';
    }
};