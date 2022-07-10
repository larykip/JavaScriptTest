let BudgetController = (function() {
    //we create two constructors

    //Income constructor
    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    };

    //Expense constructor
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    }

    let myCalculator = function(type){
        let sum = 0;
        //here we will use forEach to loop through the array and help us calculate the sum of values in the array
        data.allItems[type].forEach(function(currentVal) {
            sum += currentVal.value
        });

        data.total[type] = sum;

            
    }
    let data = {
        allItems: {
            inc: [],
            exp: []
        },
        total: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, desc, val){
            let newItem,ID, arr;
            arr = data.allItems[type];

            if(arr.length === 0){
                ID = 0;
            } else if(arr.length > 0){
                //ID = (arr.length - 1) + 1
                ID = arr[arr.length -1].id + 1;
            }

            //ID = (arr.length) + 1
            if(type === 'inc'){
                newItem = new Income(ID, desc, val)
            } else if(type === 'exp'){
                newItem = new Expense(ID, desc, val);
            }

            data.allItems[type].push(newItem);

            return newItem
        },

        checkArray: function(){
            return data.allItems;
        },
        budgetCalculator: function(){
            //we call the income and expense totals that we calculated via the calculator function
            myCalculator('inc');
            myCalculator('exp');
        
            //here we calculate the budget which is income - expense
            data.budget = data.total.inc - data.total.exp;

            //here we calculate the percentage which is (expense/income) * 100
            //we will also round of the percentage using the Math.round() function
            /*but here we will have an if statement to ensure that the income is not 0 so as to avoid creating
            an infinite percentage*/
            if(data.total.inc > 0){
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
            } else {
                data.percentage = -1;
            }

        },

        //we create a create budget function which will create a return object that returns all required budget data

        getBudget: function(){
            return{
                income: data.total.inc,
                expense: data.total.exp,
                budget: data.budget,
                percentage: data.percentage

            }
        },
        deleteItem: function(type, id){
            let ids, index;
            //we use the map function as it returns a new array with the ids data we are interested in
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            //here we use the indexOf to give us the index position of the id passed on the array
            index = ids.indexOf(id);
            if(index !== -1){
                //here we use the splice method which will help remove the element with the index from the array
                /*the splice method has two parameters, the first is the index we want to remove and the second
                is how many elements we want to remove*/
                data.allItems[type].splice(index, 1);
            }
        }
    }
})();

let UIController = (function() {
    let DOMInputs = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetValue: '.budget__value',
        incomeValue: '.budget__income--value',
        expenseValue: '.budget__expenses--value',
        percentageValue: '.budget__expenses--percentage',
        container: '.container'
    
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMInputs.inputType).value,
                description: document.querySelector(DOMInputs.inputDescription).value,
                //here we will use a parseFloat to convert the sting into a float number
                value: parseFloat(document.querySelector(DOMInputs.inputValue).value)

            }
        },
        getDOM: function() {
            return DOMInputs;
        },

        addListItem: function(obj, type) {
            let html, newHtml, element;
            //we will use an if function which will check if it is an income or an expense then pass an appropriate placeholder string
            if(type === 'inc'){
                element = DOMInputs.incomeContainer;
                //we pass placeholders as html strings
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp'){
                element = DOMInputs.expenseContainer;
                //we pass placeholders as html strings
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //we replace the placeholders with the values
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //we insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
        
        },

        clearInputFields: function(){
            let fields, fieldArray
            //we use querySelectorall to fetch all input fields we need to clear
            fields = document.querySelectorAll(DOMInputs.inputDescription + ', ' + DOMInputs.inputValue);
            //we use an Array prototype method to trick the slice property that the input is an array

            fieldArray = Array.prototype.slice.call(fields);

            fieldArray.forEach(function(current, index, array){
                current.value = "";
            });

            fieldArray[0].focus();


        },

        displayBudget: function(obj){
            document.querySelector(DOMInputs.budgetValue).textContent = obj.budget;
            document.querySelector(DOMInputs.incomeValue).textContent = obj.income;
            document.querySelector(DOMInputs.expenseValue).textContent = obj.expense;
            if(obj.percentage > 0){
                document.querySelector(DOMInputs.percentageValue).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMInputs.percentageValue).textContent = '---';
            }
        }, 
        removeItemUI: function(selectorID){
            //to remove element we will pass the child also which is same as the id we will be ap
            let x = document.getElementById(selectorID);
            x.parentNode.removeChild(x);
        }
    }
})();

let BridgeController = (function(budgetCtrl, UICtrl) {

    let selectedEvents = function() {
        //we access the DOMInputs from UIController
        let DOM = UICtrl.getDOM();
        //clicking the button event
        document.querySelector(DOM.inputButton).addEventListener('click', function() {
            addItemEvnt();
        });

        //pressing the enter button event
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                addItemEvnt();
            }
        });

        //here we do a delete event for either income or expense list
        /*we will use event delegation to achieve this and thus we will pick a parent node that shelves the income
        and expense*/
        document.querySelector(DOM.container).addEventListener('click', function(event) {
            let itemID, splitID, type, ID;
            // by using the parentNode, we are able to traverse up to the parent node where we are able to fetch the id
            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
            
            if(itemID){
                // we will then use a splice to further explore into the id and fetch the digit value
                splitID = itemID.split('-');
                type = splitID[0];
                ID = parseInt(splitID[1]);
                
                //here we pass our delete method from the budget controller that remove item from array
                budgetCtrl.deleteItem(type, ID);

                //here we remove the item from UI
                UICtrl.removeItemUI(itemID);

                //update Budget
                calculateBudget();
            }

        });
    }

    let calculateBudget = function(){
        //here we call the budgetcalculator
        budgetCtrl.budgetCalculator();

        let myBudget = budgetCtrl.getBudget();
        //console.log(myBudget);

        //here we display the budget
        UICtrl.displayBudget(myBudget);
    }

    //we create an add item key function
    //this function will allow to events, 1: by clicking the button 2: By pressing the enter button
    let addItemEvnt = function() {
        //here we get the UI input
        let inputs = UICtrl.getInput();
        //console.log(inputs);

        /*here we will pass an if statement wich will ensure the value is greater than 0, and ensure both the
        description field and value field are not empty*/
        if(inputs.description !== "" && !isNaN(inputs.value) && inputs.value > 0){
            //here we add the inputs to the budget controller
            let newItem = budgetCtrl.addItem(inputs.type, inputs.description, inputs.value);
            let x = budgetCtrl.checkArray();

            //here we calculate the budget
            UICtrl.addListItem(newItem, inputs.type);

            //here we clear the input fields
            UICtrl.clearInputFields();
            //here we calculate & display the budget each time the item is added
            calculateBudget();
        }

        
    }


    return {
        init: function() {
            selectedEvents();
            UICtrl.displayBudget({
                income: 0,
                expense: 0,
                budget: 0,
                percentage: 0})
        }
    }

})(BudgetController, UIController);

BridgeController.init();