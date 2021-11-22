import { Component, OnInit } from '@angular/core';
import { Control } from 'src/app/models/control.model';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'fg-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.scss'],
})
export class GeneratorPageComponent implements OnInit {
  inputText: string = '';
  outputHtml: string = '';
  outputTS: string = '';
  formStructure: Group = new Group('form');
  jsonInput: any;
  errors: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    this.errors = [];
    try {
      this.jsonInput = JSON.parse(this.inputText);
      console.log(this.jsonInput);
      if (!this.generateSructure(this.jsonInput, this.formStructure)) return;

      console.log('a');

      // for (let i = 0; i < this.jsonInput.children.length; i++) {
      //   if (this.jsonInput[i].children === undefined) {
      //     this.formStructure.children.push(
      //       new Control(this.jsonInput[i].name, this.jsonInput[i].type || '')
      //     );
      //   } else {
      //     this.formStructure.children.push(
      //       new Group(this.jsonInput[i].name, this.jsonInput[i].children || '')
      //     );
      //   }
      // }
      this.outputHtml = this.formStructure.generateHTML().trim();
      this.outputTS = this.formStructure.generateTS().trim();
    } catch (error) {
      console.log(this.jsonInput);

      this.errors.push(<string>error);
    }
  }

  generateSructure(jsonInput: any, currentControl: Group): boolean {
    if (!Group.isGroup(jsonInput)) {
      this.errors.push(
        `Error: Group name: ${jsonInput.name}; Group must be an object with 'name': string & 'children': Array properties`
      );
      return false;
    }

    for (let i = 0; i < jsonInput.children.length; i++) {
      const child = jsonInput.children[i];
      if (!Group.isGroup(child)) {
        if (!Control.isControl(child)) {
          this.errors.push(
            `Error: Group name: ${jsonInput.name}; Control isn't either Group or Control; Both must be an object with 'name': string; Control must have 'type': string property; Group must have "children": Array property`
          );
          return false;
        }
        currentControl.children.push(new Control(child.name, child.type || ''));
      } else {
        const newGroup = new Group(child.name, [] || '');
        currentControl.children.push(newGroup);
        this.generateSructure(child, newGroup);
      }
    }
    return true;
  }
}
