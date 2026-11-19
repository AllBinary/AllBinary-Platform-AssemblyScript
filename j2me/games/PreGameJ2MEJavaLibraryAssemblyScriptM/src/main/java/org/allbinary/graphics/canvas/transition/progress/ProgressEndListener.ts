/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2026 AllBinary 
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
// package org.allbinary.graphics.canvas.transition.progress

@global export class ProgressEndListener extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.canvas.transition.progress.ProgressEndListener";
    }
    @lazy static jv_instance: ProgressEndListener | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ProgressEndListener | null {
        if (!ProgressEndListener.js_instance) {
            ProgressEndListener.js_instance = true;
            ProgressEndListener.jv_instance = new ProgressEndListener().jinit_ProgressEndListener_0();
        }
        return ProgressEndListener.jv_instance;
    }
    static set instance(value: ProgressEndListener | null) {
        ProgressEndListener.js_instance = true;
        ProgressEndListener.jv_instance = value;
    }

    jinit_ProgressEndListener_0(): ProgressEndListener {
        super.jinit_JObject_0();
        return this;
    }
    

    onEndEvent(): void {
    }
}

