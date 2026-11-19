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
// package org.allbinary.image.opengles
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class OpenGLImageSpecificFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLImageSpecificFactory";
    }
    @lazy static jv_instance: OpenGLImageSpecificFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OpenGLImageSpecificFactory | null {
        if (!OpenGLImageSpecificFactory.js_instance) {
            OpenGLImageSpecificFactory.js_instance = true;
            OpenGLImageSpecificFactory.jv_instance = new OpenGLImageSpecificFactory().jinit_OpenGLImageSpecificFactory_0();
        }
        return OpenGLImageSpecificFactory.jv_instance;
    }
    static set instance(value: OpenGLImageSpecificFactory | null) {
        OpenGLImageSpecificFactory.js_instance = true;
        OpenGLImageSpecificFactory.jv_instance = value;
    }
    updating: bool = false;

    jfields_OpenGLImageSpecificFactory(): void {
    this.updating = false;
    }

    jinit_OpenGLImageSpecificFactory_0(): OpenGLImageSpecificFactory {
        super.jinit_JObject_0();
        this.jfields_OpenGLImageSpecificFactory();
        return this;
    }
    

    static getInstance(): OpenGLImageSpecificFactory | null {
        return OpenGLImageSpecificFactory.instance;
    }
}

