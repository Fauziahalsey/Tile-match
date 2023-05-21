// if (timeleft < 0) {
//     clearInterval(myfunc);
//     document.getElementById("days").innerHTML = ""
//     document.getElementById("hours").innerHTML = "" 
//     document.getElementById("mins").innerHTML = ""
//     document.getElementById("secs").innerHTML = ""
//     document.getElementById("end").innerHTML = "TIME UP!!";
// }

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  openModalBtn.addEventListener("click", openModal);

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown");

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modalClose();
    }
  })

  var memory_array = ['banana', 'banana', 'peach', 'peach', 'mango', 'mango', 'guava',',']
  var memory_values = [];
  var memory_Box_ids =[];
  var Box_flipped = 0;
  Array.prototype.memory_Box_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
    j = Math.floor(Math.random () * (i+1));
    temp =this[j];
    this[j] = this[i];
    this[i] = temp;

  }  
}

function newBoard(){
    Box_flipped = 0;
    var output = '';
    memory_array.memory_Box_shuffle();
    for (var i = 0; i < memory_array.length; i++){
        output += '<div id="Box_'+i+'" onclick="memoryFlipBox(this,\''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipBox(Box,val){
    if(tile.innerHTML==""&& memory_values < 2){
        box.style.background = '#fff';
        box.innerHTML = val;
        if(memory_values.length == 0){
            memory_values.push(val);
            memory_Box_ids.push(Box.id);
            
        } else if (memory_values.length == 1){
            memory_values.push(val);
            memory_Box_ids.push(Box.id);
            if(memory_values[0] ==memory_values[1]){
                Box_flipped +=2;

                memory_values = [];
                memory_Box_ids = [];
                if(Box_flpped == memory_array.length){
                    alert("Board cleared...generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }

            } else {
                function flip2Back (){
                    var Box_1 = document.getElementById(memory_Box_ids[0]);
                    var Box_2 = document.getElementById(memory_Box_ids[1]);
                    tile_1.style.background = 'url(star_bg.ppg) no repeat'
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(star_bg.png) no repeat'
                    tile_2.innerHTML = "";

                    memory_values = [];
                    memory_Box_ids = [];


                }
                setTimeout(flip2Back,700);
            }
        }
    }
}