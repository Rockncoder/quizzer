/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {BackcolorDirective} from './backcolor.directive';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `
  <h2 appBackcolor="yellow">Something Yellow</h2>
  <h2 appBackcolor="">The Default (Gray)</h2>
  <h2>No BackColor</h2>
  <input #box [appBackcolor]="box.value" value="cyan"/>`
})
class TestComponent {
}

describe('Directive: Backcolor', () => {
  let des;
  let fixture;
  let bareH2;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BackcolorDirective, TestComponent]
    })
      .createComponent(TestComponent);
    fixture.detectChanges(); // initial binding
    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(BackcolorDirective));
    // the h2 without the HighlightDirective
    bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));
  });


  it('should create an instance', () => {
    let directive = new BackcolorDirective(null, null);
    expect(directive).toBeTruthy();
  });

  // color tests
  it('should have three appBackcolor elements', () => {
    expect(des.length).toBe(3);
  });

  it('should color 1st <h2> background "yellow"', () => {
    expect(des[0].styles['backgroundColor']).toBe('yellow');
  });
});
