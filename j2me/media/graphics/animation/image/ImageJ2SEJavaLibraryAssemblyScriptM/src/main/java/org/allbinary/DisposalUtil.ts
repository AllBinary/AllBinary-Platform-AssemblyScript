/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary
// import javax.microedition.lcdui.Image
// import org.eclipse.swt.graphics.Resource

@global export class DisposalUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.DisposalUtil";
    }
    @lazy static jv_instance: DisposalUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DisposalUtil | null {
        if (!DisposalUtil.js_instance) {
            DisposalUtil.js_instance = true;
            DisposalUtil.jv_instance = new DisposalUtil().jinit_DisposalUtil_0();
        }
        return DisposalUtil.jv_instance;
    }
    static set instance(value: DisposalUtil | null) {
        DisposalUtil.js_instance = true;
        DisposalUtil.jv_instance = value;
    }

    jinit_DisposalUtil_0(): DisposalUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DisposalUtil | null {
        return DisposalUtil.instance;
    }
    

    disposeImage(image: Image | null): void {
    }
    

    disposeResource(resource: Resource | null): void {
        if (!resource!.isDisposed()) {
            resource!.dispose(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

