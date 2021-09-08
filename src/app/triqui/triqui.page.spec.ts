import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GameService } from '../services/game/game.service';
import { TableService } from '../services/table/table.service';

import { TriquiPage } from './triqui.page';

describe('TriquiPage', () => {
  let component: TriquiPage;
  let fixture: ComponentFixture<TriquiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriquiPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        TableService,
        GameService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TriquiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
