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
// package org.allbinary.layer

@global export class LayerManagerNoDebug extends LayerManagerLoggingBase {

    jclassName(): string {
        return "org.allbinary.layer.LayerManagerNoDebug";
    }
    @lazy static jv_instance: LayerManagerNoDebug | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LayerManagerNoDebug | null {
        if (!LayerManagerNoDebug.js_instance) {
            LayerManagerNoDebug.js_instance = true;
            LayerManagerNoDebug.jv_instance = new LayerManagerNoDebug().jinit_LayerManagerNoDebug_0();
        }
        return LayerManagerNoDebug.jv_instance;
    }
    static set instance(value: LayerManagerNoDebug | null) {
        LayerManagerNoDebug.js_instance = true;
        LayerManagerNoDebug.jv_instance = value;
    }

    jinit_LayerManagerNoDebug_0(): LayerManagerNoDebug {
        super.jinit_LayerManagerLoggingBase_0();
        return this;
    }
    

    static getInstance(): LayerManagerNoDebug | null {
        return LayerManagerNoDebug.instance;
    }
}

