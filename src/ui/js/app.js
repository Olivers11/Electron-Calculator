class Calculador{

    constructor(ide){
        this.ide = ide;
    }

    Write()
    {
        if(this.ide == "btn_uno")
        {
            console.log("se esta ejecutando");
            return "1";
        }
        else if(this.ide == "btn_dos")
        {
            return "2";
        }
        else if(this.ide == "btn_tres")
        {
            return "3";
        }
        else if(this.ide == "btn_cuatro")
        {
            return "4";
        }
        else if(this.ide == "btn_cinco")
        {
            return "5";
        }
        else if(this.ide == "btn_seis")
        {
            return "6";
        }
        else if(this.ide == "btn_siete")
        {
            return "7";
        }
        else if(this.ide == "btn_ocho")
        {
            return "8";
        }
        else if(this.ide == "btn_cero")
        {
            return "0";
        }
        else if(this.ide == "btn_mas")
        {
            return "+";
        }
        else if(this.ide == "btn_menos")
        {
            return "-";
        }
        else if(this.ide == "btn_multiplicar")
        {
            return "*";
        }
        else
        {
            return "9";
        }
    }

    ObtenerPosicion(cadena)
    {
        var operaciones = "*-+"
        for(var i in operaciones){
            for(var x in cadena){
                if(cadena[x] == operaciones[i]){
                    return x;
                }
            }
        }
    }

    Operar(cadena)
    {
        var parte1 = "";
        var parte2 = "";
        for(var i = 0; i < this.ObtenerPosicion(cadena); i++)
        {
            parte1 += cadena[i];
        }
        var tamanio = this.ObtenerPosicion(cadena);
        for(var x = parseInt(tamanio)+1; x < cadena.length; x++)
        {
            console.log(cadena[x]);
            parte2 += cadena[x];
        }
        var caja = document.getElementById('txt_result');
        //alert("Esta sumando: " + parte1 + " - " + parte2);
        if(cadena[this.ObtenerPosicion(cadena)] == "+")
        {
            this.Sumar(parte1, parte2, caja);
        }
        else if (cadena[this.ObtenerPosicion(cadena)] == "-")
        {
            this.Restar(parte1, parte2, caja);
        }
        else
        {
            this.Multiplicar(parte1, parte2, caja);
        }
    }

    Sumar(num1, num2, item)
    {
        item.value = parseInt(num1) + parseInt(num2);
    }

    Restar(num1, num2, item)
    {
        item.value = parseInt(num1) - parseInt(num2);
    }

    Multiplicar(num1, num2, item)
    {
        item.value = parseInt(num1) * parseInt(num2);
    }

    Clasificar()
    {
        var elemento = document.getElementById('txt_result')
        if(this.ide == "btn_reset")
        {
            var cade_ = elemento.value;
            var cadena = "";
            for(var i = 0; i < cade_.length-1; i++)
            {
                cadena += cade_.charAt(i);
                console.log(cade_.charAt(i));
            }
            elemento.value = cadena;
        }
        else if(this.ide == "btn_delete")
        {
            elemento.value = "";
            elemento.focus();
        }
        else if(this.ide == "btn_resultado")
        {
            this.Operar(elemento.value);
        }
        else
        {
            elemento.value += this.Write();
        }
    }
}




function main(element){
    var joder = new Calculador(element.id);
    joder.Clasificar();
}