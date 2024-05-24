let parems = "25bec069"
let query = Object.keys(params)
               .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
               .join('&');
  let url = 'https://tpcconfessions.onrender.com/api/getConfession?' + query;
  
fetch(url)
.then(data => data.json())
.then((data) => {
    console.log('DATA', data)
});


