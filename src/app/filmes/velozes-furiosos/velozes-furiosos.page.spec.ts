import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VelozesFuriososPage } from './velozes-furiosos.page';

describe('VelozesFuriososPage', () => {
  let component: VelozesFuriososPage;
  let fixture: ComponentFixture<VelozesFuriososPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VelozesFuriososPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VelozesFuriososPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
