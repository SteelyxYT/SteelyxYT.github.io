let users = [];

function listStrings(list, biler) {
  if (list === void 0 || typeof list != "object") {
    list = [];
  }
  if (biler || biler == undefined) {

  }else if(biler != true || biler != undefined){
    document.getElementById("jsOutput").innerHTML =
    "<tr id='tableHeader'><th>name</th><th>age</th><th>role</th><th>cars</th></tr>";
  }
  
  list.forEach(function (element) {
    if (document.getElementById("jsOutput")) {
      if (biler || biler == false){
        document.getElementById("jsOutput").innerHTML +=
          "<tr>" +
          "<td>" +
          element["name"] +
          "</td>" +
          "<td>" +
          element["age"].toString() +
          "</td>" +
          "<td>" +
          element["role"] +
          "</td>";
      }
      if (biler) {
        document.getElementById("jsOutput").innerHTML +=
          "<tr><td>" + element["cars"] + "</td>";
      } else if (biler == undefined) {
        document.getElementById("jsOutput").innerHTML +=
          "<tr><td>" + element["cars"] + "</td>";
      }
      document.getElementById("jsOutput").innerHTML += "</tr>";
    }
  });
}

function addUser() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let role = document.getElementById("role").value;
  let car = document.getElementById("cars").value;
  let list = {
    name: name,
    age: age,
    role: role,
    cars: car,
  };
  console.log(list);
  if (name != "" || age != "" || role != "" || cars != "") {
    users.push(list);
    listStrings(users, true);
  }
}
