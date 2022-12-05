let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


let array = [
    {sno: 1,'Name':'Anakin'},
    {sno: 2,'Name':'Obi-Wan'},
    {sno: 3,'Name':'Luke'},
    {sno: 4,'Name':'Leia'},
]

let headers = ['S.No.', 'Name'];

btnGet.addEventListener('click', add );

function add(){
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    array.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });
    myTable.innerHTML = null ;
    myTable.appendChild(table);
}