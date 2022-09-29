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
        }
    })
}

$(document).ready(function () {
    $("#submit").click(function () {
        $("#firstname").clearData();
        $("#lastname").attr("value","cal");
    });
});