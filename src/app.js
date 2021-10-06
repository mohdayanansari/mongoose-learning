const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection is Successfull..."))
  .catch((err) => console.log(err)); //! catch will show error if happens

// todo::: giving my collection a schema or a format
const productListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productType: String,
  Stock: Number,
  COD: Boolean,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// todo::: creating collection
const ProductList = new mongoose.model("ProductList", productListSchema);

// todo::: Inserting One document at a time with async function and error handling
// const createDocument = async () => {
//   try {
//     const headphoneProList = new ProductList({
//       name: "JBL",
//       productType: "Electronic",
//       Stock: 80,
//       COD: true,
//       active: true,
//     });
//     const result = await headphoneProList.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// Todo:::: INserting many documents
// const createDocument = async () => {
//   try {
//     const onePlus = new ProductList({
//       name: "one plus",
//       productType: "Electronic",
//       Stock: 43,
//       COD: true,
//       active: true,
//     });
//     const herman = new ProductList({
//       name: "herman infinity",
//       productType: "Electronic",
//       Stock: 45,
//       COD: true,
//       active: true,
//     });
//     const boat = new ProductList({
//       name: "boat",
//       productType: "Electronic",
//       Stock: 12,
//       COD: false,
//       active: true,
//     });
//     const realme = new ProductList({
//       name: "realme",
//       productType: "Electronic",
//       Stock: 19,
//       COD: true,
//       active: true,
//     });
//     const result = await ProductList.insertMany([
//       onePlus,
//       herman,
//       boat,
//       realme,
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();
// Todo::: Reading the documents
// const getDocument = async () => {
// const result = await ProductList.find({Stock: 19}).select({name:1});      //* TO show only one info
// console.log(result);
// };
// getDocument();

// Todo:: To update the document

// const updateDocument = async () => {
//   const result = await ProductList.updateOne(
//     { name: "realme" },
//     { $set: { name: "Realme Technologies" } }      //*updating only one value by using filter and then passing new value
//   );
//   console.log(result);
// };
// updateDocument();
