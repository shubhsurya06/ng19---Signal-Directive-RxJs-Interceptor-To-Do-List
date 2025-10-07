import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUlComponent } from './my-ul.component';

describe('MyUlComponent', () => {
  let component: MyUlComponent;
  let fixture: ComponentFixture<MyUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
