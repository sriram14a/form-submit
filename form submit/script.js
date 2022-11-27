
const rowEl = document.querySelector('.container')

//form and table section
const division = document.createElement('div')
division.innerHTML = ` <div class=" bg-dark text-light rounded shadow1 container p-5 mb-5 col-11">
<form name="personDetails" >
    <div class="form-group">
        <label for="fname">First Name</label>
        <input type="text" class="form-control" id="fname">
    </div>
    <div class="form-group">
        <label for="lname">Last Name</label>
        <input type="text" class="form-control" id="lname">
    </div>
    <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address">
    </div>
    <div class="form-group">
        <label for="pincode">PIN code</label>
        <input type="number" class="form-control" id="pincode">
    </div>
    <div class="form-group">
        <p>Select Gender</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </div>
    <div class="form-group">
        <label for="country">Country</label>
        <input type="text" class="form-control" id="country">
    </div>
    <div class="form-group">
        <label for="state">State</label>
        <input type="text" class="form-control" id="state">
    </div>
    <div class="form-group form-check">
        <p>Select Food</p>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="checkbox" value="Butter chicken">
        <label class="form-check-label" for="exampleCheck1">Butter chicken</label><br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="checkbox" value="Palak paneer">
        <label class="form-check-label" for="exampleCheck1">Palak paneer</label><br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="checkbox" value="Biryani">
        <label class="form-check-label" for="exampleCheck1">Biryani</label><br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="checkbox" value="chicken Tikka">
        <label class="form-check-label" for="exampleCheck1">Chicken Tikka </label><br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="checkbox" value=" Fish fry">
        <label class="form-check-label" for="exampleCheck1">Fish fry</label><br>
    </div>
    <button type="button" class="bttn" onclick="getDetails()" value="submit">SUBMIT</button>
</form>
</div>
<div class=" mt-4 col-12">

<table class="table border-black shadow1 container" id="tbody" >
    <thead class="thead-dark  ">
        <tr>
            <th >First Name</th>
            <th>Last Name</th>
            <th>Adrress</th>
            <th>PIN code</th>
            <th>Gender</th>
            <th>Country</th>
            <th>State</th>
            <th>Food</th>
          </tr>
    </thead>
    <tbody class="bg-white text-black " >
      <tr id="data">
        <td id="fnamedata"></td>
        <td id="lnamedata"></td>
        <td id="adressdata"></td>
        <td id="pincodedata"></td>
        <td id="genderdata"></td>
        <td id="countrydata"></td>
        <td id="statedata"></td>
        <td id="fooddata"></td>
      </tr>
    </tbody>
  </table>

</div>`

rowEl.append(division)

const buttonEl = document.querySelector('.bttn')
const formsubmit = document.getElementsByName('personalDetails')

function getDetails() {
//getting user information
    const fnameEl = document.getElementById("fname").value
    const lastEl = document.getElementById("lname").value
    const addressEl = document.getElementById("address").value
    const pincodeEl = document.getElementById("pincode").value
    const countryEl = document.getElementById("country").value
    const stateEl = document.getElementById("state").value
// creating rows and columns
    var table = document.getElementById('tbody');
    var row = table.insertRow(-1);

    var cel0 = row.insertCell(0);
    var cel1 = row.insertCell(1);
    var cel2 = row.insertCell(2);
    var cel3 = row.insertCell(3);
    var cel4 = row.insertCell(4);
    var cel5 = row.insertCell(5);
    var cel6 = row.insertCell(6);
    var cel7 = row.insertCell(7);


//displaying user information
    cel0.innerHTML = fnameEl

    cel1.innerHTML = lastEl

    cel2.innerHTML = addressEl

    cel3.innerHTML = pincodeEl


    if (document.getElementById('male').checked) {
        cel4.innerHTML = "male"
    } else {
        cel4.innerHTML = "female"
    }

    cel5.innerHTML = countryEl

    cel6.innerHTML = stateEl
    const fooddata = document.getElementById('fooddata')
    const food = document.getElementsByName('checkbox')

    let checkeditems = 0;
    const list = [];
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            checkeditems++;
            list.push(food[i].value)
        }
    }
    
 //checkbox alert if checked less than 2 options   
    if (list.length < 2) {
        alert("please select atleast 2 options")
        cel7.innerHTML = "";
    }else{
        cel7.innerHTML = list;
    }

    document.personDetails.reset();

}
