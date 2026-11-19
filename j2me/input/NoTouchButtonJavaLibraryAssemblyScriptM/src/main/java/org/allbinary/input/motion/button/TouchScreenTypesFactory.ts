/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.input.motion.button

@global export class TouchScreenTypesFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchScreenTypesFactory";
    }
    @lazy static jv_instance: TouchScreenTypesFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchScreenTypesFactory | null {
        if (!TouchScreenTypesFactory.js_instance) {
            TouchScreenTypesFactory.js_instance = true;
            TouchScreenTypesFactory.jv_instance = new TouchScreenTypesFactory().jinit_TouchScreenTypesFactory_0();
        }
        return TouchScreenTypesFactory.jv_instance;
    }
    static set instance(value: TouchScreenTypesFactory | null) {
        TouchScreenTypesFactory.js_instance = true;
        TouchScreenTypesFactory.jv_instance = value;
    }
    FINGER: TouchScreenType | null = null;
    NOTOUCH: TouchScreenType | null = null;
    STYLUS: TouchScreenType | null = null;
    UNDEFINED: TouchScreenType | null = null;

    jfields_TouchScreenTypesFactory(): void {
    this.FINGER = new TouchScreenType().jinit_TouchScreenType_1("Finger");
    this.NOTOUCH = new TouchScreenType().jinit_TouchScreenType_1("No Touch");
    this.STYLUS = new TouchScreenType().jinit_TouchScreenType_1("Stylus");
    this.UNDEFINED = new TouchScreenType().jinit_TouchScreenType_1("Undefined");
    }

    jinit_TouchScreenTypesFactory_0(): TouchScreenTypesFactory {
        super.jinit_JObject_0();
        this.jfields_TouchScreenTypesFactory();
        return this;
    }
    

    static getInstance(): TouchScreenTypesFactory | null {
        return TouchScreenTypesFactory.instance;
    }
}

