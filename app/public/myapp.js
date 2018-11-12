// My javascript 
const fetch = window.fetch

// for Survey Page
$(".submit-Btn").on("click", function(event) {
    event.preventDefault();

    // Fetch 1
    fetch('/api/friends', {
        method: 'POST', 
        headers:{'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({  
                                name: document.querySelector('#name').value,
                                photo: document.querySelector('#photolink').value,
                                score:[
                                          document.querySelector('.custom-select-1').value,
                                          document.querySelector('.custom-select-2').value,
                                          document.querySelector('.custom-select-3').value,
                                          document.querySelector('.custom-select-4').value,
                                          document.querySelector('.custom-select-5').value,
                                          document.querySelector('.custom-select-6').value,
                                          document.querySelector('.custom-select-7').value,
                                          document.querySelector('.custom-select-8').value,
                                          document.querySelector('.custom-select-9').value,
                                          document.querySelector('.custom-select-10').value                          
                                        ]
                            })
    })
    .then(r => {
        console.log(r)
        document.querySelector('#name').value = ''
        document.querySelector('#photolink').value = ''
        document.querySelector('.custom-select-1').value  = 0,
        document.querySelector('.custom-select-2').value  = 0,
        document.querySelector('.custom-select-3').value  = 0,
        document.querySelector('.custom-select-4').value  = 0,
        document.querySelector('.custom-select-5').value  = 0,
        document.querySelector('.custom-select-6').value  = 0,
        document.querySelector('.custom-select-7').value  = 0,
        document.querySelector('.custom-select-8').value  = 0,
        document.querySelector('.custom-select-9').value  = 0,
        document.querySelector('.custom-select-10').value = 0
        window.location = './result'   
    })
    .catch(e => console.log(e))

    // Fetch 2
    fetch ('/api/friends')
    .then( r => console.log(r.json()))
    .catch(e => console.error(e))

})

// For Result Page
function displaymatch(){
    $.ajax({ url: "/api/friends", method: "GET"})
     .then(
            function(friend) {
                var randmatch = Math.floor(Math.random() * friend.length)
                $("#match").append(`<h2> Name: ${friend[randmatch].name} </h2>`)
            }
          )   
}   
displaymatch();






   


