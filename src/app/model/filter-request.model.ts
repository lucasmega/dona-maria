export class FilterRequest {

    public id: number;
    public item: string;
    public icon: string;
    public menu: string;

    constructor() {
        this.id = 0;
        this.item = '';
        this.icon = '';
        this.menu = '';
    }
}