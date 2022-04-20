import { PersistentVector, Context } from "near-sdk-as"
import { AccountId } from "../../utils"

@nearBindgen
export class Ticket {

    owner: AccountId;
    activityType: string;
    isVip: bool;

    constructor(_activityType: string, _isVip: bool) {
        this.owner = Context.sender;
        this.activityType = _activityType;
        this.isVip = _isVip;
    }
    
}


export const tickets = new PersistentVector<Ticket>('t') // tickets is a persistent vector of tickets
