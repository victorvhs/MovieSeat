const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let tickPrice= +movieSelect.value;
//update total and count
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatCount = selectedSeats.length
  count.innerText=(selectedSeatCount);
  total.innerText=(selectedSeatCount*tickPrice);
}
//Movie select events
movieSelect.addEventListener('change',(e)=>{
  tickPrice = +e.target.value;
  updateSelectedCount();
})
//Seat click events
container.addEventListener('click',(e)=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})