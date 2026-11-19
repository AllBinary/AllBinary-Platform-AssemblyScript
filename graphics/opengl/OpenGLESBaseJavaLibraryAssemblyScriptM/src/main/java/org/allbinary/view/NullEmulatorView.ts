/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.view
// import javax.microedition.lcdui.Displayable
// import javax.microedition.midlet.MIDlet

@global export class NullEmulatorView extends JObject implements EmulatorViewInterface {

    jclassName(): string {
        return "org.allbinary.view.NullEmulatorView";
    }
    @lazy static jv_NULL_EMULATOR_VIEW: NullEmulatorView | null = null;
    @lazy static js_NULL_EMULATOR_VIEW: bool = false;
    static get NULL_EMULATOR_VIEW(): NullEmulatorView | null {
        if (!NullEmulatorView.js_NULL_EMULATOR_VIEW) {
            NullEmulatorView.js_NULL_EMULATOR_VIEW = true;
            NullEmulatorView.jv_NULL_EMULATOR_VIEW = new NullEmulatorView().jinit_NullEmulatorView_0();
        }
        return NullEmulatorView.jv_NULL_EMULATOR_VIEW;
    }
    static set NULL_EMULATOR_VIEW(value: NullEmulatorView | null) {
        NullEmulatorView.js_NULL_EMULATOR_VIEW = true;
        NullEmulatorView.jv_NULL_EMULATOR_VIEW = value;
    }

    jinit_NullEmulatorView_0(): NullEmulatorView {
        super.jinit_JObject_0();
        return this;
    }
    

    setMidlet(midlet: MIDlet | null): void {
    }
    

    onEmulatorInitComplete(midletActivity: Object | null): void {
    }
    

    onSetDisplayable(displayable: Displayable | null): void {
    }
}

