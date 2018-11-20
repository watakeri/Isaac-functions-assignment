/*let people = ["doctors","teachers","lawyers","engineers"];
people = [
    {name: "isaac",salary: "100000"},
    {name: "kim", salary: "250000"},
    {name: "Asha", salary: "400000"},
    {name: "mary", salary: "500000"},
]
function add() {
    let details = {};
    name = document.getElementById(name);
    salary = document.getElementById(salary);
    details.name = name;
    details.salary = salary;
    people.push(details);
    name = ""
    salary = ""

}
people.forEach(function (profession) {
    console.log(`$profession{name} earns ${salary}`)
});*/

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(405060));

