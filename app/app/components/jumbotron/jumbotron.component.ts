/**
 * Created by archie on 11/16/16.
 */
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl : 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor(){
        this.jbtHeading = "Hello World!";
        this.jbtText = "This is a simple hero unit, a simple jumbotron-style.";
        this.jbtBtnText="Read More";
        this.jbtBtnUrl ="/about";
    }
}
