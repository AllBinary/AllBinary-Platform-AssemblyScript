/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.logic.visual.dhtml.html.name

@global export class HtmlNameMathData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.name.HtmlNameMathData";
    }
    @lazy static jv_instance: HtmlNameMathData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): HtmlNameMathData | null {
        if (!HtmlNameMathData.js_instance) {
            HtmlNameMathData.js_instance = true;
            HtmlNameMathData.jv_instance = new HtmlNameMathData().jinit_HtmlNameMathData_0();
        }
        return HtmlNameMathData.jv_instance;
    }
    static set instance(value: HtmlNameMathData | null) {
        HtmlNameMathData.js_instance = true;
        HtmlNameMathData.jv_instance = value;
    }
    EQUALS: string | null = null;
    PLUS: string | null = null;
    MINUS: string | null = null;
    DIVIDE: string | null = null;
    MULTIPLY: string | null = null;

    jfields_HtmlNameMathData(): void {
    this.EQUALS = "_EQUALS_";
    this.PLUS = "_PLUS_";
    this.MINUS = "_MINUS_";
    this.DIVIDE = "_DIVIDE_";
    this.MULTIPLY = "_MULTIPLY_";
    }
    

    static getInstance(): HtmlNameMathData | null {
        return HtmlNameMathData.instance;
    }
    

    jinit_HtmlNameMathData_0(): HtmlNameMathData {
        super.jinit_JObject_0();
        this.jfields_HtmlNameMathData();
        return this;
    }
}

