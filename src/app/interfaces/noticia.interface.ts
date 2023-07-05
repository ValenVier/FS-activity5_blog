export interface Noticia {
    title:string;
    image:Array<{
        url:string,
        title:string
    }>;
    text:string;
    date:Date;
}
