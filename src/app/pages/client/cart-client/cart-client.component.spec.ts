import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartClientComponent } from './cart-client.component';

describe('CartClientComponent', () => {
  let component: CartClientComponent;
  let fixture: ComponentFixture<CartClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
