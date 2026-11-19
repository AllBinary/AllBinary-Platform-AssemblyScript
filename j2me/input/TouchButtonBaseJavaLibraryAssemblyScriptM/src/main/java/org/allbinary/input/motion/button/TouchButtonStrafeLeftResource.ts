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

@global export class TouchButtonStrafeLeftResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonStrafeLeftResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonStrafeLeftResource.js_instance) {
            TouchButtonStrafeLeftResource.js_instance = true;
            TouchButtonStrafeLeftResource.jv_instance = new TouchButtonStrafeLeftResource().jinit_TouchButtonStrafeLeftResource_0();
        }
        return TouchButtonStrafeLeftResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonStrafeLeftResource.js_instance = true;
        TouchButtonStrafeLeftResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonStrafeLeftResource.instance;
    }
    

    jinit_TouchButtonStrafeLeftResource_0(): TouchButtonStrafeLeftResource {
        super.jinit_TouchButtonResource_2("/touch_button_strafe_left_arrow_64_by_64.png", "/touch_button_strafe_left_arrow_hint_64_by_64.png");
        return this;
    }
}

