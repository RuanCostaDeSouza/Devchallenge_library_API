import { v4 as uuid } from "uuid"

export class BookEntity {
    public readonly id:string
    public title:string
    public publishing_company:string
    public picture :string
    public author :string

    constructor(props:Omit<BookEntity,'id'>,id?:string){
        Object.assign(this,props)

        if(!this.id){
            this.id = uuid()
        }
    }
}