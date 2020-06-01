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
        count: number;
    },[]] = [{
        title: "muhammed",
        text: "denie",
        count: 12,
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

