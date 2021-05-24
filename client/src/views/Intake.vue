<template>
  <div>
    <form @submit.prevent="submit">
      <h1>Intake Form</h1>
      <table>
        <p class="big">Basic Info</p>
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
            <label>Type of Injury</label> <br /><input
              type="text"
              v-model="injuryType"
            />
          </td>
          <td>
            <label>Age at Accident</label> <br /><input
              type="number"
              v-model="accidentAge"
            />
          </td>
        </tr>

        <p class="big">Desired Courses/Job</p>
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
            <label
              >Has Brain<br />
              Injury Waiver</label
            ><br />
            <select v-model="hasWaiver">
              <option>Yes</option>
              <option>No</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <p class="big">Internal</p>
          </td>
        </tr>
        <tr>
          <td>
            <label>Employee Who Filled This Out</label>
            <input type="text" v-model="employee" />
          </td>
        </tr>
      </table>
      <input class="btn" type="submit" />
    </form>
    <div class="container" @click="hideModal" v-if="modal">
      <div class="modal">
        <div class="faint">
          <!-- <p @click="hideModal" class="x big">X</p>
          <div id="xText">Hide <br />this.</div> -->
          <div class="inner">
            <h1>New Survivor Intake Form</h1>
            <div>
              <p>
                Remind the client that this information is kept private is kept
                secure in a database. This data can only be shared with those
                the client requests it to be shared with.
              </p>
              <p>
                The Values entered for courses can be edited. Please let the
                client know this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END container -->
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
}
td {
  padding: 1em;
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
  border: solid red;
  z-index: 3;
  overflow: visible;
  position: absolute;
  background: white;
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
.bg {
  z-index: 3;
  background: white;
  height: 100%;
  width: 100%;
}
.inner {
  margin: 5%;
}
#xText {
  font-size: 0.25em;
  float: left;
  left: 0;
  margin-top: 3%;
}
#ml {
  margin-left: 0.5em;
}
select {
  cursor: pointer;
}
.btn {
  margin-bottom: 1em;
}
</style>