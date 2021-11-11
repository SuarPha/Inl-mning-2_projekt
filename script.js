// item controller //

const itemControl = (function(){
        //item control//
    const Item = function(id, description, summa){
        this.id = id;
        this.description = description;
        this.summa = summa;
    }

       //data structure//
    const data = {
        items: []
    }

        //public method//
    return{
        logData: function(){
            return data;
        }
    }
})();

//UI Controller//

const UIControl = (function(){
        //UI Selecter //

    const UISelectors = {
        inkomstBtn: '#add_inkomst',
        avgiftBtn: '#add_avgifter',
        description: '#description',
        value: '#value',
        inkomster: '#summa_earned',
        kostnader: '#summa_avgift',
        vinst: '#summa_vinst',
        inkomstList: '#inkomst_container',
        kostnadList: '#avgifter_container',
        inkomstItem: '.inkomst_summa',
        kostnadItem: '.kostnad_summa',
        itemContainer: '.items_container'
    }
        //public methods //
    return{
        //return//
    getSelectors: function(){
        return UISelectors
    },
    getDescriptionInput: function(){
        return{
            this.getDescriptionInput: document.querySelector(UISelectors.description).value
        }
    },
    getValueInput: function(){
        return{
            
        }
    }
    
    }
})();

        //App Cobtroller//

const App = (function(){
        //event listeners//
    const loadEventListeners = function(){
        //get ui selestor//
    const UISelectors = UIControl.getSelectors();
        //add new income//
    document.querySelector(UISelectors.inkomstBtn).addEventListener
        ('click', addInkomst);
    }

        //add new income//
    const addInkomst = function(){
            //get description and amount value//
    const description = UIControl.getDescriptionInput();
    const summa = UIControl.getValueInput();

    }
        
        //init function
    return{
        init: function(){
            loadEventListeners();
        }
    }

})