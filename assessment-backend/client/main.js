const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const makefortuneBtn= document.getElementById("makefortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

makefortuneBtn.addEventListener('click', getFortune)

const certificateBtn= document.getElementById("certificateButton")
const getCertificate = () => {
    axios.delete("http://localhost:4000/api/certificate/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

certificateBtn.addEventListener('click', getCertificate)

const program= document.getElementById("program")
const getProgram = () => {
    axios.delete("http://localhost:4000/api/program/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

program.addEventListener('click', getProgram)