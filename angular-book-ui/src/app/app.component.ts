import { trigger, transition, style, animate } from "@angular/animations";
import { Component } from "@angular/core";

const enterTransition = transition(":enter", [
  style({
    opacity: 0,
  }),
  animate("1s ease-in", style({ opacity: 1 })),
]);
const fadeIn = trigger("fadeIn", [enterTransition]);
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeIn],
})
export class AppComponent {
  title = "angular-book-ui";
  isShown = false;

  fadeInAndOut(): void {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }
}
