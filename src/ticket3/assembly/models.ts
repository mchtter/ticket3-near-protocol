import { PersistentVector, Context } from "near-sdk-as"
import { AccountId } from "../../utils"

@nearBindgen
export class Ticket {

    owner: AccountId;
    whatTicket: string;
    isVip: bool;

    constructor(_whatTicket: string, _isVip: bool) {
        this.owner = Context.sender;
        this.whatTicket = _whatTicket;
        this.isVip = _isVip;
    }
    
}


export const tickets = new PersistentVector<Ticket>('t') // tickets is a persistent vector of tickets