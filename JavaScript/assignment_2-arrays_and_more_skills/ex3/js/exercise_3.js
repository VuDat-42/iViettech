var listName = [];

while (1) {
    var enter = prompt("Enter Name: ");
    if (enter != "") {
        listName[listName.length] = enter;
    } else {
        break;
    }
};

listName.sort();
document.write("The list of name after sort: <br />" + listName.join("<br />"));