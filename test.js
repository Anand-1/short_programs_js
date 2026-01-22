let ob = {
    user: {
        key_value_map: {
            CreatedDate: "123424",
            Department: {
                Name: "XYZ",
            },
        },
    },
};

function flatterOBJ(obj, parent) {
    console.log(obj)
    console.log(parent)
}
console.log(flatterOBJ(ob))