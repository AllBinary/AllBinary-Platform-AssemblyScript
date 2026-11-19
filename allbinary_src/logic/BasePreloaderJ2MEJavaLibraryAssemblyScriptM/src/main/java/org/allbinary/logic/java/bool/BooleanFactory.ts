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
// package org.allbinary.logic.java.bool

@global export class BooleanFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.bool.BooleanFactory";
    }
    @lazy static jv_instance: BooleanFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BooleanFactory | null {
        if (!BooleanFactory.js_instance) {
            BooleanFactory.js_instance = true;
            BooleanFactory.jv_instance = new BooleanFactory().jinit_BooleanFactory_0();
        }
        return BooleanFactory.jv_instance;
    }
    static set instance(value: BooleanFactory | null) {
        BooleanFactory.js_instance = true;
        BooleanFactory.jv_instance = value;
    }
    TRUE: JBoolean | null = null;
    FALSE: JBoolean | null = null;
    TRUE_STRING: string | null = null;
    FALSE_STRING: string | null = null;
    YES: string | null = null;
    NO: string | null = null;

    jfields_BooleanFactory(): void {
    this.TRUE = new JBoolean().jinit_JBoolean_1(true);
    this.FALSE = new JBoolean().jinit_JBoolean_1(false);
    this.TRUE_STRING = JObject.jtoString(this.TRUE);
    this.FALSE_STRING = JObject.jtoString(this.FALSE);
    this.YES = "yes";
    this.NO = "no";
    }

    jinit_BooleanFactory_0(): BooleanFactory {
        super.jinit_JObject_0();
        this.jfields_BooleanFactory();
        return this;
    }
    

    static getInstance(): BooleanFactory | null {
        return BooleanFactory.instance;
    }
    

    toStringb(bool_: bool): string | null {
        if (bool_) {
            return this.TRUE_STRING;
        } else {
            return this.FALSE_STRING;
        }
        return null;
    }
}

