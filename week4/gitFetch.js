let btnTab = document.getElementById('addTable')
btnTab.addEventListener('click', add);

// let btnSal = docment.getElementById('salButton')
// btnSal.addEventListener('click', greater);

function add() {
    //     // array.forEach(jsonData => {
    //     console.log(jsonData)
    //     console.log(Object.keys(jsonData).length)
    //     // for(int i=0;i<)
    fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESSFUL add')
                return res.json()
            }
            else console.log('UNSUCCESSFUL add')
        })
        .catch(error => console.log(error))
        .then(data => {
            tab = document.getElementById("table")
            let text = "<table><tbody>";
            text += "<tr>";
            let key = Object.keys(data.Employees[0]);
            console.log(key);
            key.forEach(addKeys)
            function addKeys(a) {
                text += "<th>" + a + "</th>";

            }
            text += "</tr>";
            data.Employees.forEach(add);
            function add(a) {
                text += '<tr>' + '<td>' + a.Name + '</td>' + '<td>' + a.Address + '</td>' + '<td>' + a.Salary + '</td>' + '<td>' + a.DateOfJoining + '</td>' + '</tr>';
            }
            text += "</tbody></table>";

            document.getElementById("table").innerHTML += text;


            // infoText+='<p><b>People who joined in December are:</b><br>';
            // data.Employees.forEach(printDate)
            // function printDate(a)
            // {
            //     let DateArr = a.DateOfJoining.split('-');
            //     if(DateArr[1]=='12')
            //     infoText+=a.Name+'<br>'
            // }
            // infoText+='</p>';
            // Info.innerHTML+=infoText;
        })
}

function greater() {
    fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESSFUL greater')
                return res.json()
            }
            else console.log('UNSUCCESSFUL greater')
        })
        .catch(error => console.log(error))
        .then(data => {
            let Info = document.getElementById("Info")
            let infoText = '<p><b>People with Salary>50000 are:</b><br>'
            data.Employees.forEach(printData)
            function printData(a) {
                if (a.Salary > 50000)
                    infoText += a.Name + '<br>'

            }
            infoText += '</p>';

            Info.innerHTML += infoText;
        })
}

function dec() {
    fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
        .then(res => {
            if (res.ok) {
                console.log('SUCCESSFUL greater')
                return res.json()
            }
            else console.log('UNSUCCESSFUL greater')
        })
        .catch(error => console.log(error))
        .then(data => {
            let Join = document.getElementById("join")
            let joinText = '<p><b>People who joined in December are:</b><br>'

            data.Employees.forEach(printDate)
            function printDate(a) {
                let DateArr = a.DateOfJoining.split('-');
                if (DateArr[1] == '12')
                    joinText += a.Name + '<br>'
            }
            joinText += '</p>';

            Join.innerHTML += joinText;
        })  

}
