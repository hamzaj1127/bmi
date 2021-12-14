
          
            function computeBMI() {
                var height = document.getElementById("height").value;
                var weight = document.getElementById("weight").value;
        
        
                
        
                var weightInt = parseInt(weight);
                var heightInt = parseInt(height);
                var BMI = weightInt / Math.pow(heightInt, 2) * 703;
        
                document.getElementById("output").innerText = parseInt(BMI);
        
                var output = parseInt(BMI)
                if (output < 18.5)
                    document.getElementById("comment").innerText = "Underweight";
                else if (output >= 18.5 && output <= 25)
                    document.getElementById("comment").innerText = "Normal";
                else if (output >= 25 && output <= 30)
                    document.getElementById("comment").innerText = "Overweight";
                else if (output > 30)
                    document.getElementById("comment").innerText = "Obese";
            }
    