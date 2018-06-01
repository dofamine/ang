export class Phone {
    constructor(private _diller: string,
                private _model: string,
                private _imageUrl: string,
                private _battery: string,
                private _description: string) {
    }

    get diller(): string {
        return this._diller;
    }

    set diller(value: string) {
        this._diller = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get battery(): string {
        return this._battery;
    }

    set battery(value: string) {
        this._battery = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}