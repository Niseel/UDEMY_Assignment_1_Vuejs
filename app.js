const app = Vue.createApp({
  data() {
    return {
      name: "ThanhNC40",
      age: 24,
      luckyNumber: 0,
      randomImage: "https://picsum.photos/200/300",
    };
  },
  methods: {
    luckyNumberGenerator() {
      return Math.random() * 100;
    },
  },
});

app.mount("#assignment");
