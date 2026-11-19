// Generated Code Do Not Modify
// package org.allbinary.graph

@global export class E extends JObject {

    jclassName(): string {
        return "org.allbinary.graph.E";
    }
    @lazy static jv_e: E | null = null;
    @lazy static js_e: bool = false;
    static get e(): E | null {
        if (!E.js_e) {
            E.js_e = true;
            E.jv_e = new E().jinit_E_0();
        }
        return E.jv_e;
    }
    static set e(value: E | null) {
        E.js_e = true;
        E.jv_e = value;
    }

    jinit_E_0(): E {
        super.jinit_JObject_0();
        return this;
    }
    

    newInstance(): E | null {
        return E.e;
    }
}

