module.exports = class Bankomat {

    cardInserted = false;
    card;
    amount;
    machineBalance = 11000;
    msgs = [];
    pinAttempts = 0;

    getMessage(){
        return this.msgs.shift();
    }

    insertCard(card){
        this.cardInserted = true;
        this.card = card;
        this.msgs.push("Card inserted");
        if(!this.card.pin){
            this.msgs.push('Create new pin code');
        }
    }

    ejectCard(){
        this.cardInserted = false;
        this.msgs.push("Card removed, don't forget it!");
    }

    eatCard(){
        this.cardInserted = false;
        this.msgs.push("Card kept. Contact your bank.");
    }

    createPin(pin){
        this.card.pin = pin;
        this.msgs.push("Pin created. You can start using your card.");
        this.ejectCard();
    }

    enterPin(pin){
        if(this.card.pin == pin){
            this.msgs.push("Correct pin");
            this.pinAttempts = 0;
            return true;            
        }else{
            this.msgs.push("Incorrect pin");
            this.pinAttempts++;
            if(this.pinAttempts > 2){
                this.eatCard();
            }
            return false;
        }
    }

    withdraw(amount){
        if(amount <= this.machineBalance && amount <= this.card.account.getBalance()){
            this.machineBalance -= amount;
            this.card.account.withdraw(amount);
            this.msgs.push("Withdrawing " + amount);
            return amount;
        }else{
            if(amount > this.machineBalance){
                this.msgs.push("Machine has insufficient funds"); 
            }else if(amount > this.card.account.getBalance()){
                this.msgs.push("Card has insufficient funds");
            }                
            return 0;
        }
    }

}
