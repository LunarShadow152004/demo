var value1 = "25bec055"
var con="hello"

fetch('https://tpcconfessions.onrender.com/api/postConfession', {
  method: 'POST',
  body: JSON.stringify({
    roll_no : value1,
    confession : con,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
