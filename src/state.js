import { reactive } from "vue"; //IMPORT REACTIVE const from vue
import axios from "axios"; //IMPORT AXIOS to invoke get call

export const state = reactive({
  //EXPORT in a const "State" with reactive property (change from references)
  products: [], //make a array to includes ALL OBJECT from get call
  products_url: "http://localhost:3000/products", //const just to select a URL where can keep objects
  getProducts(url) {
    //make a function with (URL) parameter
    axios
      .get(url)
      .then((response) => {
        //CALL GET
        console.log(response); //STAMP INFO RESPONSE
        this.products = response.data; //select "products" array and insert ALL "response.data" (OBJECTS) in a empty array
      })
      .catch((error) => {
        //just in case of an error occured
        console.error(error.message); //show errors
      });
  },
});
