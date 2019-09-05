function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let n = retrieveEmployeeInformation();
  return document.querySelector(".employee-list").append(n);
}

function addNewLiOnClick() {
  document
    .querySelector('input[type="submit"]')
    .addEventListener('click', function(event) {
      addNewElementAsLi();
      resetInput();
    });
}

function resetInput() {
  document.querySelector("input").value = "";
}

function clearEmployeeListOnLinkClick() {

}
