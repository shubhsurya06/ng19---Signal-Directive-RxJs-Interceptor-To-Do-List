import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCombineComponent } from './rxjs-combine.component';

describe('RxjsCombineComponent', () => {
  let component: RxjsCombineComponent;
  let fixture: ComponentFixture<RxjsCombineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsCombineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
