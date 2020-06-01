import { observable, action } from 'mobx';

class Store {
    @observable
    cards : [{
        title: string,
        text: string
    },[]] = [{
        title: "denem",
        text: "deneme"
    },
    {
        title: "fdas",
        text: "deneme"
    }];



    @observable
    working : [{
        title: string,
        text: string
        timerStart: boolean;
    },[]] = [{
        title: "muhammed",
        text: "denie",
        timerStart: false,
    } ];
    
    @action
    ekle = (yeni: any) => {
        this.cards.push(yeni);
    };

    @action 
    addWorking = (yeni: any) => {
        this.working.push(yeni);
    }

}


export default Store;

