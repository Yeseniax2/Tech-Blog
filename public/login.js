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

    document.querySelector('#loginBtn')
