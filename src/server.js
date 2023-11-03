document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=9iBRUlZcAZrwtaYOHdQXFb29J6tnmGtqcjXaZhZv')
    .then(response => response.json()) // Perbaiki penulisan 'response'
    .then(data => {
        const titleApod = document.getElementById('title-APOD');
        titleApod.innerHTML = `
        <p>${data.title}</p>
        <p>${data.copyright}</p>
        <div class="p-3">
        <img src=${data.url} class=" border" >
        </div>
        <p class="text-left text-xs p-3">${data.explanation}</p>
        <p class="text-right text-xs">${data.date}</p>
        `// Menggunakan 'textContent' untuk mengganti teks
    });
});


// EPIC API

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=9iBRUlZcAZrwtaYOHdQXFb29J6tnmGtqcjXaZhZv')
    .then(response => response.json()) // Perbaiki penulisan 'response'
    .then(data => {
        const EPICONtent = document.getElementById('EPIC-content')
        let epicInnerHTML = ``
        for (let i = 0; i < Math.min(data.length,6); i++) {
            let formatedDate = data[i].date.split(" ")[0]
            formatedDate = formatedDate.split('-').join('/')
            console.log(formatedDate)
            epicInnerHTML += `
            <img src="https://api.nasa.gov/EPIC/archive/natural/${formatedDate}/png/${data[i].image}.png?api_key=9iBRUlZcAZrwtaYOHdQXFb29J6tnmGtqcjXaZhZv
            " alt="" srcset="">
            <div class="text-sm ">Caption : ${data[i].caption}</div>
            <div class="text-sm ">Date : ${data[i].date}</div>
            `
            
        }// Menggunakan 'textContent' untuk mengganti teks
        EPICONtent.innerHTML = epicInnerHTML
    });
});