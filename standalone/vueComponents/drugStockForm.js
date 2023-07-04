// Define a new component
const GreetingComponent = {
  data() {
    return {
      message: "Hello, Vue 3!",
      sheet: {},
      facilities: [],
      drugs: [],
      dbReply: false,
    };
  },
  methods: {
    getData() {
      fetch(
        "https://script.google.com/macros/s/AKfycbzhZvb85DvQf37xZopLurDFjzwlIdWMxkcPJN9yFUu2E7lga3c-7s-bu3EYHGsgJ4n7/exec"
      )
        .then((response) => response.text())
        .then((content) => {
          this.sheet = JSON.parse(content);
          // console.log(this.sheet.data['Facility name']);
          this.facilities = this.sheet.data["Facility name"];
          this.drugs = this.sheet.data.Drug;
          this.dbReply = true;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    increment() {
      this.count++;
    },
  },
  mounted() {
    this.getData();
  },
  template: `
    <h1>Drug stock form</h1>
    <div v-if="dbReply">
        <form action="">
            <select name="" id="">
                <option v-for="name in facilities" value="name">{{ name }}</option>
            </select>
            <formgroup v-for="drug in drugs">
                <h2>{{ drug }}</h2>
                <h3>Batch 1</h3>
                <div style="display: flex">
                    <p>Quantity</p>
                    <input type="text" />
                    <p>Expiry</p>
                    <input type="date" />
                </div>
            </formgroup>
            <button onclick="submit()">submit</button>
        </form>
        <p>{{ sheet }}</p>
        <p>{{ facilities }}</p>
        <p>{{ drugs }}</p>
    </div>
    <div v-else>Loading</div>
  `,
};
