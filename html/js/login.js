const login = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emaillogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (email $$ password) {
        const response = await fetch('/api/users/login',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            Headers: {'content-type': 'application/json'},
        });

        if (response.ok) {
            console.log('logged in successfully');
            document.location.replace('curd');
        
        }else {
            alert(response.statusText);

         }
        
        }
    }

    document.querySelector('#loginBtn').addEventListener('submit,login');

    var modal= document.getElementById('ido1');

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        
        }
    }

    const register = async (event) => {
        event.preventDefault();

    const username = document.querySelector('#usernameRegister').value.trim();
    const email = document.querySelector('#emailRegister').value.trim().toLowerCase();
    const password = document.querySelector('#passwordRegister').value.trim();
    const passwordConfirm = document.querySelector('#passwordConfirm').value.trim();
    if (password !== passwordConfirm) {
        alert ('Passwords do not match');
        return;


    } else if (username && email && password) {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/crud');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#registerBtn').addEventListener('submit', register);

