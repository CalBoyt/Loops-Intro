var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for (let i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}
const myInterests = ["vr gaming", "hanging out with my hubby", "music", "horseback riding"];

for (let i = 0; i < myInterests.length; i++){
    console.log("One of my interests is: " +myInterests[i]);
}

let i=0;
if (i != 1){
    console.log("My absolute favorite interest is: " +myInterests[i]);
    i++;
} else {
    console.log("One of my interests is: " +myInterests[i]); i++;
}