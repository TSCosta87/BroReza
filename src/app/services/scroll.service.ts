import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<number>(0);
  private isVisible = new Map<string, boolean>();

  constructor(private ngZone: NgZone) {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(
          throttleTime(50),
          map(() => window.scrollY),
          distinctUntilChanged()
        )
        .subscribe(scrollY => {
          this.scrollSubject.next(scrollY);
          this.checkVisibility();
        });
    });
  }

  private checkVisibility(): void {
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section: Element) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8;
      
      if (isVisible && !this.isVisible.get(section.id)) {
        this.isVisible.set(section.id, true);
        section.classList.add('visible');
      }
    });
  }

  getScrollPosition(): Observable<number> {
    return this.scrollSubject.asObservable();
  }
} 