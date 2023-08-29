const form = document.querySelector('form');

async function sending(data) {
    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        mode: 'cors',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //sending(form)
    console.log(e.value)

    const fd = new FormData(form);

    const urlEncoded = new URLSearchParams(fd).toString();

    fetch('http://localhost:8080/dataBank', {
        method: 'POST',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

})