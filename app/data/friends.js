let allfriends = []

const initialfriends = { 
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores:["5","1","4","4","5","1","2","5","4","1"]
}
allfriends.push(initialfriends)
console.log(allfriends)

module.exports = {
    addingfriend (survey) {
        allfriends.push(survey)
        console.log(allfriends)
    }, 

    gettingfriend () {
        return allfriends
    }
}
