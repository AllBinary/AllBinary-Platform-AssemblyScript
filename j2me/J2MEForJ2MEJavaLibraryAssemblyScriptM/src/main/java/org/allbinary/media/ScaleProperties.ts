/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.media
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels

@global export class ScaleProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.media.ScaleProperties";
    }
    @lazy static jv_instance: ScaleProperties | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScaleProperties | null {
        if (!ScaleProperties.js_instance) {
            ScaleProperties.js_instance = true;
            ScaleProperties.jv_instance = new ScaleProperties().jinit_ScaleProperties_0();
        }
        return ScaleProperties.jv_instance;
    }
    static set instance(value: ScaleProperties | null) {
        ScaleProperties.js_instance = true;
        ScaleProperties.jv_instance = value;
    }
    scaleX: f32 = 0.0;
    scaleY: f32 = 0.0;
    scaleWidth: i32 = 0;
    scaleHeight: i32 = 0;
    shouldScale: bool = false;

    jfields_ScaleProperties(): void {
    this.scaleX = (<f32>1.0);
    this.scaleY = (<f32>1.0);
    this.scaleWidth = 0;
    this.scaleHeight = 0;
    this.shouldScale = false;
    }

    jinit_ScaleProperties_0(): ScaleProperties {
        super.jinit_JObject_0();
        this.jfields_ScaleProperties();
        return this;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.COLON_SEP)!.appendboolean(this.shouldScale)!.append("scaleX: ")!.appendfloat(this.scaleX)!.append("scaleY: ")!.appendfloat(this.scaleY)!.append("scaleWidth: ")!.appendint(this.scaleWidth)!.append("scaleHeight: ")!.appendint(this.scaleHeight));
    }
}

