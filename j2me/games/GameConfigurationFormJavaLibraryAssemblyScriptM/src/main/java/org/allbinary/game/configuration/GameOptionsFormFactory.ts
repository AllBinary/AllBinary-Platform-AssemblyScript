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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class GameOptionsFormFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameOptionsFormFactory";
    }
    @lazy static jv_instance: GameOptionsFormFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameOptionsFormFactory | null {
        if (!GameOptionsFormFactory.js_instance) {
            GameOptionsFormFactory.js_instance = true;
            GameOptionsFormFactory.jv_instance = new GameOptionsFormFactory().jinit_GameOptionsFormFactory_0();
        }
        return GameOptionsFormFactory.jv_instance;
    }
    static set instance(value: GameOptionsFormFactory | null) {
        GameOptionsFormFactory.js_instance = true;
        GameOptionsFormFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_GameOptionsFormFactory(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_GameOptionsFormFactory_0(): GameOptionsFormFactory {
        super.jinit_JObject_0();
        this.jfields_GameOptionsFormFactory();
        return this;
    }
    

    static getInstance(): GameOptionsFormFactory | null {
        return GameOptionsFormFactory.instance;
    }
    

    init(commandListener: CommandListener | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CommandForm | null {
        do {
            return new GameOptionsForm().jinit_GameOptionsForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e); if (JThrowable.pending !== null) return null;
            return CommandForm.getNullCommandForm();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

