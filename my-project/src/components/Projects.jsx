import "axios" from "axios"

axios
  .get("https://fakestoreapi.com/products/")
  .then(function (response) {
    // başarılı
    console.log(response);
  })
  .catch(function (error) {
    // hatayı ele al
    console.log(error);
  })
  .finally(function () {
    // her koşulda çalıştırılır
  });
