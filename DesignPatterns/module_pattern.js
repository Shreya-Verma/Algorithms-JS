/**
 * ES5 module pattern
 */
//STANDARD MODULE PATTERN
const ctrl = (function () {
  // declare private variables and functions
  let _text = "Hello Module Pattern";

  function change() {
    let elem = document.getElementById("willChange");
    elem.textContent = _text;
  }

  return {
    //Declare public access functions
    changeHeaderApi: function () {
      change();
    },
  };
})();

ctrl.changeHeaderApi();

//REVELING MODULE PATTERN
const ItemCtrl = (function () {
  //private variable
  let _data = [];

  function addItem(item) {
    _data.push(item);
    console.log("Item Added");
  }

  function getItem(id) {
    return _data.find((item) => item.id === id);
  }

  return {
    addItem: addItem,
    getItem: getItem,
  };
})();

ItemCtrl.addItem({ id: 1, name: "Shreya" });
ItemCtrl.addItem({ id: 2, name: "John" });
ItemCtrl.addItem({ id: 3, name: "Doe" });
ItemCtrl.addItem({ id: 4, name: "Brooks" });
ItemCtrl.addItem({ id: 5, name: "Nathan" });

console.log(ItemCtrl.getItem(3));
