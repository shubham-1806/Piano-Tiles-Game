


var table = document.getElementById("table_id");


var header = table.createTHead();
var row = header.insertRow(0); 
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = "Rank";
cell2.innerHTML = "Name";
cell3.innerHTML = "Score";

sorted_score=[];

const scoreboard={};

for (let i=1;i<localStorage.length;i++){
    if(localStorage.key(i)!='name' && ((localStorage.getItem(localStorage.key(i)).split(","))[1])!='6'){
        scoreboard[localStorage.key(i)]=(localStorage.getItem(localStorage.key(i))[0]);
        curr_item=[];
        curr_item.push(localStorage.getItem(localStorage.key(i)));
        curr_item.push(i);
        sorted_score.push(curr_item);
    }
}

sorted_score.sort();
sorted_score.reverse();

for(let j=0;j<sorted_score.length;j++){
    i=sorted_score[j];
    var row = table.insertRow(j+1);
    var cell1=row.insertCell(0)
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    namo=localStorage.key(i[1]);
    sc=((localStorage.getItem(localStorage.key(i[1])).split(","))[0]);
    cell1.innerHTML = String(j+1);
    cell2.innerHTML = namo;
    cell3.innerHTML = sc;
}

// {
//     var row = table.insertRow(i);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }
