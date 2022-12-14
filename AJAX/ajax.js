function showAllCustomer() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/customers",
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<tr><td>${data[i].id}</td>
        <td>${data[i].firstName}</td>
        <td>${data[i].lastName}</td>
        <td><a href=""></a></td>
        <td><a href="${data[i].id}" onclick="deleteCustomer(this)">Xoa</a></td></tr>`;
            }
            document.getElementById("tbody").innerHTML = content;
        }
    })
}
showAllCustomer();
function searchCustomer(){
    let name = document.getElementById("nameSearch").value;
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/api/customers/search?search="+name,
        success: function (data) {
            console.log(data)
            let ct = "";
            for (let i = 0; i < data.content.length; i++) {
                ct += `<tr><td>${data.content[i].id}</td>
        <td>${data.content[i].firstName}</td>
        <td>${data.content[i].lastName}</td>
        <td><a href=""></a></td>
        <td><a href="${data.content[i].id}" onclick="deleteCustomer(this)">Xoa</a></td></tr>`;
            }
            document.getElementById("tbody").innerHTML = ct;
        }
    })
}

function deleteCustomer(element){
    let id = element.getAttribute("href");
    $.ajax({
        type:"DELETE",
        url:"http://localhost:8080/api/customers/" +id,
        success: function (data){
            showAllCustomer();
        }
    })
    event.preventDefault();
}

function createCustomer() {
    // let firstname =$('#firstname').val();
    let firstname = document.getElementById("firstname").value;
    // let lastname =$('#lastname').val();
    let lastname = document.getElementById("lastname").value;
    let ob = {
        firstName: firstname,
        lastName: lastname
    }
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(ob),
        url: "http://localhost:8080/api/customers",
        success: function () {
            showAllCustomer();
            $('#firstname').val("")
            $('#lastname').val("")
        }
    })
}