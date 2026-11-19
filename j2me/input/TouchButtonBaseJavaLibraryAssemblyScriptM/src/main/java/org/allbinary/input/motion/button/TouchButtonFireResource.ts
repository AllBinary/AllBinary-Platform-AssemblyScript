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

@global export class TouchButtonFireResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonFireResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonFireResource.js_instance) {
            TouchButtonFireResource.js_instance = true;
            TouchButtonFireResource.jv_instance = new TouchButtonFireResource().jinit_TouchButtonFireResource_0();
        }
        return TouchButtonFireResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonFireResource.js_instance = true;
        TouchButtonFireResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonFireResource.instance;
    }
    

    jinit_TouchButtonFireResource_0(): TouchButtonFireResource {
        super.jinit_TouchButtonResource_2("/touch_button_fire_64_by_64.png", "/touch_button_fire_hint_64_by_64.png");
        return this;
    }
}

