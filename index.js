
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
function saveInput() {
    // console.log("Button clicked")

}
//Line 12 -15 is how the data inside input field is being pused into the myLeads array when the button is clicked
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
})
//line 16-19 is how you do an ordeered list in the html
for (let i = 0; i < myLeads. length; i++ ) {
 ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
 //everrthing below is alternate way of writing line 18
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
}
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
   console.log(listItems)
    }
    ulEl.innerHTML = listItems  
}
renderLeads()