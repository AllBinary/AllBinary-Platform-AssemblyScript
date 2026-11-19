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
// package org.allbinary.animation.text

@global export class TextChangeListener extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.text.TextChangeListener";
    }
    @lazy static jv_instance: TextChangeListener | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TextChangeListener | null {
        if (!TextChangeListener.js_instance) {
            TextChangeListener.js_instance = true;
            TextChangeListener.jv_instance = new TextChangeListener().jinit_TextChangeListener_0();
        }
        return TextChangeListener.jv_instance;
    }
    static set instance(value: TextChangeListener | null) {
        TextChangeListener.js_instance = true;
        TextChangeListener.jv_instance = value;
    }

    jinit_TextChangeListener_0(): TextChangeListener {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): TextChangeListener | null {
        return TextChangeListener.instance;
    }
    

    onMeasure(): void {
    }
}

