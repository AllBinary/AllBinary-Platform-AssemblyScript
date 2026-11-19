/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.game.displayable.canvas

@global export class NullDemoPaintable extends JObject implements DemoPaintableInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NullDemoPaintable";
    }
    @lazy static jv_NULL_DEMO_PAINTABLE: NullDemoPaintable | null = null;
    @lazy static js_NULL_DEMO_PAINTABLE: bool = false;
    static get NULL_DEMO_PAINTABLE(): NullDemoPaintable | null {
        if (!NullDemoPaintable.js_NULL_DEMO_PAINTABLE) {
            NullDemoPaintable.js_NULL_DEMO_PAINTABLE = true;
            NullDemoPaintable.jv_NULL_DEMO_PAINTABLE = new NullDemoPaintable().jinit_NullDemoPaintable_0();
        }
        return NullDemoPaintable.jv_NULL_DEMO_PAINTABLE;
    }
    static set NULL_DEMO_PAINTABLE(value: NullDemoPaintable | null) {
        NullDemoPaintable.js_NULL_DEMO_PAINTABLE = true;
        NullDemoPaintable.jv_NULL_DEMO_PAINTABLE = value;
    }

    jinit_NullDemoPaintable_0(): NullDemoPaintable {
        super.jinit_JObject_0();
        return this;
    }
    

    showGamePaintable(): void {
    }
}

