


document.getElementById('pizza-form').onsubmit= () => {
    clearErrors();


        let isValid = true;


        let Fname = document.getElementById('Fname').value.trim();
        let Lname = document.getElementById('Lname').value.trim();
        let Email = document.getElementById('Email').value.trim();
      

        if (!Fname){
            // alert("No name ")
              document.getElementById('err-Fname').style.display = "block";
              isValid = false;
        };

        if (!Lname){
            // alert("No name ")
              document.getElementById('err-Lname').style.display = "block";
              isValid = false;
        };

        if (!Email || Email.indexOf("@") === -1 ){
            document.getElementById('err-Email').style.display = "block";
            isValid = false;
        };

        let methodButtons = document.getElementsByName("method");

        let count = 0;


        for (let i = 0; i < methodButtons.length; i ++){
            if (methodButtons[i].checked){
                count++;
            }
        } 

        if ( count === 0){
            document.getElementById("err-Method").style.display = "block";
            isValid = false;
        }

        let size = document.getElementById('size').value;
        if (size === "none"){
            document.getElementById("err-size").style.display = "block";
            isValid = false;
        }


        return isValid;
};

function clearErrors()  {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++){
        errors[i].style.display = "none"
    }
}
