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

@global export class TouchButtonsBuilderFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonsBuilderFactory";
    }
    @lazy static jv_NO_TOUCH_BUTTON_BUILDER_FACTORY: TouchButtonsBuilderFactory | null = null;
    @lazy static js_NO_TOUCH_BUTTON_BUILDER_FACTORY: bool = false;
    static get NO_TOUCH_BUTTON_BUILDER_FACTORY(): TouchButtonsBuilderFactory | null {
        if (!TouchButtonsBuilderFactory.js_NO_TOUCH_BUTTON_BUILDER_FACTORY) {
            TouchButtonsBuilderFactory.js_NO_TOUCH_BUTTON_BUILDER_FACTORY = true;
            TouchButtonsBuilderFactory.jv_NO_TOUCH_BUTTON_BUILDER_FACTORY = new TouchButtonsBuilderFactory().jinit_TouchButtonsBuilderFactory_0();
        }
        return TouchButtonsBuilderFactory.jv_NO_TOUCH_BUTTON_BUILDER_FACTORY;
    }
    static set NO_TOUCH_BUTTON_BUILDER_FACTORY(value: TouchButtonsBuilderFactory | null) {
        TouchButtonsBuilderFactory.js_NO_TOUCH_BUTTON_BUILDER_FACTORY = true;
        TouchButtonsBuilderFactory.jv_NO_TOUCH_BUTTON_BUILDER_FACTORY = value;
    }

    jinit_TouchButtonsBuilderFactory_0(): TouchButtonsBuilderFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): BaseTouchInput | null {
        return NoButtonsTouchInputFactory.getInstance();
    }
}

