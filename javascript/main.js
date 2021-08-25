function Style(index) {
    var counter;
    switch (index) {
        case "D.s":
            counter = "css/index.css";
            break;
        case "프로필":
            counter = "css/profile.css";
            break;
        case "프로젝트":
            counter = "css/project.css";
            break;
        case "활동사진":
            counter = "css/picture.css";
            break;
        default:
            counter = "css/index.css";
    }
    changeCSS(counter);
}
function changeCSS(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(0);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
function main(name) {
    fetch(name).then(function(response){
        response.text().then(function(text){
            document.querySelector('main').innerHTML = text;
        });
    });
}