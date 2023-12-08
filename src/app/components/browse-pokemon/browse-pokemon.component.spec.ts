import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePokemonComponent } from './browse-pokemon.component';

describe('BrowsePokemonComponent', () => {
  let component: BrowsePokemonComponent;
  let fixture: ComponentFixture<BrowsePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowsePokemonComponent]
    });
    fixture = TestBed.createComponent(BrowsePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
