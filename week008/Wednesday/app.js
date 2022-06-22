const resultSpan = document.getElementById("result");
const wait = (ms) => {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
};

// const myPromise = new Promise(function (resolve, reject) {
//   wait(2000);
//   // API call
//   const userData = {
//     firtsName: "John",
//     birthDay: 1992,
//   };
//   let success = Math.floor(Math.random() * 2);
//   if (success) {
//     resolve(userData);
//   } else {
//     reject("Something went wrong.");
//   }
// });

// with a single then statement
// myPromise.then(
//   (response) => {
//     console.log("response", response);
//     resultSpan.innerText =
//       "Success =" + response.firtsName + " " + response.birthDay;
//   },
//   (err) => {
//     console.log("err", err);
//     resultSpan.innerText = "Failure =" + err;
//   }
// );

// or with catch
// myPromise
//   .then((response) => {
//     console.log("response", response);
//     resultSpan.innerText =
//       "Success =" + response.firtsName + " " + response.birthDay;
//   })
//   .catch((err) => {
//     console.log("err", err);
//     resultSpan.innerText = "Failure =" + err;
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// TEA TIME
// 1.Wait until water boiled => kettle => work or failed
// 2.Add tea -> Tea is available or not
// 3. Wait for brewing

// const boil = () => {
//   return new Promise((resolve, reject) => {
//     const boiled = Math.floor(Math.random() * 3);
//     if (boiled) {
//       wait(2000);
//       resolve("Water Boiled");
//     } else {
//       reject("Kettle Failed");
//     }
//   });
// };

// const addTea = () => {
//   return new Promise((resolve, reject) => {
//     const teaAvailable = Math.floor(Math.random() * 3);
//     if (teaAvailable) {
//       wait(1000);
//       resolve("Tea was added");
//     } else {
//       reject("No Tea!");
//     }
//   });
// };

// const brewTea = () => {
//   boil()
//     .then((statusBoil) => {
//       console.log("statusBoil", statusBoil);
//       return addTea();
//     })
//     .then((statusTea) => {
//       console.log("statusTea", statusTea);
//       return "Tea is ready, enjoy it";
//     })
//     .then((lastStatus) => {
//       console.log("lastStatus", lastStatus);
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
// };

// brewTea();

// async - Promise

const myPromise2 = new Promise((resolve, reject) => {
  wait(1000);
  //   console.log("Promise is created.");
  resolve("Primise is resolved!");
});

const myAsyncFn = async () => {
  wait(1000);
  //   console.log("1111111111");
  //   throw new Error("Errorororororor");
  return "Here are the users1111!";
};
const myAsyncFn2 = async () => {
  wait(200);
  //   console.log("22222222222");
  //   throw new Error("Error from 222222");
  return "Here are the users2222!";
};
const myAsyncFn3 = async () => {
  wait(500);
  //   console.log("33333333333333333");
  //   throw new Error("Errorororororor");
  return "Here are the users3333!";
};

// console.log("myPromise2 instanceof Promise", myPromise2 instanceof Promise);
// console.log("myAsyncFn instanceof Promise", myAsyncFn() instanceof Promise);

// myAsyncFn()
//   .then((response) => console.log("response of async", response))
//   .catch((err) => console.log("err", err));

// Promise.all
// const getUser = async () => {
//   try {
//     const [p1, p2, p3] = await Promise.all([
//       myAsyncFn(),
//       myAsyncFn2(),
//       myAsyncFn3(),
//     ]);
//     console.log("p1", p1);
//     console.log("p2", p2);
//     console.log("p3", p3);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// getUser();

// ---- FETCH API ----
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => console.log("error", error));

const userList = document.querySelector("#user-id");

const getRealUsers = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    data.forEach((userObj) => {
      const userLi = document.createElement("li");
      userLi.innerHTML = `
            <span style="color: purple;">${userObj.login}</span>   <span style="color: blue;">${userObj.site_admin}</span>
        `;
      const userImage = document.createElement("img");
      userImage.setAttribute("src", userObj.avatar_url);
      userImage.style.width = "100px";
      userImage.style.height = "100px";
      userList.append(userLi);
      userList.append(userImage);
    });
  } catch (error) {
    console.log("error", error);
  }
};

// getRealUsers();
//Henry's
const randomJokes = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jokes = await response.json();
    console.log("jokes", jokes);
  } catch (error) {
    console.log("error", error);
  }
};
// randomJokes();

//Daniel's
fetch("https://api.chucknorris.io/jokes/random")
  .then((aResponse) => {
    return aResponse.json();
  })
  .then((theResponse) => {
    console.log("This is THE response", theResponse);
  })
  .catch((err) => console.log("The error is ", err));


  //Ismail's
const getResults = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log("data", data);

    const userLi = document.createElement("li");
    userLi.innerHTML = `
              <span style="color: purple;">${data.value}</span> 
          `;
    userList.append(userLi);
  } catch (error) {
    console.log("error", error);
  }
};

getResults();
