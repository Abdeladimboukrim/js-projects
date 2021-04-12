    function myFunction (e) {
        e.preventDefault();
        var cmt = document.getElementById("message").value;
        var target = document.querySelector(".message-content");
        target.innerText = cmt;
    
    }
        
    document.getElementById("submitBtn").addEventListener("click", myFunction);

