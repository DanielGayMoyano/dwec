import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementosComponent } from './list-elementos.component';

describe('ListElementosComponent', () => {
  let component: ListElementosComponent;
  let fixture: ComponentFixture<ListElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListElementosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
