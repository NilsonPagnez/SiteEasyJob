const senha= document.querySelector('.senha');
const visaoSenha = document.querySelector('.img_password');

visaoSenha.addEventListener('click', () =>{
    if(senha.getAttribute('type') == "password"){
        senha.setAttribute('type', 'text');
        visaoSenha.setAttribute('src', '/image/Icon_password_visible.png');
        

    }else{

        visaoSenha.setAttribute('src', '/image/Icon_Password_hidden.png')
        senha.setAttribute('type', 'password')
    }

    

})