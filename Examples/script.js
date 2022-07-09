/*
    Coding Challenge 1
    let myName = prompt('Please Enter Your Name: ');
    let age = prompt('Please enter your age: ');
    if(myName === 'Hillary'){
        if(age < 18){
            console.log('You are a teenager therefore under age!!');
        } else if(age >= 18 && age <=36){
            console.log('You are a youth therefore an adult!!');
        } else{
            console.log('You are a senior adult!!');
        }
    } else{
        console.log('Sorry. You are not in our database!!');
    }
 */

    /*
    Coding Challenge 2
    let teamJohn = 89 + 120 + 103;
    let teamMike = 116 + 94 + 123;
    let teamMary = 97 + 134 + 105;

    let averageTJ = teamJohn / 3;
    let averageTM = teamMike / 3;
    let averageTMary = teamMary / 3;

    function tie(){
        if(averageTMary == averageTM && averageTMary == averageTJ){
            return (`Team Mike and Team Mary and Team John : ${teamMary}`);
        } else if(averageTJ == averageTMary){
            return (`Team John and Team Mary: ${teamMary}`);
        } else if(averageTM == averageTMary){
            return (`Team Mike and Team Mary: ${teamMike}`)
        } else if(averageTJ == averageTM){
            return (`Team John and Team Mike: ${teamJohn}`)
        }
    }

    if(averageTJ > averageTM && averageTJ > averageTMary){
        console.log(`Team John is the winner with ${teamJohn} points`);
    } else if(averageTM > averageTJ && averageTM > averageTMary ){
        console.log(`Team Mike is the winner with ${teamMike} points`);
    } else if(averageTMary > averageTJ && averageTMary > averageTM){
        console.log(`Team Mary is the winner with ${teamMary} points`);
    } else{
        console.log('No winner!! ' + tie() + ' points has finished with a tie')
    }
    */

    /*Coding Challenge 3
    let tipArray = [];
    let totalPay = [];

    function tip(bill){
        let waiterTip;
        let totalBill;

        if(bill < 50){
            waiterTip = 0.2 * bill;
            tipArray.push(waiterTip);
            totalBill = bill + waiterTip
            totalPay.push(totalBill);

        }
        else if(bill >= 50 && bill <= 200){
            waiterTip = 0.15 * bill;
            tipArray.push(waiterTip);
            totalBill = bill + waiterTip
            totalPay.push(totalBill);
        }
        else{
            waiterTip = 0.1 * bill
            tipArray.push(waiterTip);
            totalBill = bill + waiterTip
            totalPay.push(totalBill);
        }

        return waiterTip;
    }

    let bill1 = tip(124);
    let bill2 = tip(48);
    let bill3 = tip(268);

    console.log( bill1 + '  ' + bill2 + '  ' + bill3);
    console.log(tipArray);
    console. log(totalPay);
     */

    /* Coding Challenge 4
    let JohnData = {
        firstName: 'John',
        lastName: 'Doe',
        mass: 78,
        height: 1.78,
        calcBMI: function(){
            return this.BMI = this.mass / (this.height * this.height);
        }
     }

     JohnData.calcBMI();
     console.log(JohnData);

     MarkData = {
        firstName: 'Mark',
        lastName: 'Stevens',
        mass: 96,
        height: 1.78,
        calcBMI: function(){
            this.BMI = this.mass / (this.height * this.height);
        }
        
     }

     MarkData.calcBMI();
     console.log(MarkData);

     function varianceBMI(){
        if(JohnData.BMI > MarkData.BMI){
            return console.log(JohnData.firstName +' '+ JohnData.lastName +' has the highest BMI of: ' + JohnData.BMI);
        }
        else if (MarkData.BMI > JohnData.BMI){
            return console.log(MarkData.firstName +' '+ MarkData.lastName +' has the highest BMI of: ' + MarkData.BMI);
        }
        else{
            return console.log('Both Mark and John have the same BMI');
        }
     }

     console.log(varianceBMI());
    */

     /* End of Video 1 Coding Challenge
     let JohnTipCalculatorChecker = {
        bills: [124, 48, 268, 180, 42],
        tipsRecord: [],
        totalBill: [],
        TipCalculator: function (){
            for(i = 0; i < this.bills.length; i++){
                if(this.bills[i] < 50){
                    let tip = 0.2 * this.bills[i];
                    this.tipsRecord.push(tip);
                    let totalPay = this.bills[i] + tip;
                    this.totalBill.push(totalPay);
                }
                else if(this.bills[i] >= 50 && this.bills[i] < 200){
                    let tip = 0.15 * this.bills[i];
                    this.tipsRecord.push(tip);
                    let totalPay = this.bills[i] + tip;
                    this.totalBill.push(totalPay);
                }
                else{
                    let tip = 0.1 * this.bills[i];
                    this.tipsRecord.push(tip);
                    let totalPay = this.bills[i] + tip;
                    this.totalBill.push(totalPay);
                }
            }
        }
     }

     JohnTipCalculatorChecker.TipCalculator();
     console.log(JohnTipCalculatorChecker);


     let MarkTipCalculatorChecker = {
        bills: [77, 375, 110, 45],
        totalRecord: [],
        totalBill: [],
        TipCalculator: function(){
            for(x = 0; x < this.bills.length; x++){
                if(this.bills[x] < 100){
                    let tip = this.bills[x] * 0.2;
                    this.totalRecord.push(tip);
                    let totalPay = this.bills[x] + tip;
                    this.totalBill.push(totalPay);
                }
                else if(this.bills[x] >= 100 && this.bills[x] < 300){
                    let tip = this.bills[x] * 0.1;
                    this.totalRecord.push(tip);
                    let totalPay = this.bills[x] + tip;
                    this.totalBill.push(totalPay);
                }
                else{
                    let tip = this.bills[x] * 0.25;
                    this.totalRecord.push(tip);
                    let totalPay = this.bills[x] + tip;
                    this.totalBill.push(totalPay);
                }
            }
        }
     }

     MarkTipCalculatorChecker.TipCalculator();
     console.log(MarkTipCalculatorChecker);

     function averageCalculator(myArray){
        let sum = 0
        let average;
        for(i = 0; i < myArray.length; i++){
            sum += myArray[i];
            average = sum / myArray.length;
        }
        return average;
     }

     JohnTipCalculatorChecker.tipAverage = averageCalculator(JohnTipCalculatorChecker.tipsRecord);
     MarkTipCalculatorChecker.tipAverage = averageCalculator(MarkTipCalculatorChecker.totalRecord);

     if(MarkTipCalculatorChecker.tipAverage > JohnTipCalculatorChecker.tipAverage){
        console.log('Mark paid the highest average tip of ' + MarkTipCalculatorChecker.tipAverage);
     }
     else if(JohnTipCalculatorChecker.tipAverage > MarkTipCalculatorChecker.tipAverage){
        console.log('John paid the highest average tip of ' + JohnTipCalculatorChecker.tipAverage);
     }
     else{
        console.log('Mark and John paid the same average tip.');
     }
     */

     

    