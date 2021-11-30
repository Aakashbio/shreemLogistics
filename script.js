const SubmitData = () => {
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const query = document.getElementById('query').value;

    const data = { email, mobile, query };
    if(!email) {
        alert('Please enter email address');
    }
    else if(!mobile) {
        alert('Please enter mobile number');
    }
    else if(!query) {
        alert('Please enter message');
    }
    else{
        fetch('http://172.105.61.108/api/shreemlogistics/shreemAdmin/contactUsQuery', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Your query has been submitted.")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}