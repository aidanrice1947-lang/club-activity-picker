let activity = [
    { name: "Chess", minutes: 25, indoors: true },
    { name: "Basketball", minutes: 60, indoors: true },
    { name: "Football", minutes: 90, indoors: false},
    { name: "Drawing", minutes: 30, indoors: true },
    { name: "Maze", minutes:20, indoors: false }
]

console.log("Club Activity Picker!");
for(let i = 0; i < activity.length; i++) {
    console.log(activity[i].name + ": " + activity[i].minutes + " minutes");
}
