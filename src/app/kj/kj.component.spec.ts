import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjComponent } from './kj.component';

describe('KjComponent', () => {
  let component: KjComponent;
  let fixture: ComponentFixture<KjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
