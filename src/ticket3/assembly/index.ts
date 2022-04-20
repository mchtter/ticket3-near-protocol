import { AccountId } from "../../utils";
import { Ticket, tickets  } from "./models";

export function healthCheck(): string {
  return "ok";
}

export function buyTicket(activityType: string, isVip: bool): void {
    const ticket = new Ticket(activityType, isVip);
    tickets.push(ticket);
}

export function getTickets(): Array<Ticket> {
  let ticketList = new Array<Ticket>();

  for(let i = 0; i < tickets.length; i++) {
    ticketList[i] = tickets[i]
  }

  assert(ticketList.length != 0, "No tickets found in system")

  return ticketList
}

export function getTicketByOwner(ownerId: AccountId): Array<Ticket> {
  let ticketList = new Array<Ticket>();

  for(let i = 0; i < tickets.length; i++) {
    if(tickets[i].owner == ownerId) {
      ticketList.push(tickets[i])
    }
  }

  assert(ticketList.length != 0, "No tickets found for owner")

  return ticketList
}
