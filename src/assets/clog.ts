import 'colorts/lib/string'
type Color = 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'black' | 'italic' | 'bold' | 'underline' | 'strikethrough' | 'inverse' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgBlack' | 'bgGray' | 'bgItalic';
export default class Clogger {
    constructor(public name: string, public color: Color, public timeIncluded: boolean) {
        this.name = name;
        this.color = color;
        this.timeIncluded = timeIncluded;
    }

    private getDate(): string {
        return new Date().toLocaleTimeString();
    }

    private raw(...args: string[]) {
        if (this.timeIncluded === true) {
            // @ts-ignore - Element implicitly has an 'any' type because index expression is not of type 'number';
            console.log(`<${this.name[this.color].bold}> [${this.getDate().white.bold}]`, ...args);
        } else {
            // @ts-ignore - Element implicitly has an 'any' type because index expression is not of type 'number';
            console.log(`[${this.name[this.color].bold}]`, ...args);
        }
    }

    public log(...args: string[]) {
        this.raw(...args);
    }

    public clear() {
        console.clear();
    }
    
    public trail(...args: any[]) {
        console.log(`\t↳ ${args.join(' ').gray}`);
    }

    public error(e: Error | string, stack: boolean = true) {
        if (typeof e === 'string') e = new Error(e);
        console.log(`[${this.getDate().white.bold}] ${`error: <${this.name}>`.bgRed.bold}`, e.message);
        if (e.stack && stack) this.trail(e.stack);
    }
}