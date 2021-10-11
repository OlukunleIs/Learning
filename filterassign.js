const candidates=[
    {name: 'Joseph', age: 17, bestColor: 'white', highestCert: 'OND'},
    {name:'Linda', age: 25, bestColor:'blue', highestCert:'BSC'},
    {name: 'Shola', age: 22, bestColor: 'red', highestCert: 'BSC'},
    {name: 'Jakes', age: 43, bestColor: 'white', highestCert: 'BSC'},
    {name: 'Emeka', age: 15, bestColor:'white', highestCert: 'SSCE'}
]

function validAge(){
    return age>17 && bestColor('white')
    // document.getElementById('bol')
    
}
function nameFilter (){
    document.getElementById('bol').innerHTML=candidates.filter(validAge)
}
