function getValue(){
    var parems;
    // Selecting the input element and get its value 
    parems = document.getElementById("roll_no1").value;


  
let query = Object.keys(params)
               .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
               .join('&');
  
let url = 'https://tpcconfessions.onrender.com/api/getConfession?' + query;
  
fetch(url)
.then(data => data.json())
.then((data) => {
    alert('DATA', data)
});
}

