import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavApiComponent } from './side-nav-api.component';

describe('SideNavApiComponent', () => {
  let component: SideNavApiComponent;
  let fixture: ComponentFixture<SideNavApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SideNavApiComponent]
    });
    fixture = TestBed.createComponent(SideNavApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
