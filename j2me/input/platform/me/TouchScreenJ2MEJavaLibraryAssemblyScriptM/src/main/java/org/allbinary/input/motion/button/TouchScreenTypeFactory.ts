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
// package org.allbinary.input.motion.button

@global export class TouchScreenTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchScreenTypeFactory";
    }
    @lazy static jv_instance: TouchScreenTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchScreenTypeFactory | null {
        if (!TouchScreenTypeFactory.js_instance) {
            TouchScreenTypeFactory.js_instance = true;
            TouchScreenTypeFactory.jv_instance = new TouchScreenTypeFactory().jinit_TouchScreenTypeFactory_0();
        }
        return TouchScreenTypeFactory.jv_instance;
    }
    static set instance(value: TouchScreenTypeFactory | null) {
        TouchScreenTypeFactory.js_instance = true;
        TouchScreenTypeFactory.jv_instance = value;
    }
    

    static getInstance(): TouchScreenTypeFactory | null {
        return TouchScreenTypeFactory.instance;
    }
    

    jinit_TouchScreenTypeFactory_0(): TouchScreenTypeFactory {
        super.jinit_JObject_0();
        let touchScreenFactory: TouchScreenFactory | null = TouchScreenFactory.getInstance(); if (JThrowable.pending !== null) return this;
        touchScreenFactory!.setTouch(true); if (JThrowable.pending !== null) return this;
        return this;
    }
}

