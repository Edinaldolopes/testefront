function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src ="assets/img/1clouse/white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src ="assets/img/menu_white_36dp.svg";
    
    }
    
}


{
document.getElementById('viewPhoneBtn').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') {
        phoneNumber.style.display = 'block'; 
    } else {
        phoneNumber.style.display = 'none'; 
    }
});
document.getElementById('2viewPhoneBtn').addEventListener('click', function() {
    var phoneNumber = document.getElementById('2phoneNumber');
    if (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') {
        phoneNumber.style.display = 'block'; 
    } else {
        phoneNumber.style.display = 'none';
    }
});
}
{
    function aplicarMascaraCpf(cpf) {
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
        return cpf;
    }

    function aplicarMascaraTelefone(telefone) {
        telefone = telefone.replace(/\D/g, ""); 
        telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2"); 
        telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); 
        return telefone;
    }

    document.getElementById('cpf').addEventListener('input', function(e) {
        e.target.value = aplicarMascaraCpf(e.target.value);
    });

    document.getElementById('telefone').addEventListener('input', function(e) {
        e.target.value = aplicarMascaraTelefone(e.target.value);
    });

    document.getElementById('submitBtn').addEventListener('click', function() {
        alert('Formulário enviado!');
    });  
}
function calcularRegraDe3() {
    const valorA = parseFloat(document.getElementById("valorA").value);
    const valorB = parseFloat(document.getElementById("valorB").value);
    const valorC = parseFloat(document.getElementById("valorC").value);

    if (!isNaN(valorA) && !isNaN(valorB) && !isNaN(valorC)) {
        const resultado = (valorB * valorC) / valorA;
        document.getElementById("resultado").textContent = "Resultado: " + resultado.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Resultado: ";
    }
}
{

}




var modal = document.getElementById("myModal");

        
        var btn = document.getElementById("openModalBtn");

       
        var span = document.getElementsByClassName("close")[0];

        
        btn.onclick = function() {
            modal.style.display = "flex"; 
        }


        span.onclick = function() {
            modal.style.display = "none";
        }

        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        document.getElementById('downloadBtn').addEventListener('click', function() {
            var link = document.createElement('a');
            link.href = document.getElementById('imageToDownload').src;
            link.download = 'imagem-baixada.jpg'; 
            link.click();
        });