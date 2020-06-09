import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolSetupPage } from './school-setup.page';

describe('SchoolSetupPage', () => {
  let component: SchoolSetupPage;
  let fixture: ComponentFixture<SchoolSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
