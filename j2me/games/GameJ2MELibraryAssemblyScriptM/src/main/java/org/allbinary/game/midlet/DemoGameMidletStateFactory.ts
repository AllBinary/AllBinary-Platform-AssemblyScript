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
// package org.allbinary.game.midlet

@global export class DemoGameMidletStateFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.DemoGameMidletStateFactory";
    }
    @lazy static jv_STATE: DemoGameMidletStateFactory | null = null;
    @lazy static js_STATE: bool = false;
    static get STATE(): DemoGameMidletStateFactory | null {
        if (!DemoGameMidletStateFactory.js_STATE) {
            DemoGameMidletStateFactory.js_STATE = true;
            DemoGameMidletStateFactory.jv_STATE = new DemoGameMidletStateFactory().jinit_DemoGameMidletStateFactory_0();
        }
        return DemoGameMidletStateFactory.jv_STATE;
    }
    static set STATE(value: DemoGameMidletStateFactory | null) {
        DemoGameMidletStateFactory.js_STATE = true;
        DemoGameMidletStateFactory.jv_STATE = value;
    }
    NONE: DemoGameMidletState | null = null;
    START_DEMO: DemoGameMidletState | null = null;
    START_GAME: DemoGameMidletState | null = null;
    START_INPUT_MAPPING: DemoGameMidletState | null = null;

    jfields_DemoGameMidletStateFactory(): void {
    this.NONE = new DemoGameMidletState().jinit_DemoGameMidletState_0();
    this.START_DEMO = new DemoGameMidletState().jinit_DemoGameMidletState_0();
    this.START_GAME = new DemoGameMidletState().jinit_DemoGameMidletState_0();
    this.START_INPUT_MAPPING = new DemoGameMidletState().jinit_DemoGameMidletState_0();
    }
    

    jinit_DemoGameMidletStateFactory_0(): DemoGameMidletStateFactory {
        super.jinit_JObject_0();
        this.jfields_DemoGameMidletStateFactory();
        return this;
    }
    

    static getInstance(): DemoGameMidletStateFactory | null {
        return DemoGameMidletStateFactory.STATE;
    }
}

