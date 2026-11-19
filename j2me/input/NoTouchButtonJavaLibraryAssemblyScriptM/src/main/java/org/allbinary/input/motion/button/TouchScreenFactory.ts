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

@global export class TouchScreenFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchScreenFactory";
    }
    @lazy static jv_SINGLETON: TouchScreenFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): TouchScreenFactory | null {
        if (!TouchScreenFactory.js_SINGLETON) {
            TouchScreenFactory.js_SINGLETON = true;
            TouchScreenFactory.jv_SINGLETON = new TouchScreenFactory().jinit_TouchScreenFactory_0();
        }
        return TouchScreenFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: TouchScreenFactory | null) {
        TouchScreenFactory.js_SINGLETON = true;
        TouchScreenFactory.jv_SINGLETON = value;
    }
    multiTouch: bool = false;
    touch: bool = false;
    touchScreenType: TouchScreenType | null = null;

    jfields_TouchScreenFactory(): void {
    this.multiTouch = false;
    this.touch = false;
    this.touchScreenType = TouchScreenTypesFactory.getInstance()!.NOTOUCH;
    }
    

    jinit_TouchScreenFactory_0(): TouchScreenFactory {
        super.jinit_JObject_0();
        this.jfields_TouchScreenFactory();
        return this;
    }
    

    static getInstance(): TouchScreenFactory | null {
        return TouchScreenFactory.SINGLETON;
    }
    

    isMultiTouch(): bool {
        return this.multiTouch;
    }
    

    setTouch(touch: bool): void {
    }
    

    isTouch(): bool {
        return this.touch;
    }
    

    getTouchScreenType(): TouchScreenType | null {
        return this.touchScreenType;
    }
}

