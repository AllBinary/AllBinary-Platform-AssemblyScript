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

@global export class TouchButtonDownResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonDownResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonDownResource.js_instance) {
            TouchButtonDownResource.js_instance = true;
            TouchButtonDownResource.jv_instance = new TouchButtonDownResource().jinit_TouchButtonDownResource_0();
        }
        return TouchButtonDownResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonDownResource.js_instance = true;
        TouchButtonDownResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonDownResource.instance;
    }
    

    jinit_TouchButtonDownResource_0(): TouchButtonDownResource {
        super.jinit_TouchButtonResource_2("/touch_button_down_arrow_64_by_64.png", "/touch_button_down_arrow_hint_64_by_64.png");
        return this;
    }
}

