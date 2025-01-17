import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationsComponent } from './list-reservations.component';

describe('ListReservationsComponent', () => {
  let component: ListReservationsComponent;
  let fixture: ComponentFixture<ListReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
