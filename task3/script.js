const calculateTemp = function(){
    const inputTemp = document.getElementById('temp').value;
    
    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFeh = (cel) => {
        let ferhenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return ferhenheit;
    }


    const FehtoCel = (fah) => {
        let celcius = ((fah - 32) * 5 / 9).toFixed(1);
        return celcius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFeh
        (inputTemp) + "&#176; Fahrenheit";
    }
    else{
        document.getElementById("result").innerHTML = FehtoCel
        (inputTemp) + "&#176; Celsius";
    }
}
