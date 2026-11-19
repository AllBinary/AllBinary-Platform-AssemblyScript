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
// package org.allbinary.graphics.color
// import jsinterop.annotations.JsType
// import org.allbinary.logic.string.StringMaker
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class BasicColor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.BasicColor";
    }
    name: string | null = null;
    value: i32 = 0;
    redComponent: f32 = 0.0;
    greenComponent: f32 = 0.0;
    blueComponent: f32 = 0.0;
    alphaComponent: f32 = 0.0;
    red: i16 = 0;
    green: i16 = 0;
    blue: i16 = 0;
    alpha: i16 = 0;

    jfields_BasicColor(): void {
    
    
    
    
    
    
    
    
    
    
    }
    

    jinit_BasicColor_3(alphaValue: i32, value: i32, name: string | null): BasicColor {
        super.jinit_JObject_0();
        this.jfields_BasicColor();
        this.name = name;
        let tempValue: i32 = 0;
        let basicColorUtil: BasicColorUtil | null = BasicColorUtil.getInstance(); if (JThrowable.pending !== null) return this;
        if (basicColorUtil!.isAlpha) {
            if (basicColorUtil!.ffOpaque) {
                tempValue = alphaValue | value;
            } else {
                tempValue = 0x00000000 | value;
            }
        } else {
            tempValue = value;
        }
        let alphaInt: i32 = ((tempValue >> 24) & 255);
        this.alpha = (<i16>(alphaInt));
        this.alphaComponent = ((<f32>(alphaInt))) / (<f32>255.0);
        let redInt: i32 = ((tempValue >> 16) & 255);
        this.red = (<i16>(redInt));
        this.redComponent = ((<f32>(redInt))) / (<f32>255.0);
        let greenInt: i32 = ((tempValue >> 8) & 255);
        this.green = (<i16>(greenInt));
        this.greenComponent = ((<f32>(greenInt))) / (<f32>255.0);
        let blueInt: i32 = ((tempValue) & 255);
        this.blue = (<i16>(blueInt));
        this.blueComponent = ((<f32>(blueInt))) / (<f32>255.0);
        this.value = tempValue;
        return this;
    }
    

    intValue(): i32 {
        return this.value;
    }
    

    toInt(): i32 {
        return this.value;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("BasicColor: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Alpha: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendshort(this.alpha); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Red: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendshort(this.red); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Green: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendshort(this.green); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Blue: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendshort(this.blue); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Value: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.value); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getRedComponent(): f32 {
        return this.redComponent;
    }
    

    getGreenComponent(): f32 {
        return this.greenComponent;
    }
    

    getBlueComponent(): f32 {
        return this.blueComponent;
    }
    

    getAlphaComponent(): f32 {
        return this.alphaComponent;
    }
}

