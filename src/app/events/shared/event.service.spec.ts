import { EventService } from './event.service';
import { of } from 'rxjs';
import { IEvent } from './event.model';

describe('EventService:', () => {
  let eventService: EventService;
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post']);
    eventService = new EventService(mockHttp);
  });

  it('should create', () => {
    expect(eventService).toBeTruthy();
  });

  describe('getEvents', () => {
    it('should call http.get with the correct url', () => {
      mockHttp.get.and.returnValue(of(false));
      eventService.getEvents();

      expect(mockHttp.get).toHaveBeenCalledWith('/api/events');
    });
  });

  describe('getEvent', () => {
    it('should call http.get with the correct url', () => {
      mockHttp.get.and.returnValue(of(false));
      const eventId = 1;

      eventService.getEvent(eventId);

      expect(mockHttp.get).toHaveBeenCalledWith('/api/events/1');
    });
  });

  describe('searchSessions', () => {
    it('should call http.get with the correct url', () => {
      mockHttp.get.and.returnValue(of(false));
      const searchTerm = 'johnny';

      eventService.searchSessions(searchTerm);
      expect(mockHttp.get).toHaveBeenCalledWith(
        '/api/sessions/search?search=johnny'
      );
    });
  });

  describe('saveEvent', () => {
    it('should call http.post with the correct url', () => {
      mockHttp.post.and.returnValue(of(false));
      const event: IEvent = <IEvent>{ id: 1, name: 'Angular 4 Ever' };

      eventService.saveEvent(event);

      expect(mockHttp.post).toHaveBeenCalledWith(
        '/api/events/',
        event,
        jasmine.any(Object)
      );
    });
  });
});
