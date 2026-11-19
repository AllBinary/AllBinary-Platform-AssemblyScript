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
// package org.allbinary.logic.math
// import org.allbinary.string.CommonPhoneStrings
// import org.allbinary.string.CommonSeps

@global export class MathData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.MathData";
    }
    @lazy static jv_instance: MathData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MathData | null {
        if (!MathData.js_instance) {
            MathData.js_instance = true;
            MathData.jv_instance = new MathData().jinit_MathData_0();
        }
        return MathData.jv_instance;
    }
    static set instance(value: MathData | null) {
        MathData.js_instance = true;
        MathData.jv_instance = value;
    }
    EQUALS: string | null = null;
    PLUS: string | null = null;
    GREATER_THAN: string | null = null;
    MINUS: string | null = null;
    DIVIDE: string | null = null;
    MULTIPLY: string | null = null;

    jfields_MathData(): void {
    
    this.PLUS = "+";
    this.GREATER_THAN = ">";
    
    
    
    }
    

    static getInstance(): MathData | null {
        return MathData.instance;
    }
    

    jinit_MathData_0(): MathData {
        super.jinit_JObject_0();
        this.jfields_MathData();
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return this;
        this.EQUALS = commonSeps!.EQUALS;
        this.MINUS = commonSeps!.DASH;
        this.DIVIDE = commonSeps!.FORWARD_SLASH;
        this.MULTIPLY = CommonPhoneStrings.getInstance()!.STAR; if (JThrowable.pending !== null) return this;
        return this;
    }
}

