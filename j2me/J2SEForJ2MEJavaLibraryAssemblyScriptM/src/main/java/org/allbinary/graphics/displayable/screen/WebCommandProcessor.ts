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
// package org.allbinary.graphics.displayable.screen
// import java.awt.Desktop
// import java.net.URI
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class WebCommandProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.WebCommandProcessor";
    }
    @lazy static jv_instance: WebCommandProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): WebCommandProcessor | null {
        if (!WebCommandProcessor.js_instance) {
            WebCommandProcessor.js_instance = true;
            WebCommandProcessor.jv_instance = new WebCommandProcessor().jinit_WebCommandProcessor_0();
        }
        return WebCommandProcessor.jv_instance;
    }
    static set instance(value: WebCommandProcessor | null) {
        WebCommandProcessor.js_instance = true;
        WebCommandProcessor.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    aboutCommandProcessor: AboutCommandProcessor | null = null;
    list: BasicArrayList | null = null;

    jfields_WebCommandProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.aboutCommandProcessor = AboutCommandProcessor.getInstance();
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_WebCommandProcessor_0(): WebCommandProcessor {
        super.jinit_JObject_0();
        this.jfields_WebCommandProcessor();
        return this;
    }
    

    static getInstance(): WebCommandProcessor | null {
        return WebCommandProcessor.instance;
    }
    

    process(midletCommandListener: CommandListener | null, command: Command | null, canvas: Canvas | null): void {
        do {
            if (JDesktop.isDesktopSupported() && JDesktop.getDesktop()!.isSupported(JDesktop.Action!.BROWSE)) {
                JDesktop.getDesktop()!.browse(new JURI().jinit_JURI_1(changetype<string | null>(this.list!.removeAt(0)))); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

