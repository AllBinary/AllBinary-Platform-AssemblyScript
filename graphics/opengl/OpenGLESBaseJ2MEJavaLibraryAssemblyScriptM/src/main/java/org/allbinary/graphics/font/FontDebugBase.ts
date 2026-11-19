// Generated Code Do Not Modify
// package org.allbinary.graphics.font
// import javax.microedition.lcdui.Font
// import org.allbinary.logic.string.StringMaker

//OpenGLESBaseJ2MEJavaLibrary
@global export class FontDebugBase extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.font.FontDebugBase";
    }
    @lazy static jv_instanceBase: FontDebugBase | null = null;
    @lazy static js_instanceBase: bool = false;
    static get instanceBase(): FontDebugBase | null {
        if (!FontDebugBase.js_instanceBase) {
            FontDebugBase.js_instanceBase = true;
            FontDebugBase.jv_instanceBase = new FontDebugBase().jinit_FontDebugBase_0();
        }
        return FontDebugBase.jv_instanceBase;
    }
    static set instanceBase(value: FontDebugBase | null) {
        FontDebugBase.js_instanceBase = true;
        FontDebugBase.jv_instanceBase = value;
    }
    SET_FONT: string | null = null;

    jfields_FontDebugBase(): void {
    this.SET_FONT = "setFont";
    }

    jinit_FontDebugBase_0(): FontDebugBase {
        super.jinit_JObject_0();
        this.jfields_FontDebugBase();
        return this;
    }
    

    static getInstance(): FontDebugBase | null {
        return FontDebugBase.instanceBase;
    }
    

    debugMetrics(currentFont: Font | null, convertedTextSize: f32, displayMetrics: Object | null, stringBuffer: StringMaker | null): void {
    }
    

    debugDpi(densityDpi: i32, stringBuffer: StringMaker | null): void {
    }
    

    debugDimension(currentFont: Font | null, convertedTextSize: f32, longestDimensionTotalPixels: i32, stringBuffer: StringMaker | null): void {
    }
}

