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
// package org.allbinary.business.init
// import org.allbinary.logic.io.file.directory.Directory
// import org.allbinary.logic.io.path.AbPath

@global export class InitInfo2 extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.InitInfo2";
    }
    @lazy static jv_instance: InitInfo2 | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InitInfo2 | null {
        if (!InitInfo2.js_instance) {
            InitInfo2.js_instance = true;
            InitInfo2.jv_instance = new InitInfo2().jinit_InitInfo2_0();
        }
        return InitInfo2.jv_instance;
    }
    static set instance(value: InitInfo2 | null) {
        InitInfo2.js_instance = true;
        InitInfo2.jv_instance = value;
    }
    directory: Directory | null = null;

    jfields_InitInfo2(): void {
    this.directory = Directory.getInstance();
    }

    jinit_InitInfo2_0(): InitInfo2 {
        super.jinit_JObject_0();
        this.jfields_InitInfo2();
        return this;
    }
    

    static getInstance(): InitInfo2 | null {
        return InitInfo2.instance;
    }
    

    isTestHtmlPathValid(value: AbPath | null): bool {
        return this.directory!.create_1_AbPath(value);
    }
    

    isMainPathValid(value: AbPath | null): bool {
        return this.directory!.create_1_AbPath(value);
    }
}

