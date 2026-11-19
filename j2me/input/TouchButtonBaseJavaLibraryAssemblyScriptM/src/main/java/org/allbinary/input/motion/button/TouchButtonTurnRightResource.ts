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

@global export class TouchButtonTurnRightResource extends TouchButtonResource {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonTurnRightResource";
    }
    @lazy static jv_instance: TouchButtonResource | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchButtonResource | null {
        if (!TouchButtonTurnRightResource.js_instance) {
            TouchButtonTurnRightResource.js_instance = true;
            TouchButtonTurnRightResource.jv_instance = new TouchButtonTurnRightResource().jinit_TouchButtonTurnRightResource_0();
        }
        return TouchButtonTurnRightResource.jv_instance;
    }
    static set instance(value: TouchButtonResource | null) {
        TouchButtonTurnRightResource.js_instance = true;
        TouchButtonTurnRightResource.jv_instance = value;
    }
    

    static getInstance(): TouchButtonResource | null {
        return TouchButtonTurnRightResource.instance;
    }
    

    jinit_TouchButtonTurnRightResource_0(): TouchButtonTurnRightResource {
        super.jinit_TouchButtonResource_2("/touch_button_turn_right_arrow_64_by_64.png", "/touch_button_turn_right_arrow_hint_64_by_64.png");
        return this;
    }
}

