// http://www.datypic.com/sc/ooxml/e-m_rad-1.html
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";
import { MathBase } from "../n-ary";
import { MathDegree } from "./math-degree";
import { MathRadicalProperties } from "./math-radical-properties";

export interface IMathRadicalOptions {
    readonly child: MathComponent;
    readonly degree?: MathComponent;
}

export class MathRadical extends XmlComponent {
    constructor(options: IMathRadicalOptions) {
        super("m:rad");

        this.root.push(new MathRadicalProperties(!!options.degree));
        this.root.push(new MathDegree(options.degree));
        this.root.push(new MathBase(options.child));
    }
}