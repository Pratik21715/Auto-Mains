const prices={"General Service":1499,"Oil Change":999,"Wheel Service":799,"AC Service":1299};
const form=document.getElementById("bookingForm");
const list=document.getElementById("bookingList");
function getBookings(){return JSON.parse(localStorage.getItem("automain_bookings")||"[]")}
function showBookings(){
 const data=getBookings();
 if(!data.length){list.innerHTML='<div class="empty">No bookings yet.</div>';return}
 list.innerHTML=data.slice().reverse().map(b=>`<div class="booking"><b>${b.service}</b> — ${b.vehicle}<br>Customer: ${b.name} | Mobile: ${b.phone}<br>Date: ${b.date} | Time: ${b.time}<br><strong>Estimated Price: ₹${prices[b.service].toLocaleString("en-IN")}</strong></div>`).join("");
}
form.addEventListener("submit",e=>{
 e.preventDefault();
 const booking={name:name.value,phone:phone.value,vehicle:vehicle.value,service:service.value,date:date.value,time:time.value};
 const data=getBookings();data.push(booking);localStorage.setItem("automain_bookings",JSON.stringify(data));
 alert("Service booking confirmed!");
 form.reset();showBookings();location.hash="bookings";
});
showBookings();