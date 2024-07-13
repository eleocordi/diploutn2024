const main = document.querySelector("main");

fetch("https://jsonplaceholder.typicode.com/todos/1/users")
    .then((response) => {
        if (response.ok) {
            console.log("Respuesta exitosa, obteniendo datos");
        }
        return response.json();
    })
    .then((users) => {
        users.forEach((user) => {
            let userInfo = document.createElement("div");
            userInfo.innerHTML = htmlFromJson(user.name, user.email, user.website, user.phone);
            main.appendChild(userInfo);
        });
    });

function htmlFromJson(name, email, website,phone) {
    let html = ` <h3> ${name}</h3>
    <h4> ${email}</h4>
    <h4> ${website}</h4>
      <h4> ${phone}</h4>`;
    return html;
}