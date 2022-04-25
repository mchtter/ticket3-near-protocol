# `Ticket3`

Ticket3 is an application where you can buy tickets through the Near network. This Smart Contract allows you to buy unique tickets for many genres such as concert, theatre, cinema, conference.

## Build, Deploy and Use Project
  
```bash
  near login
```

Using the below comments this app can be deployed to near testnet
```bash
	yarn build:release
```

```bash
	near dev-deploy ./build/release/ticket3.wasm
```

```bash
	export CONTRACT=<dev account>
```

This AssemblyScript contracts in this project, each in their own folder:

- **ticket3** in the `src/ticket3` folder

### Ticket3

We say that an AssemblyScript contract is written in the "ticket3" when the `index.ts` file (the contract entry point) includes a series of exported functions.

In this case, all exported functions become public contract methods.

```ts
// return the string 'ok' for health check system
export function healthCheck(): string {}


// send ticket type and vip status to buy ticket
export function buyTicket(activityType: string, isVip: bool): void {}
// near call $CONTRACT buyTicket '{ "activityType":  "Theatre", "isVip": false }'  --accountId mchtter.testnet --amount 2


// shows all tickets in the system
export function getTickets(): Array<Ticket> {}
// near view $CONTRACT getTickets


// Shows all tickets in the system by owner
export function getTicketByOwner(ownerId: AccountId): Array<Ticket> {}
// near call $CONTRACT getTicketByOwner '{ "ownerId":  "mchtter.testnet" }'  --accountId mchtter.testnet  

```