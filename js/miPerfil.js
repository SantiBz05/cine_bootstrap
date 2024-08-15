document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (user) {
        document.getElementById('inputNombre').value = user.nombre;
        document.getElementById('inputApellido').value = user.apellido || '';
        document.getElementById('inputEmail').value = user.email;
        document.getElementById('inputPassword').value = user.password;
        document.getElementById('inputTelefono').value = user.telefono || '';
        document.getElementById('inputDni').value = user.dni || '';
    } else {
        console.error('No se encontraron datos de usuario en localStorage');
    }

    function showSuccessIcon(inputId) {
        const inputElement = document.getElementById(inputId);
        const icon = document.createElement('span');
        icon.className = 'ms-2 text-success';
        icon.innerHTML = '&#10004;'; // Tilde
        inputElement.parentNode.appendChild(icon);
    }

    function removeSuccessIcons() {
        document.querySelectorAll('.text-success').forEach(icon => icon.remove());
    }

    // Editar nombre
    document.getElementById('editName').addEventListener('click', function() {
        removeSuccessIcons();
        document.getElementById('inputNombre').removeAttribute('readonly');
        document.getElementById('inputNombre').focus();
        document.getElementById('saveName').style.display = 'inline-block';
        this.style.display = 'none';
    });

    document.getElementById('saveName').addEventListener('click', function() {
        const newNombre = document.getElementById('inputNombre').value;
        if (newNombre) {
            user.nombre = newNombre;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUserInList(user);

            document.getElementById('inputNombre').setAttribute('readonly', true);
            this.style.display = 'none';
            document.getElementById('editName').style.display = 'inline-block';

            showSuccessIcon('inputNombre');
        } else {
            alert('El nombre no puede estar vacío.');
        }
    });

    // Editar apellido
    document.getElementById('editApellido').addEventListener('click', function() {
        removeSuccessIcons();
        document.getElementById('inputApellido').removeAttribute('readonly');
        document.getElementById('inputApellido').focus();
        document.getElementById('saveApellido').style.display = 'inline-block';
        this.style.display = 'none';
    });

    document.getElementById('saveApellido').addEventListener('click', function() {
        const newApellido = document.getElementById('inputApellido').value;
        if (newApellido) {
            user.apellido = newApellido;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUserInList(user);

            document.getElementById('inputApellido').setAttribute('readonly', true);
            this.style.display = 'none';
            document.getElementById('editApellido').style.display = 'inline-block';

            showSuccessIcon('inputApellido');
        } else {
            alert('El apellido no puede estar vacío.');
        }
    });

    // Editar contraseña
    document.getElementById('editPassword').addEventListener('click', function() {
        removeSuccessIcons();
        document.getElementById('inputPassword').removeAttribute('readonly');
        document.getElementById('inputPassword').focus();
        document.getElementById('savePassword').style.display = 'inline-block';
        this.style.display = 'none';
    });

    document.getElementById('savePassword').addEventListener('click', function() {
        const newPassword = document.getElementById('inputPassword').value;
        if (newPassword) {
            user.password = newPassword;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUserInList(user);

            document.getElementById('inputPassword').setAttribute('readonly', true);
            this.style.display = 'none';
            document.getElementById('editPassword').style.display = 'inline-block';

            showSuccessIcon('inputPassword');
        } else {
            alert('La contraseña no puede estar vacía.');
        }
    });

    // Editar teléfono
    document.getElementById('editTelefono').addEventListener('click', function() {
        removeSuccessIcons();
        document.getElementById('inputTelefono').removeAttribute('readonly');
        document.getElementById('inputTelefono').focus();
        document.getElementById('saveTelefono').style.display = 'inline-block';
        this.style.display = 'none';
    });

    document.getElementById('saveTelefono').addEventListener('click', function() {
        const newTelefono = document.getElementById('inputTelefono').value;
        if (newTelefono) {
            user.telefono = newTelefono;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUserInList(user);

            document.getElementById('inputTelefono').setAttribute('readonly', true);
            this.style.display = 'none';
            document.getElementById('editTelefono').style.display = 'inline-block';

            showSuccessIcon('inputTelefono');
        } else {
            alert('El teléfono no puede estar vacío.');
        }
    });

    // Editar DNI
    document.getElementById('editDni').addEventListener('click', function() {
        removeSuccessIcons();
        document.getElementById('inputDni').removeAttribute('readonly');
        document.getElementById('inputDni').focus();
        document.getElementById('saveDni').style.display = 'inline-block';
        this.style.display = 'none';
    });

    document.getElementById('saveDni').addEventListener('click', function() {
        const newDni = document.getElementById('inputDni').value;
        if (newDni) {
            user.dni = newDni;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUserInList(user);

            document.getElementById('inputDni').setAttribute('readonly', true);
            this.style.display = 'none';
            document.getElementById('editDni').style.display = 'inline-block';

            showSuccessIcon('inputDni');
        } else {
            alert('El DNI no puede estar vacío.');
        }
    });

    // Función para actualizar el usuario en la lista de usuarios
    function updateUserInList(updatedUser) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        // Asegurarse de que los cambios se reflejan en la lista de usuarios
        users = users.map(user =>
            (user.email === updatedUser.email) ? updatedUser : user
        );
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Usuarios actualizados en localStorage:', JSON.parse(localStorage.getItem('users')));
    }

    // Función para validar email
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
