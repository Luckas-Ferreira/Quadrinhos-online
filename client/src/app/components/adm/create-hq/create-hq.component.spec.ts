import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHQComponent } from './create-hq.component';

describe('CreateHQComponent', () => {
  let component: CreateHQComponent;
  let fixture: ComponentFixture<CreateHQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHQComponent]
    });
    fixture = TestBed.createComponent(CreateHQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
