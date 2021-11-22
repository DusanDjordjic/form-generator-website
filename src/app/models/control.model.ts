export class Control {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
  generateHTML(): string {
    return `
        <div>
            <label for="${this.name}">${this.name}</label>
            <input type="${this.type}" id="${this.name}" formControlName="${this.name}">
        </div>`.trim();
  }
  generateTS() {
    return `${this.name}:new FormControl(null),\n`;
  }
  static isControl(obj?: any): boolean {
    if (obj === undefined) return false;
    if (obj.name === undefined || obj.name === null || obj.name === '')
      return false;
    if (obj.type === undefined || obj.type === null || obj.type === '')
      return false;
    return true;
  }
}
// [
//     {
//         "name": "ime",
//         "type": "text"
//     },
//     {
//         "name": "prezime",
//         "type":"text"
//     },
//     {
//         "name": "godine",
//         "type":"number"
//     }
// ]
