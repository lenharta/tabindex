type EventHandler<Event> = ((event?: Event) => void) | undefined;

export function createEventCallback<Event>(
  parentEventCallback: EventHandler<Event>,
  eventCallback: EventHandler<Event>
) {
  return (event?: Event) => {
    parentEventCallback?.(event);
    eventCallback?.(event);
  };
}
