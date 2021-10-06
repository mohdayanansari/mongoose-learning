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
//       name: "Book",
//       productType: "Stationary",
//       Stock: 5555555,
//       COD: true,
//       active: true,
//     });
//     const herman = new ProductList({
//       name: "Pan",
//       productType: "Kitchen Accessories",
//       Stock: 124,
//       COD: true,
//       active: true,
//     });
//     const boat = new ProductList({
//       name: "Pants",
//       productType: "Cloths",
//       Stock: 175,
//       COD: true,
//       active: true,
//     });
//     const realme = new ProductList({
//       name: "Shirt",
//       productType: "Cloths",
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

// Todo::: Querying by comparison oprators
//* {$gt: } || {$gte: } || {$lt: } || {$lte: } --greater than have to pass in object || --greater than equal to
//* qurying by array(if the data falls in the query it'll appear) {$in: ["somthing", "somthing", "somthing",]}
//* qurying by array(if the data is satisfy the query the rest data will appear) {$nin: ["somthing", "somthing", "somthing",]}
// const getDocumentbyQuery = async () => {
//   const result = await ProductList.find({ productType: {$in: ["Cloths", "Stationary"]} }).select({
//     name: 1,
//     Stock: 1,
//   });
//   console.log(result);
// };
// getDocumentbyQuery();

// Todo::: Querying by Logical Oprators |||| or || and || nor || not ||||
// const getDocumentbyLogical = async () => {
//   try {
//     const result = await ProductList.find({ $or: [{productType: "Electronic"}, {productType: "Cloths"}] }).select({
//       name: 1,
//     });
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getDocumentbyLogical();

// Todo::: Sorting and Count Query Methods
// Todo::Count
// const getDocumentbyCount = async () => {
//   try {
//     const result = await ProductList.find({
//       $or: [{ productType: "Stationary" }, { productType: "Cloths" }],
//     }).select({ name: 1 }).countDocuments();               // new countDocuments || count
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getDocumentbyCount();

// Todo::Sorting
const getDocumentbySorting = async () => {
  try {
    const result = await ProductList.find({ productType: "Electronic"  }).select({ name: 1 }).sort({name: -1});
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

getDocumentbySorting();