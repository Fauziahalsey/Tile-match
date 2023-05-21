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
  var memory_tile_ids =[];
  var tiles_flpped = 0;
  Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
    j = Math.floor(Math.random () * (i+1));
    temp =this[j];
    this[j] = this[i];
    this[i] = temp;

  }  
}

function newBoard(){
    tiles_flpped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++){
        output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}