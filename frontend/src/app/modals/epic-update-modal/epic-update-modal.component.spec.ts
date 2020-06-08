import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicUpdateModalComponent } from './epic-update-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EpicUpdateModalComponent', () => {
  let component: EpicUpdateModalComponent;
  let fixture: ComponentFixture<EpicUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ EpicUpdateModalComponent ],
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
