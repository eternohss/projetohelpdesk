import { User } from './user.model';

export class Ticket {
    constructor(
        public id: string,
        public number: number,
        public title: string,
        public status: string,
        public priority: string,
        public imagem: string,
        public user: User,
        public assingneUser: string,
        public date: string,
        public change: Array<String>
    ) {

    }

}