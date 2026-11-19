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
// package org.allbinary.emulator

@global export class InitEmulatorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.emulator.InitEmulatorFactory";
    }
    @lazy static jv_instance: InitEmulatorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InitEmulatorFactory | null {
        if (!InitEmulatorFactory.js_instance) {
            InitEmulatorFactory.js_instance = true;
            InitEmulatorFactory.jv_instance = new InitEmulatorFactory().jinit_InitEmulatorFactory_0();
        }
        return InitEmulatorFactory.jv_instance;
    }
    static set instance(value: InitEmulatorFactory | null) {
        InitEmulatorFactory.js_instance = true;
        InitEmulatorFactory.jv_instance = value;
    }
    initEmulator: bool = false;

    jfields_InitEmulatorFactory(): void {
    this.initEmulator = false;
    }

    jinit_InitEmulatorFactory_0(): InitEmulatorFactory {
        super.jinit_JObject_0();
        this.jfields_InitEmulatorFactory();
        return this;
    }
    

    static getInstance(): InitEmulatorFactory | null {
        return InitEmulatorFactory.instance;
    }
    

    setInitEmulator(initEmulator: bool): void {
        this.initEmulator = initEmulator;
    }
    

    isInitEmulator(): bool {
        return this.initEmulator;
    }
}

