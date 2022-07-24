let BudgetController = (() => {
    //here we create an income and an expense controller

    class Income {
        constructor(id,description, value){
            this.id = id;
            this.description = description;
            this.value = value
        }
    }

    class Expense {
        constructor(id,description, value, percentage = -1){
            this.id = id;
            this.description = description;
            this.value = value
            this.percentage = percentage
        }
    }

    let data = {
        allItem: {
            inc: [],
            exp: []
        },
        total: {
            inc: 0,
            exp: 0
        }
    }

    return {
        addItem: (type, desc, val) => {
            //we first generate a unique id for the income or expense
            let arr, newItem, id
            arr = data.allItem[type];
            if(arr.length === 0){
                id = 0;
            }else if(arr.length > 0){
                id = arr[arr.length - 1].id + 1;
            }

            //we call the constructor class to create the object based on the type
            if(type === 'inc'){
                newItem = new Income(id, desc, val);
            } else if(type === 'exp'){
                newItem = new Expense(id, desc, val);
            }
            //we save the element added to the array using the push method
            arr.push(newItem);
            return newItem;
        }
    }
})();

let UIController = (() => {
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
        container: '.container',
        expensePercentage: '.item__percentage',
        dateLabel: '.budget__title--month'
    
    }
    /*since this is an IIFE it is private and we need a return object which enable us use
    the functions publicly out of the function*/
    return {
        //getInput function enabling us fetch the user inputs using the DOM
        getInput: () => {
            return {
                type: document.querySelector(DOMInputs.inputType).value,
                description: document.querySelector(DOMInputs.inputDescription).value,
                value: document.querySelector(DOMInputs.inputValue).value
            }
        },
        getDOM: () => {
            return DOMInputs;
        },
        addListItems: (type, obj) => {
            let html, element, newHtml;
            if(type === 'inc'){
                //here if it is an income we set the id, description and value of the income item using html strings
                element = DOMInputs.incomeContainer
                html = '<div class="item clearfix" id="%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%val%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if(type === 'exp'){
                element = DOMInputs.expenseContainer;
                html = '<div class="item clearfix" id="%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%val%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            //here we save the data on the placeholders
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.desc)
            newHtml = newHtml.replace('%val%', obj.val);

            //here we pass the data into the DOM tree using insertAdjacentHtml
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }
    }
})();

let BridgeController = ((budgetCtrl, UICtrl) => {
    let selectedEvents = () => {
        let DOM = UICtrl.getDOM();
        document.querySelector(DOM.inputButton).addEventListener('click', addItemEvnt);
    }

    let addItemEvnt = ()=>{
        //here we get the inputs from the UIController then we will pass to the budgetController
        let newItem, inputs, lists
        inputs = UICtrl.getInput();
        //we want to put control over what the user inputs
        if(inputs.value !== '' && !isNaN(inputs.value) && inputs.value > 0){
            //here we pass the user inputs to the addElement function in the budgetController
            newItem = budgetCtrl.addItem(inputs.type, inputs.description, inputs.value);
            //here we save the income and expense input by the user as a list
            UICtrl.addListItems(inputs.type, newItem);
        }
    }

    return {
        init: () => {
            selectedEvents();
            addItemEvnt();
        }
    }
})(BudgetController, UIController);

BridgeController.init();