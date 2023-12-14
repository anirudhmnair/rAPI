import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAppsComponent } from './side-nav-apps.component';

describe('SideNavAppsComponent', () => {
  let component: SideNavAppsComponent;
  let fixture: ComponentFixture<SideNavAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SideNavAppsComponent]
    });
    fixture = TestBed.createComponent(SideNavAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
