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
// package org.allbinary.animation.transition.shake

@global export class ShakeEventFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.transition.shake.ShakeEventFactory";
    }
    @lazy static jv_instance: ShakeEventFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ShakeEventFactory | null {
        if (!ShakeEventFactory.js_instance) {
            ShakeEventFactory.js_instance = true;
            ShakeEventFactory.jv_instance = new ShakeEventFactory().jinit_ShakeEventFactory_0();
        }
        return ShakeEventFactory.jv_instance;
    }
    static set instance(value: ShakeEventFactory | null) {
        ShakeEventFactory.js_instance = true;
        ShakeEventFactory.jv_instance = value;
    }
    MICRO: ShakeEvent | null = null;
    SMALL: ShakeEvent | null = null;
    MEDIUM: ShakeEvent | null = null;
    LARGE: ShakeEvent | null = null;

    jfields_ShakeEventFactory(): void {
    this.MICRO = new ShakeEvent().jinit_ShakeEvent_0();
    this.SMALL = new ShakeEvent().jinit_ShakeEvent_0();
    this.MEDIUM = new ShakeEvent().jinit_ShakeEvent_0();
    this.LARGE = new ShakeEvent().jinit_ShakeEvent_0();
    }

    jinit_ShakeEventFactory_0(): ShakeEventFactory {
        super.jinit_JObject_0();
        this.jfields_ShakeEventFactory();
        return this;
    }
    

    static getInstance(): ShakeEventFactory | null {
        return ShakeEventFactory.instance;
    }
    

    init(): void {
    }
}

