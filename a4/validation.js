function getInput(){
    let username_value = document.validation.username.value.trim();
    let email_value = document.validation.email.value.trim();
    let phone_value = document.validation.phone.value.trim();
    let password_value = document.validation.pwd.value.trim();
    let radio_status = document.querySelector('input[name="gender"]:checked');
    let select_element = document.getElementById("age")
    let confirm_password_value = document.validation.pwds.value.trim();
    let music_element = document.querySelectorAll('input[name="music"]:checked')
    let validity = false
    let reg_username = /^[a-z0-9]{4,12}$/;
    let reg_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu)$/
    let reg_phone = /\(\d{3}\)-\d{3}-\d{4}$/
    let reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_)[A-Za-z\d_]{8,}$/

    let message="";

    if(username_value === ""){
        message += "Please enter <strong><span style='color:red;'>Username</span></strong>"+'<br>'

    }

    else if(!(username_value.match(reg_username))){
        message +="Please enter <span style='color:yellow;'>a valid username</span>"+'<br>'
    }

    if(email_value === ""){
        message += "Please enter <strong><span style='color:red;'>Email</span></strong>"+'<br>'
    }

    else if(!(email_value.match(reg_email))){
        message += "Please enter <strong><span style='color:yellow;'>a valid email</span></strong>"+'<br>'

    }
    if(phone_value === ""){
        message += "Please enter <strong><span style='color:red;'>Phone number</span></strong>"+'<br>'
    }

    else if(!(phone_value.match(reg_phone))){
        message += "Please enter <strong><span style='color:yellow;'>a valid phone number</span></strong>"+'<br>'
    }

    if(password_value === ""){
        message += "Please enter <strong><span style='color:red;'>password</span></strong>"+'<br>'
    }
    else if(password_value.match(reg_password)){
        validity = true
    }
    else if(!(password_value.match(reg_password))){
        message += "Please enter <strong><span style='color:yellow;'>a valid password</span></strong>"+'<br>'
    }

    if(confirm_password_value === ""){
        message += "Please confirm <strong><span style='color:red;'>password</span></strong>"+'<br>'
    }

    else if(confirm_password_value !== password_value){
        alert("Passwords do not match")
    }
    else if(confirm_password_value === password_value){
        validity = true
    }

    if(!(radio_status)){
        message += "Please select <strong><span style='color:red;'>a gender</span></strong>"+'<br>'
    }

    if(!(select_element.value)){
        message += "Please select <strong><span style='color:red;'> age group</span></strong>"+'<br>'
    }

    if(music_element.length <= 0){
        message += "Please select <strong><span style='color:red;'> your favorite musice genre</span></strong>"+'<br>'
    }


    if(validity === true && confirm_password_value !== "" && username_value.match(reg_username) && email_value.match(reg_email) && phone_value.match(reg_phone)
&& radio_status && select_element.value && music_element.length > 0  ){
        window.location.href = "/a1/img/../Index.html";

    }


    document.getElementById("val").innerHTML = message



}

function clearForm() {
    // Clear all the input fields
    document.validation.username.value = '';
    document.validation.email.value = '';
    document.validation.phone.value = '';
    document.validation.pwd.value = '';
    document.validation.pwds.value = '';

    // Clear radio buttons
    let genderRadios = document.querySelectorAll('input[name="gender"]');
    for(let i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }

    // Clear select element
    document.getElementById("age").selectedIndex = 0;

    // Clear checkboxes
    let musicCheckboxes = document.querySelectorAll('input[name="music"]');
    for(let i = 0; i < musicCheckboxes.length; i++) {
        musicCheckboxes[i].checked = false;
    }

    // Remove warnings
    // Assuming warnings are displayed in elements with id 'val'
    document.getElementById("val").innerHTML = '';
}
