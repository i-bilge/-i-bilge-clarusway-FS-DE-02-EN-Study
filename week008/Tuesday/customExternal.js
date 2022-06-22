let dataList = document.getElementById("dataList");

let data = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(myData => {
    myData.forEach(element => {
        //console.log(element.id);
        if (element.id < 10) {
            dataList.innerHTML += `<li>${element.title}<li>`;
        }
    });
});

//taking last 10 elements from API