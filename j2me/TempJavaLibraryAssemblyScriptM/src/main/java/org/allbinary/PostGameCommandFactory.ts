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
// import javax.microedition.lcdui.Canvas

@global export class PostGameCommandFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.PostGameCommandFactory";
    }
    @lazy static jv_instance: PostGameCommandFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PostGameCommandFactory | null {
        if (!PostGameCommandFactory.js_instance) {
            PostGameCommandFactory.js_instance = true;
            PostGameCommandFactory.jv_instance = new PostGameCommandFactory().jinit_PostGameCommandFactory_0();
        }
        return PostGameCommandFactory.jv_instance;
    }
    static set instance(value: PostGameCommandFactory | null) {
        PostGameCommandFactory.js_instance = true;
        PostGameCommandFactory.jv_instance = value;
    }

    jinit_PostGameCommandFactory_0(): PostGameCommandFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): PostGameCommandFactory | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    addCommands(canvas: Canvas | null): void {
    }
}

