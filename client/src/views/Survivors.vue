<template>
  <div>
    <h1>Our Survivors</h1>

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
    <button @click="print">Print</button>

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
        <th>3rd Class Choice</th>
        <th>4th Class Choice</th>
      </tr>
      <tr
        v-for="survivor in filteredSurvivors"
        :key="survivor.lname && survivor.fname"
      >
        <td>
          {{ survivor.fname }}
        </td>
        <td id="lname">
          {{ survivor.lname }}
        </td>
        <td>
          {{ survivor.age }}
        </td>
        <td id="employee" :class="{ employee: employee }">
          <a>{{ survivor.employee }}</a>
        </td>
        <td>
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
      return this.survivors.filter(
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
  },
};
</script>

<style scoped>
table {
  margin-left: 2%;
  margin-right: 2.5%;
  width: 100%;
  border-spacing: 1em 0.1em;
}
td {
  width: fit-content;
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
input {
  margin-left: 1em;
}
.employee,
.nameSearch {
  color: gold;
}
button {
  margin: 0.5em;
}
</style>