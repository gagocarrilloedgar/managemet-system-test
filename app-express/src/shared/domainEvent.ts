import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

export interface DomainEvent {
  eventName: string;
  payload: any;
}

export interface DomainEventSubscriber {
  eventName: string;
  callback: (payload: any) => void;
}

export interface PublishDomainEvent {
  (domainEvent: DomainEvent): void;
}

export interface SubscribeToDomainEvent {
  (eventSubscriber: DomainEventSubscriber): void;
}

export const publishDomainEvent = (domainEvent: DomainEvent) => {
  eventEmitter.emit(domainEvent.eventName, domainEvent.payload);
};

export const subscribeToDomainEvent = (
  eventSubscriber: DomainEventSubscriber
) => {
  eventEmitter.on(eventSubscriber.eventName, eventSubscriber.callback);
};
