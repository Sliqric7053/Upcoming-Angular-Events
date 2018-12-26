import { TestBed, async, inject } from '@angular/core/testing';

import { EventRouteActivatorGuard } from './event-route-activator.guard';

describe('EventRouteActivatorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteActivatorGuard]
    });
  });

  it('should ...', inject([EventRouteActivatorGuard], (guard: EventRouteActivatorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
