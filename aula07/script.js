function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';

        // Verifica qual radio button está selecionado
        for (var i = 0; i < fsex.length; i++) {
            if (fsex[i].checked) {
                genero = fsex[i].id === 'isexo' ? 'Masculino' : 'Feminino';
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
}
