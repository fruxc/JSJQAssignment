function sortData() {
    let data = document.getElementById("data").value;
    data = JSON.parse(data);                                    //Parsing to JSON
    sortedData = Object.keys(data).sort(function (a, b) {       //Sorting data in descending order
        return data[b] - data[a]
    })

    var list = document.createElement("ol");                    //Displaying data in form of ordered list
    for (var i in sortedData) {
        var elem = document.createElement("li");
        elem.innerHTML = sortedData[i];
        list.appendChild(elem);
    }
    $('body').append(list);
}

function answer() {
    let qTeams = {
        "aaiec": 400,
        "aaiwc": 60,
        "qai": 200,
        "poc": 100,
        "gtm": 50,
        "hr": 10
    };
    sortedData = Object.keys(qTeams).sort(function (a, b) {
        return qTeams[b] - qTeams[a]
    })

    var list = document.createElement("ol");
    for (var i in sortedData) {
        var elem = document.createElement("li");
        elem.innerHTML = sortedData[i];
        list.appendChild(elem);
    }
    $('body').append(list);
}