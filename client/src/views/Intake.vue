<template>
  <div class="bg">
    <form @submit.prevent="submit">
      <h1>Intake Form</h1>
      <table>
        <p class="big">&bull; Identification</p>
        <tr>
          <td>
            <label>Firstname</label><br /><input v-model="fname" type="text" />
          </td>
          <td>
            <label>Lastname</label> <br /><input v-model="lname" type="text" />
          </td>
          <td>
            <label>Email</label> <br /><input v-model="email" type="email" />
          </td>
          <td>
            <label>Age</label> <br /><input v-model="age" type="number" />
          </td>
          <td>
            <label>Github</label> <br />
            <input
              type="text"
              list="cars"
              v-model="github"
              placeholder="Paste URL Here"
            />
            <datalist id="cars">
              <option>Doesn't Have One</option>
            </datalist>
          </td>
        </tr>
        <tr>
          <td>
            <label>Today's Date</label><br />
            <label class="textBox">{{ date }}</label>
          </td>
          <td>
            <label>Date of Injury</label> <br /><input
              type="date"
              v-model="injuryDate"
            />
          </td>
          <td>
            <label>Type of Injury</label> <br />
            <select v-model="injuryType">
              <option>Traumatic</option>
              <option>Non-traumatic</option>
              <option>Other</option>
            </select>
          </td>
          <td>
            <label>Age at Accident</label> <br /><input
              type="number"
              v-model="accidentAge"
            />
          </td>
        </tr>

        <p class="big">&bull; Desired Courses/Job</p>
        <tr>
          <td>
            <label>Type of Developer</label><br />
            <select v-model="typeOfDev">
              <option>Frontend</option>
              <option>Backend</option>
              <option>Web Designer</option>
              <option>Full Stack</option>
            </select>
          </td>
          <td>
            <label>1st Choice</label><br />
            <select v-model="class1">
              <option>HTML</option>
              <option>CSS</option>
              <option>JavaScript</option>
              <option>Node.js</option>
              <option>Vue.js</option>
              <option>SQL</option>
            </select>
          </td>
          <td>
            <label>2nd Choice</label><br />
            <select v-model="class2">
              <option>HTML</option>
              <option>CSS</option>
              <option>JavaScript</option>
              <option>Node.js</option>
              <option>Vue.js</option>
              <option>SQL</option>
            </select>
          </td>
          <td>
            <label>3rd Choice</label><br />
            <select v-model="class3">
              <option>HTML</option>
              <option>CSS</option>
              <option>JavaScript</option>
              <option>Node.js</option>
              <option>Vue.js</option>
              <option>SQL</option>
            </select>
          </td>
          <td>
            <label>Has BI Waiver</label><br />
            <select v-model="hasWaiver">
              <option>Yes</option>
              <option>No</option>
            </select>
          </td>
        </tr>
        <p class="big">&bull; Meta</p>
        <tr>
          <td>
            <label>Employee Who Filled This Out</label>
            <br />
            <input type="text" v-model="employee" />
          </td>
        </tr>
      </table>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var d = new Date();
    var day = d.getDate();
    var month;
    if (d.getMonth() < 10) {
      month = "0" + (d.getMonth() + 1);
    } else {
      month = d.getMonth() + 1;
    }
    var year = d.getFullYear();
    var date = month + "/" + day + "/" + year;
    var modal = true;
    function hideModal() {
      this.modal = false;
      console.log("hide");
    }

    var fname = "";
    var lname = "";
    var email = "";
    var age = "";
    var github = "";
    var injuryDate = "";
    var injuryType = "";
    var accidentAge = 0;
    var typeOfDev = "";
    var class1 = "";
    var class2 = "";
    var class3 = "";
    var employee = "";
    var hasWaiver = "";

    return {
      fname,
      lname,
      age,
      email,
      github,
      date,
      day,
      month,
      year,
      hideModal,
      modal,
      injuryDate,
      injuryType,
      accidentAge,
      typeOfDev,
      class1,
      class2,
      class3,
      employee,
      hasWaiver,
    };
  },
  methods: {
    reset() {
      this.fname = "";
      this.lname = "";
      this.email = "";
      this.age = "";
      this.github = "";
      this.injuryDate = "";
      this.injuryType = "";
      this.accidentAge = 0;
      this.ypeOfDev = "";
      this.class1 = "";
      this.lass2 = "";
      this.class3 = "";
      this.employee = "";
      this.hasWaiver = "";
      console.log("reset");
    },
    async login() {
      await axios.get("");
    },
    submit() {
      alert("Form Submitted");
      axios.post("http://localhost:8081/intakeForm", {
        data: {
          fname: this.fname,
          lname: this.lname,
          age: this.age,
          email: this.email,
          github: this.github,
          date: this.date,
          injuryDate: this.injuryDate,
          injuryType: this.injuryType,
          accidentAge: this.accidentAge,
          typeOfDev: this.typeOfDev,
          class1: this.class1,
          class2: this.class2,
          class3: this.class3,
          employee: this.employee,
          hasWaiver: this.hasWaiver,
          today: this.date,
        },
      });
      this.reset();
      console.log(this.date);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin: 0;
  padding: 0;
  display: inline-grid;
  row-gap: 1em;
}
td {
  padding: 1em;
  width: 30%;
  grid-column: auto;
}
tr {
  background: #f0f0f0;
  border: 3px solid;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 15px;
}
label {
  font-weight: 600;
}
h1 {
  margin: 0;
}
.textBox {
  background: white;
  text-align: center;
  border: solid black 1px;
  font-family: Arial, Helvetica, sans-serif;
}
th {
  text-align: center;
}
p {
  text-align: left;
  text-indent: 1em;
}
.big {
  font-size: 2em;
  font-weight: 600;
  margin: 0%;
  padding: 0;
}
.modal {
  top: 0;
  margin-top: 5%;
  height: fit-content;
  width: 50%;
  border: solid rgb(54, 83, 179);
  z-index: 3;
  overflow: visible;
  position: absolute;
  background: white;
  border-radius: 15px;
}
.container {
  display: flex;
  justify-content: center;
  background: rgb(255, 255, 255, 0.5);
  z-index: 2;
  width: 100%;
  height: 100vh;
  float: left;
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
}
.x {
  top: 0;
  left: 0;
  float: left;
  margin: 1%;
  cursor: pointer;
}

.inner {
  margin: 5%;
}

select {
  width: 10em;
  cursor: pointer;
}

.smaller {
  width: 50%;
}

input[type="submit"] {
  width: 80%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 2.5%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
}
</style>