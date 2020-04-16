import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WazeComponent } from './waze.component';

describe('WazeComponent', () => {
  let component: WazeComponent;
  let fixture: ComponentFixture<WazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WazeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
