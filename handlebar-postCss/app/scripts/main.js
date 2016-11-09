import Header from "./modules/_Header";
import Nav from "./modules/_Nav";

const app = {} || null;

app.header = new Header("Ram", "Kulkarni");
app.nav = new Nav("Ram", "Kulkarni");

document.getElementById("nameSpan").innerHTML = app.header.getFirstName() + " " + app.header.getLastName();
