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


    @action
    ekle = (yeni: any) => {
        this.cards.push(yeni);
    } 


}


export default Store;

