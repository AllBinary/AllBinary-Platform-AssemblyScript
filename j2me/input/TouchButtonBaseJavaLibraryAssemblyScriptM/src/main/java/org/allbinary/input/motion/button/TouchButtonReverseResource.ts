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

@global export class TouchButtonReverseResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonReverseResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonReverseResource.js_instance) {
            TouchButtonReverseResource.js_instance = true;
            TouchButtonReverseResource.jv_instance = new TouchButtonReverseResource().jinit_TouchButtonReverseResource_0();
        }
        return TouchButtonReverseResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonReverseResource.js_instance = true;
        TouchButtonReverseResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonReverseResource.instance;
    }
    

    jinit_TouchButtonReverseResource_0(): TouchButtonReverseResource {
        super.jinit_TouchButtonResource_2("/touch_button_reverse_64_by_64.png", "/touch_button_reverse_hint_64_by_64.png");
        return this;
    }
}

