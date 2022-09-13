const app = Vue.createApp({
  data() {
    return {
      myName: "Anna",
      myAge: 33,
      picrute:
        "https://www.gettyimages.ae/gi-resources/images/500px/983794168.jpg",
    };
  },
  methods: {
    myAgeInFuture() {
      const myFutureAge = this.myAge + 5;
      return myFutureAge;
    },
    calcMyFavoriteNumber() {
      const myFavoriteNumber = Math.random();
      return myFavoriteNumber;
    },
  },
});
app.mount(".container");
