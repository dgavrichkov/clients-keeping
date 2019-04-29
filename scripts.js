function dropList() {
   // console.log(event.target);
   event.preventDefault();
   var anc = findAncestor(event.target, 'table__row');
   console.log(anc);
   anc.classList.toggle('open');
}
var rows = document.querySelectorAll('.table__row');
// for( var i = 0, row; row = rows[i]; i++){
//    row.onclick = function(e) {
//       if(e.target.className == "drop-trg__btn"){
//          // e.preventDefault();
//          console.log(this.className);
//          this.classList.toggle('open')
//       };
//    }
// }

function findAncestor (el, cls) {
   while ((el = el.parentElement) && !el.classList.contains(cls));
   return el;
}

