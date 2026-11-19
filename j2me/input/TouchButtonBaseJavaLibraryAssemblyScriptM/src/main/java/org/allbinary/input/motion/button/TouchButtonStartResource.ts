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

@global export class TouchButtonStartResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonStartResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonStartResource.js_instance) {
            TouchButtonStartResource.js_instance = true;
            TouchButtonStartResource.jv_instance = new TouchButtonStartResource().jinit_TouchButtonStartResource_0();
        }
        return TouchButtonStartResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonStartResource.js_instance = true;
        TouchButtonStartResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonStartResource.instance;
    }
    

    jinit_TouchButtonStartResource_0(): TouchButtonStartResource {
        super.jinit_TouchButtonResource_2("/touch_button_start_64_by_64.png", "/touch_button_start_hint_64_by_64.png");
        return this;
    }
}

