// We created an example of json as an internal data
// we are gonna use fetch() API

var internalData = fetch("dataInternal.json")
.then(response => response.json())
.then(internalData => {
    console.log(internalData);
    console.log(internalData.users);
    console.log(internalData.authority[0]);
    var ourData = JSON.stringify(internalData);
    console.log(ourData);
})
//we did take the data with fetch()
//and we changed the http type of data to json in line 5