const Button= require('./db.json')
let globalID = 6
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
getFortune: (req, res) => {
    const fortunes = ["A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A friend is a present you give yourself.", "A friend asks only for your time not your money.", "A lifetime friend shall soon be made."];

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);
},
deleteCertificate: (req, res) => {
    let index = certificate.findIndex(elem=> elem.id=== +req.params.id)
          certificate.splice(index, 1)
     res.status(200).send(certificate)
},
createProgram: (req, res) =>{
    const {specialisation}=req.body
    let newProgram={ 
        specialisation:specialisation,
        id: 2
    }
    program.push(newProgram)
globalID++
    res.status(200).send(program)
},
}