let employees=[{id:101,name:"Rahul",sal:45000},
{id:102,name:"Sonia",sal:55000},
{id:103,name:"Priyanka",sal:65000},
{id:104,name:"Modi",sal:75000},
{id:105,name:"Rajesh",sal:185000},]

function display_Data(){
    let rows=""
    var i=0;
    while(i<=employees.length-1){
        rows = rows + `<tr>
                            <td> ${employees[i].id} </td>
                            <td> ${employees[i].name} </td>
                            <td> ${employees[i].sal} </td>
        
                       </tr>`
        i++
    }

    document.getElementById('abc').innerHTML =rows;
    //document.getElementById('abc').innerHTML ="GM";
}