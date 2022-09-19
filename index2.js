let myStorage = {
    "car": {
        "inside": {
            "glove box": "map",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

let gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)