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

@global export class TouchButtonBlankResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonBlankResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonBlankResource.js_instance) {
            TouchButtonBlankResource.js_instance = true;
            TouchButtonBlankResource.jv_instance = new TouchButtonBlankResource().jinit_TouchButtonBlankResource_0();
        }
        return TouchButtonBlankResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonBlankResource.js_instance = true;
        TouchButtonBlankResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonBlankResource.instance;
    }
    

    jinit_TouchButtonBlankResource_0(): TouchButtonBlankResource {
        super.jinit_TouchButtonResource_2("/touch_button_64_by_64.png", "/touch_button_hint_64_by_64.png");
        return this;
    }
}

