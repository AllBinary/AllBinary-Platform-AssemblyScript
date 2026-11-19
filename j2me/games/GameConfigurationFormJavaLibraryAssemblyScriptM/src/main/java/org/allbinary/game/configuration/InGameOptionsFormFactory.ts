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
// package org.allbinary.game.configuration
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.init.Init
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class InGameOptionsFormFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.InGameOptionsFormFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!InGameOptionsFormFactory.js_instance) {
            InGameOptionsFormFactory.js_instance = true;
            InGameOptionsFormFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return InGameOptionsFormFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        InGameOptionsFormFactory.js_instance = true;
        InGameOptionsFormFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    SINGLETON: CommandForm | null = null;

    jfields_InGameOptionsFormFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.SINGLETON = CommandForm.getNullCommandForm();
    }

    jinit_InGameOptionsFormFactory_0(): InGameOptionsFormFactory {
        super.jinit_JObject_0();
        this.jfields_InGameOptionsFormFactory();
        return this;
    }
    

    static getInstance(): InGameOptionsFormFactory | null {
        if (InGameOptionsFormFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            InGameOptionsFormFactory.instance = new InGameOptionsFormFactory().jinit_InGameOptionsFormFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<InGameOptionsFormFactory | null>(InGameOptionsFormFactory.instance);
    }
    

    init(commandListener: CommandListener | null, initInterface: Init | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): void {
        do {
            if (this.SINGLETON == CommandForm.getNullCommandForm()) {
                initInterface!.init(); if (JThrowable.pending !== null) break;
                this.SINGLETON = new InGameOptionsForm().jinit_InGameOptionsForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    get(): CommandForm | null {
        return this.SINGLETON;
    }
}

