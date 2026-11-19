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

@global export class NoButtonsTouchInputFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.NoButtonsTouchInputFactory";
    }
    @lazy static jv_instance: BaseTouchInput | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BaseTouchInput | null {
        if (!NoButtonsTouchInputFactory.js_instance) {
            NoButtonsTouchInputFactory.js_instance = true;
            NoButtonsTouchInputFactory.jv_instance = new BaseTouchInput().jinit_BaseTouchInput_0();
        }
        return NoButtonsTouchInputFactory.jv_instance;
    }
    static set instance(value: BaseTouchInput | null) {
        NoButtonsTouchInputFactory.js_instance = true;
        NoButtonsTouchInputFactory.jv_instance = value;
    }

    jinit_NoButtonsTouchInputFactory_0(): NoButtonsTouchInputFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): BaseTouchInput | null {
        return NoButtonsTouchInputFactory.instance;
    }
}

