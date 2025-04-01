function updateInput() {
  var input1Value = document.getElementById("contact2").value;
  document.getElementById("whatsapp-no2").value = input1Value;
}

function needBlood() {
  let form = (document.getElementById("form").style.display = "flex");
  let needBlood = (document.querySelector(".home").style.display = "none");
  let backgroumd = (document.querySelector(".main-background").style.display =
    "none");

  let about = (document.getElementById("about").style.display = "none");
}

function back() {
  let back = (document.getElementById("form").style.display = "none");
  let needBlood = (document.querySelector(".home").style.display = "block");

  let backgroumd = (document.querySelector(".main-background").style.display =
    "flex");

  let about = (document.getElementById("about").style.display = "none");
}

let blood = document.querySelector(".group").value;

const donors = [
  {
    name: "Ansari bhai",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Jeet kumar",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Lallit jatav",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Kunal",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Anjali",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Sajay dat",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Lallit Yadav",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Kunal rajput",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "himanshu",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Monu",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Lavish jatav",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "raju",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Anjali Kumari",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Sajay dat",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Lallit Yadav",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Kunal rajput",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Komal Rani",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Salaman Khan",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Jatandeep Singh",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Seema rajput",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Raaj",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Smeer Khan",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Jatandeep Singh",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Monu rajput",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Raam Singh",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Rambeer",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Jatandeep Singh",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Aman rajput",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Sanju",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Gorav Kashyap",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Veer Partaap",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Partaapo rajput",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "saharanpur",
  },
  {
    name: "Anshul sain",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Jeet kumar",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Lallit jatav",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Kunal",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Anjali",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Sajay dat",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Lallit Yadav",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Kunal rajput",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "himanshu",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Monu",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Lavish jatav",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "raju",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Anjali Kumari",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Sajay dat",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Lallit Yadav",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Kunal rajput",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Komal Rani",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Salaman Khan",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Jatandeep Singh",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Seema rajput",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Raaj",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Smeer Khan",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Jatandeep Singh",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Monu rajput",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Raam Singh",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agrar",
  },
  {
    name: "Rambeer",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Jatandeep Singh",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Aman rajput",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Sanju",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Gorav Kashyap",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Veer Partaap",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },
  {
    name: "Partaapo rajput",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "agra",
  },

  {
    name: "jagpal sain",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Jeet kumar",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Sunil jatav",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Kunal",
    blood: "A positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Anjali",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Sajay dat",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Lallit Yadav",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Kunal rajput",
    blood: "A negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "himanshu",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Monu",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Lavish jatav",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "raju",
    blood: "B positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Priya Kumari",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Sajay dat",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Lallit Yadav",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Kunal rajput",
    blood: "B negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Ansari bhai",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Salaman Khan",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Jatandeep Singh",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Seema rajput",
    blood: "O positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Raaj",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Smeer Khan",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Jatandeep Singh",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Monu rajput",
    blood: "O negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Raam Singh",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Rambeer",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Jatandeep Singh",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Aman rajput",
    blood: "AB positive",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Sanju",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Gorav Kashyap",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Veer Partaap",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
  {
    name: "Partaapo rajput",
    blood: "AB negative",
    phone: "9536334389",
    whatsapp: "9536334389",
    district: "aligarh",
  },
];

function find() {
  var district = document.querySelector(".district").value;

  var blood = document.querySelector(".group").value;
  console.log(blood);

  if (district == "" || blood == "") {
    alert("all input are mandatory");
    return false;
  } else {
    true;
  }

  let form = (document.getElementById("form").style.display = "none");
  //DICTRICT DETAIL\\
  let find = (document.getElementById("find").style.display = "flex");
  let main = document.querySelector(".find-div");

  main.innerHTML = ``;

  const donorlist = donors.filter(function (donor) {
    if (donor.blood === blood && donor.district === district) {
      return true;
    } else return false;
  });

  if (donorlist.length === 0) {
    main.innerHTML = `<div style="height: 400px; display: flex; justify-content: center; align-items: center;"><p style="color: red; font-size: 30px;">donor not found</p><div>`;
  } else {
    console.log(donorlist);
    for (let i = 0; i <= donorlist.length; i++) {
      let div = document.createElement("div");
      div.className = "main";

      let nameo = `${donorlist[i].name}`;
      console.log(nameo);

      let bloodo = `${donorlist[i].blood}`;

      let districto = `${donorlist[i].district}`;

      let phoneo = `${donorlist[i].phone}`;

      let whatsappo = `${donorlist[i].whatsapp}`;

      div.innerHTML = `
         
        <div class="user-detail">
        <h4>NAME:${nameo}</h4> 
        <h2>District: ${districto}</h2>  
        <h2>Blood group: ${bloodo}</h2>
        </div>
        <div class="call">
       <a href="tel:+91${phoneo}">   <img style="width: 40px;"src="https://cdn-icons-png.flaticon.com/128/5585/5585856.png"/></a>
       <a href="https://wa.me/+91${whatsappo}">     <img style="width:40px;"src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"/></a>
        </div>
     `;
      main.appendChild(div);

      console.log(div);
    }
  }
}

function submit() {
  let name = document.getElementById("name2").value;

  let district = document.getElementById("district2").value;

  let bloodgroup = document.getElementById("blood-group2").value;

  let contact = document.getElementById("contact2").value;

  let whatsapp = document.getElementById("whatsapp-no2").value;

  if (
    name == "" ||
    district == "" ||
    bloodgroup == "" ||
    contact == "" ||
    whatsapp == ""
  ) {
    alert("all input are mandatory");
    return false;
  } else if (
    whatsapp.length > 10 ||
    whatsapp.length < 10 ||
    contact.length > 10 ||
    contact.length < 10
  ) {
    alert("Number should be of 10 digit ! Please enter valid number");
    return false;
  } else {
    true;
  }

  let object = {
    name: `${name}`,
    blood: `${bloodgroup}`,
    phone: `${contact}`,
    whatsapp: `${whatsapp}`,
    district: `${district}`,
  };

  localStorage.setItem("savedonor", JSON.stringify(object));

  let registerby = (document.querySelector(".main-form").style.display =
    "none");

  let form = (document.querySelector(".registerform").style.display = "flex");

  let formdiv = document.querySelector(".registerform");

  formdiv.inerHTML = ``;
  formdiv.innerHTML = `
      <div class="registerform2 ">
  <img
    src="https://i.ibb.co/ZMpt5VC/download-1.jpg"
    alt="codeyogi"
    style="width: 100px; height: 100px; align-self: center; border: 2px solid green; border-radius: 99px;"
  />
  <p>PROFILE</p>
  <h2>Name: ${name} </h2>
        <h2>District: ${district} </h2>
<h2> Blood-group: ${bloodgroup}
</h2>
<h2>Phone No: ${contact} </h2>
<h2>Whatsapp No: ${whatsapp} </h2>
  <div id="link">
    <a class="p" href="index.html" style="background: red;">Back</a>
  </div>
      </div>`;
}

function findlocal() {
  const savedonor = localStorage.getItem("savedonor");
  const userdata = JSON.parse(savedonor);
  if (userdata.length === 0) {
    return;
  } else {
    donors.push(userdata);
    console.log(userdata.name);
  }
}
findlocal();
