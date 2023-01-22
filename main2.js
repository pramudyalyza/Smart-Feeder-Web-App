var feed = document.querySelector('.bowl');
var n = 100;
var text1 = document.querySelector('#p1');
var text2 = document.querySelector('#p2');
var text3 = document.querySelector('#p3');
var logoutbtn = document.querySelector('.btnlogout');

feed.addEventListener('click', () =>{
   
    let foodcapacity = document.querySelector('.percent');
    if(n==0){
        alert('food runs out!\nplease add new food to the machine!')
    }else{
        alert("Nyam! Nyam! Yout pet has been feed <3");
        n -= 10;
        foodcapacity.textContent = n + '%';
    }
    const t = new Date();
    let jam = t.getHours();
    let menit = t.getMinutes();
    let apm;
    if(jam >= 12){
        apm = "PM";
    }else{
        apm = "AM";
    }

    text3.textContent = text2.textContent;
    text2.textContent = text1.textContent;
    if(menit < 10){
        text1.textContent = jam + ':0' + menit + ' ' + apm + ' - 1/4 Cup'; 
    }else{
        text1.textContent = jam + ':' + menit + ' ' + apm + ' - 1/4 Cup'; 
    }
})

document.querySelector('.btnadd').onclick = function() {
    var current_tasks = document.querySelectorAll(".list");
    if (document.querySelector('.addtext').value.length == 0) {
        alert("Please Enter a Task")
    }else if(current_tasks.length == 2){
        alert("Cannot add more schedule")

    }else{
        document.querySelector('.result').innerHTML += `
        <div class="list">

        <h6 class="ex">${document.querySelector('.addtext').value}</h6>
        
        <button class="damn" href="">
            <img class="trash" src="images/Trash.png" alt="">
        </button>
        </div>
        `;
        var current = document.querySelectorAll(".damn");
        for (var i = 0; i < current.length; i++) {
            current[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}

logoutbtn.addEventListener('click', () =>{
    iduser.value = ''; 
})