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
// package org.allbinary.android.view

@global export class AllBinaryRenderer extends JObject {

    jclassName(): string {
        return "org.allbinary.android.view.AllBinaryRenderer";
    }
    @lazy static jv_instance: AllBinaryRenderer | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AllBinaryRenderer | null {
        if (!AllBinaryRenderer.js_instance) {
            AllBinaryRenderer.js_instance = true;
            AllBinaryRenderer.jv_instance = new AllBinaryRenderer().jinit_AllBinaryRenderer_0();
        }
        return AllBinaryRenderer.jv_instance;
    }
    static set instance(value: AllBinaryRenderer | null) {
        AllBinaryRenderer.js_instance = true;
        AllBinaryRenderer.jv_instance = value;
    }

    jinit_AllBinaryRenderer_0(): AllBinaryRenderer {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AllBinaryRenderer | null {
        return AllBinaryRenderer.instance;
    }
    

    setRunnable(runnable: JRunnable | null): void {
    }
    

    clearRunnable(): void {
    }
}

