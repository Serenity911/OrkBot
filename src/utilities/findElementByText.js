
export default function (page,tagName, textToSearch) {
    var element = document.getElementsByTagName(tagName);
    var searchText = textToSearch;
    var found;
    for (var i = 0; i < element.length; i++) {
        if (element[i].textContent == searchText) {
            found = element[i];
            console.log(found, "found element")
            break;
        }
    }
}