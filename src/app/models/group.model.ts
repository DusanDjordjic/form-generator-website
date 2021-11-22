import { Control } from './control.model';

export class Group {
  name: string;
  children: Array<Control | Group> = [];
  constructor(name: string, children: Control[] = []) {
    this.name = name;
    this.children = children;
  }
  generateHTML() {
    let childrens = '';
    this.children.forEach((child) => {
      childrens += child.generateHTML();
    });
    if (this.name === 'form') {
      return `
        <form [formGroup]="${this.name}" (ngSubmit)="onSubmit()">${childrens}
        <button type="submit">Submit</button>
        </form>`.trim();
    }
    return `
    <div formGroupName="${this.name}">
    <h3>${this.name}</h3>
    ${childrens}
    </div>`.trim();
  }
  generateTS() {
    let childrens = '';
    this.children.forEach((child) => {
      childrens += child.generateTS();
    });
    if (this.name === 'form') {
      return `
        ${this.name}= new FormGroup({
            ${childrens}
        })
        onSubmit(){}`.trim();
    }
    return `${this.name}: new FormGroup({
        ${childrens}
    }),\n`;
  }
  static isGroup(obj?: any): boolean {
    if (!obj) return false;
    if (
      !Array.isArray(obj.children) ||
      obj.name === undefined ||
      obj.name === null ||
      obj.name === ''
    )
      return false;
    return true;
  }
}
