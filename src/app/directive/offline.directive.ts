import { Directive, OnInit, TemplateRef, ViewContainerRef, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appOffline]'
})
export class OfflineDirective implements OnInit, OnDestroy {

  private showWhenOnline: boolean = true;

  private onlineHandler = () => this.updateView();
  private offlineHandler = () => this.updateView();

  @Input()
  set appIfOnline(condition: boolean) {
    this.showWhenOnline = condition;
    this.updateView();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.offlineHandler);
    this.updateView();
  }

  ngOnDestroy() {
    window.removeEventListener('online', this.onlineHandler);
    window.removeEventListener('offline', this.offlineHandler);
  }

  private updateView() {
    const isOnline = navigator.onLine;

    const shouldShow =
      (isOnline && this.showWhenOnline) ||
      (!isOnline && !this.showWhenOnline);

    this.viewContainerRef.clear();

    if (shouldShow) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
