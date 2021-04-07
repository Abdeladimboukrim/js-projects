// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


   
    function myFunction(e) {
        e.preventDefault();
        var cmt = document.getElementById("message").value;
        var tar = document.querySelector(".text-uppercase");
        tar.innerHTML = cmt.value;
        console.log(tar);
  }

    document.getElementById("submitBtn").addEventListener("click", myFunction);
        

// var mnd = document.querySelector('container');

// if(mnd.classList.contains('p-2')){

//     console.log('yes mojood');

// }



// mnd.name='tapename';
// mnd.textContent;

// // add books
// const addForm = forms['#message-form'];
// addForm.addEventListener('submit', function(e){
//   e.preventDefault();

//   // create elements
//   const value = addForm.querySelector('input[type="text"]').value;
//   const li = document.createElement('li');
//   const bookName = document.createElement('span');
//   const deleteBtn = document.createElement('span');

//   // add text content
//   bookName.textContent = value.h4;
//   deleteBtn.textContent = 'delete';