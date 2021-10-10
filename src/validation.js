const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://localhost:27017/myshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection is successfull...🚀"))
  .catch((e) => console.log(e));

//   *In app.js we build a schema for a product now here we build a schema for a user who buys the product and then acc. to that we build a new collection called 'user' ->
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [2, "minimum lenght should be greater than one letter"],
    maxlength: [30, "exceding the max lenght"],
  },
  gender: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["male", "female", "other"], //checkes if the gender is male female or other
  },
  phone: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");                         //Validation through validator package....
      }
    },
  },
  address: String,
  active: Boolean,
  totalOrders: {
    type: Number,
    //* CUSTOM VALIDATION using validate()
    validate(value) {
      if (value < 0) {
        throw new Error("You have to correct the value");
      }
    },
  },
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// todo::: Creating a new collection for user :::
const User = new mongoose.model("User", userSchema);

// todo::: Now we have to insert some user documents(users info or adding users)

const createDocument = async () => {
  try {
    // const user_1 = new User({
    //   name: "Rohan",
    //   userName: "rom",
    //   gender: "male",
    //   phone: 7532125220,
    //   email: "aruncom",
    //   address: "Delhi",
    //   active: false,
    //   totalOrders: 54,
    //   password: "abscdefghijk",
    // });
    // const user_2 = new User({
    //   name: "Aman Ansari",
    //   userName: "amananss",
    //   phone: 6306037764,
    //   email: "amananss@gmail.com",
    //   address: "Chela Chawani, 224001",
    //   active: false,
    //   totalOrders: 12,
    //   password: "aman12#@",
    // });
    // const user_3 = new User({
    //   name: "Yash",
    //   userName: "yoyoyash",
    //   phone: 7985461203,
    //   email: "yash@gmail.com",
    //   address: "Kanpur",
    //   active: true,
    //   totalOrders: 108,
    //   password: "yash12@",
    // });
    // const user_4 = new User({
    //   name: "Kartikey Sinha",
    //   userName: "iamkartiks",
    //   phone: 7894563218,
    //   email: "kartikey@gmail.com",
    //   address: "Jogitara Colony, Faizabad, 224001",
    //   active: false,
    //   totalOrders: 504,
    //   password: "kartikey11@",
    // });
    // const user_5 = new User({
    //   name: "Unnati Singh",
    //   userName: "unshi",
    //   phone: 8527413698,
    //   email: "appu@gmail.com",
    //   address: "IET, Faizabad, 224001",
    //   active: true,
    //   totalOrders: 105,
    //   password: "unshi12@",
    // });
    const result = await User.insertMany([user_1]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
// createDocument();
