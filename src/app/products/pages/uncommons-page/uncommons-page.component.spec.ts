import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonsPageComponent } from './uncommons-page.component';

describe('UncommonsPageComponent', () => {
  let component: UncommonsPageComponent;
  let fixture: ComponentFixture<UncommonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UncommonsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UncommonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
