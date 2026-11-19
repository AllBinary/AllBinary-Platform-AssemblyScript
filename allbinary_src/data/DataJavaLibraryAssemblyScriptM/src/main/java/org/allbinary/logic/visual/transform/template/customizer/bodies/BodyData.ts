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
// package org.allbinary.logic.visual.transform.template.customizer.bodies

@global export class BodyData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.template.customizer.bodies.BodyData";
    }
    @lazy static jv_instance: BodyData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BodyData | null {
        if (!BodyData.js_instance) {
            BodyData.js_instance = true;
            BodyData.jv_instance = new BodyData().jinit_BodyData_0();
        }
        return BodyData.jv_instance;
    }
    static set instance(value: BodyData | null) {
        BodyData.js_instance = true;
        BodyData.jv_instance = value;
    }
    NAME: string | null = null;
    VIEWNAMEKEY: string | null = null;
    MIN: i32 = 0;

    jfields_BodyData(): void {
    this.NAME = "BODY_NAME";
    this.VIEWNAMEKEY = "Body";
    this.MIN = 0;
    }
    

    jinit_BodyData_0(): BodyData {
        super.jinit_JObject_0();
        this.jfields_BodyData();
        return this;
    }
    

    static getInstance(): BodyData | null {
        return BodyData.instance;
    }
}

