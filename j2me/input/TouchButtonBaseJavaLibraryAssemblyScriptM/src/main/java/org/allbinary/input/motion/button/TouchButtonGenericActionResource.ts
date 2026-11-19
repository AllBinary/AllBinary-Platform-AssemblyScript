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

@global export class TouchButtonGenericActionResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonGenericActionResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonGenericActionResource.js_instance) {
            TouchButtonGenericActionResource.js_instance = true;
            TouchButtonGenericActionResource.jv_instance = new TouchButtonGenericActionResource().jinit_TouchButtonGenericActionResource_0();
        }
        return TouchButtonGenericActionResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonGenericActionResource.js_instance = true;
        TouchButtonGenericActionResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonGenericActionResource.instance;
    }
    

    jinit_TouchButtonGenericActionResource_0(): TouchButtonGenericActionResource {
        super.jinit_TouchButtonResource_2("/touch_button_generic_action_64_by_64.png", "/touch_button_generic_action_hint_64_by_64.png");
        return this;
    }
}

