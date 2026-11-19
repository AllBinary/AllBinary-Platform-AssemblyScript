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
// package org.allbinary.game.input

@global export class InputProcessorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.InputProcessorFactory";
    }
    @lazy static jv_instance: InputProcessorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InputProcessorFactory | null {
        if (!InputProcessorFactory.js_instance) {
            InputProcessorFactory.js_instance = true;
            InputProcessorFactory.jv_instance = new InputProcessorFactory().jinit_InputProcessorFactory_0();
        }
        return InputProcessorFactory.jv_instance;
    }
    static set instance(value: InputProcessorFactory | null) {
        InputProcessorFactory.js_instance = true;
        InputProcessorFactory.jv_instance = value;
    }
    inputProcessor: InputProcessor | null = null;

    jfields_InputProcessorFactory(): void {
    this.inputProcessor = new InputProcessor().jinit_InputProcessor_0();
    }

    jinit_InputProcessorFactory_0(): InputProcessorFactory {
        super.jinit_JObject_0();
        this.jfields_InputProcessorFactory();
        return this;
    }
    

    static getInstance(): InputProcessorFactory | null {
        return InputProcessorFactory.instance;
    }
    

    getInputProcessor(): InputProcessor | null {
        return this.inputProcessor;
    }
}

