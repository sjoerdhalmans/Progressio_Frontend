import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicUpdateModalComponent } from './epic-update-modal.component';

describe('EpicUpdateModalComponent', () => {
  let component: EpicUpdateModalComponent;
  let fixture: ComponentFixture<EpicUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
