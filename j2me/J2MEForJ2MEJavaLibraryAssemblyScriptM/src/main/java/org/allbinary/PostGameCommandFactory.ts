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
// import org.allbinary.game.configuration.feature.MultiPlayerGameFeatureFactory
// import org.allbinary.graphics.displayable.MyCanvas

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
        return PostGameCommandFactory.instance;
    }
    

    addCommands(canvas: MyCanvas | null): void {
        MultiPlayerGameFeatureFactory.getInstance()!.addCommands(canvas); if (JThrowable.pending !== null) return;
    }
}

