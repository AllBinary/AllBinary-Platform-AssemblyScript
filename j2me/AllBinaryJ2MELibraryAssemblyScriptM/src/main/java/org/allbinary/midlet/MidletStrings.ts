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
// package org.allbinary.midlet

@global export class MidletStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.midlet.MidletStrings";
    }
    @lazy static jv_instance: MidletStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MidletStrings | null {
        if (!MidletStrings.js_instance) {
            MidletStrings.js_instance = true;
            MidletStrings.jv_instance = new MidletStrings().jinit_MidletStrings_0();
        }
        return MidletStrings.jv_instance;
    }
    static set instance(value: MidletStrings | null) {
        MidletStrings.js_instance = true;
        MidletStrings.jv_instance = value;
    }
    COMMAND_ACTION: string | null = null;

    jfields_MidletStrings(): void {
    this.COMMAND_ACTION = "commandAction";
    }

    jinit_MidletStrings_0(): MidletStrings {
        super.jinit_JObject_0();
        this.jfields_MidletStrings();
        return this;
    }
    

    static getInstance(): MidletStrings | null {
        return MidletStrings.instance;
    }
}

