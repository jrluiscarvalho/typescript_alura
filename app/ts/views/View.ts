abstract class View<T>{
    private _elemento: JQuery;

    constructor(selector: string){
        this._elemento = $(selector);
    }

    update(model: T):void{
        this._elemento.html(this.template(model));
    }


    template(model: T): string {
        throw new Error('Você deve implementar o método template');
    }
}