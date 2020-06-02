import { observable, action } from 'mobx';

class Store {
    @observable
    cards : {
        title: string,
        text: string
    }[] = [{
        title: "denem",
        text: "deneme"
    }];
 
    @observable
    working : {
        title: string,
        text: string
        timerStart: boolean;
    }[] = [];
    
    @action
    ekle = (yeni: any) => {
        this.cards.push(yeni);
    };

    @action
    cardsDelete = (deleteCard: any) => {
        console.log(this.cards);
        this.cards.splice(deleteCard,1);
    }
    @action 
    addWorking = (yeni: any) => {
        this.working.push(yeni);
    }

}


export default Store;

