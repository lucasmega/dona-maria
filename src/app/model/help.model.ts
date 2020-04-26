export class HelpModel {
    public id: number;
    public item: string;
    public icon: string;
    public page: boolean;
    public menu: string;

    constructor() {
        this.id = 0;
        this.item = '';
        this.icon = '';
        this.page = false;
        this.menu = '';
    }
}