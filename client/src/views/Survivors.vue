<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <div class="box">
      <h1>Our Survivors <span class="material-icons"> psychology </span></h1>

      <input
        type="text"
        id="myInput"
        placeholder="Search by Lastname"
        v-model="search"
      />
      <input
        type="text"
        id="myInput2"
        placeholder="Search by Employee"
        v-model="filler"
      />

      <span @click="print" class="material-icons print" title="Print">
        print
      </span>
    </div>

    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Employee</th>
        <th>Email</th>
        <th>Github</th>
        <th>Date of Injury</th>
        <th>Type of Injury</th>
        <th>Age in accident</th>
        <th>Desired Type of Developer</th>
        <th>1st Class Choice</th>
        <th>2nd Class Choice</th>
        <th>3rd Class Choice</th>
      </tr>
      <tr
        v-for="(survivor, index) in filteredSurvivors"
        :key="survivor.lname && survivor.fname && index"
        @click="select"
      >
        <td>{{ survivor.fname }}</td>
        <td id="lname">
          {{ survivor.lname }}
        </td>
        <td>
          {{ survivor.age }}
        </td>
        <td id="employee" :class="{ employee: employee }">
          <a>{{ survivor.employee }}</a>
        </td>
        <td ref="selected">
          {{ survivor.email }}
        </td>
        <td>
          {{ survivor.github }}
        </td>
        <td>
          {{ survivor.injuryDate }}
        </td>
        <td>
          {{ survivor.injuryType }}
        </td>
        <td>
          {{ survivor.accidentAge }}
        </td>
        <td>
          {{ survivor.typeOfDev }}
        </td>
        <td>
          {{ survivor.class1 }}
        </td>
        <td>
          {{ survivor.class2 }}
        </td>
        <td>
          <a>{{ survivor.class3 }}</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var survivors = [];
    var search = "";
    var filler = "";
    var nameSearch = false;
    var employee = false;
    return {
      survivors,
      search,
      filler,
      employee,
      nameSearch,
    };
  },
  mounted() {
    axios.get("http://localhost:8081/survivors").then((Response) => {
      this.survivors = Response.data;
    });
  },
  computed: {
    filteredSurvivors() {
      return this.survivors
        .reverse()
        .filter(
          (survivor) =>
            survivor.lname.toLowerCase().includes(this.search.toLowerCase()) &&
            survivor.employee.toLowerCase().includes(this.filler.toLowerCase())
        );
    },
  },
  methods: {
    print() {
      window.print();
    },
    select() {
      console.log();
    },
  },
};
</script>

<style scoped>
table {
  margin-right: 2.5%;
  width: 50%;
  border-collapse: collapse;
  position: relative;
  font-size: 1em;
  margin: 0 auto;
  position: relative;
}
table tr:nth-child(even) {
  background-color: #f2f2f2;
}
table tr:hover {
  background-color: #ddd;
  color: #3628ff;
}
table th {
  background-color: #4c8baf;
  color: white;
}
table td,
table th {
  border: 1px solid rgb(189, 189, 189);
}
td,
th {
  padding: 0.25em;
  font-size: 0.85em;
}
h1 {
  margin: 0;
}
.th {
  font-size: 1.5em;
  font-weight: 600;
}
.nm {
  margin: 0;
}
.mr {
  margin-right: 5%;
}
.mb {
  margin-bottom: 2.5%;
}

.delete {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.employee,
.nameSearch {
  color: gold;
}
button {
  margin: 0.5em;
}
.searchBox {
  display: grid;
  padding: 2%;
  width: 100%;
  background-color: teal;
  margin: 0 auto;
  border-radius: 5px;
}
.searchBoxTitle {
  font-size: 1.5em;
  font-weight: 600;
}
.gr1 {
  grid-row: 1;
}
.mar {
  margin: 1%;
}
.print {
  margin: 15px;
  cursor: pointer;
}
.print:hover {
  color: teal;
}
input {
  margin: 15px;
}
.box {
  display: flex;
  justify-content: center;
}
</style>