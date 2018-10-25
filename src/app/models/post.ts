export class Post {
    public created_at: number;
    public loveIts: number;
    constructor(public title: string, public content: string) {
        this.created_at = new Date().getTime();
        this.loveIts = 0;
    }
}
