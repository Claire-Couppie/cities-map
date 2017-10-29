export default class Model { 
    constructor(){
        this._list = JSON.parse(this.getgist("https://gist.githubusercontent.com/nept/0f311e330a7881fff35d9a8aca129bb2/raw/1227b03c6f85950095b302c4c0c5f5843a604094/cities.json"));
    }

    getSubList(from, nbCities){
       return this._list.slice(from, from + nbCities);
    }

    getCitiesCount(){
        return this._list.length;
    }

    getgist(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
    }
 } 

