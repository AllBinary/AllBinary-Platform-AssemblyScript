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
// import org.allbinary.game.paint.AboutPaintable
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.string.StringUtil

@global export class AboutPaintableFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.AboutPaintableFactory";
    }
    @lazy static jv_instance: AboutPaintableFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AboutPaintableFactory | null {
        if (!AboutPaintableFactory.js_instance) {
            AboutPaintableFactory.js_instance = true;
            AboutPaintableFactory.jv_instance = new AboutPaintableFactory().jinit_AboutPaintableFactory_0();
        }
        return AboutPaintableFactory.jv_instance;
    }
    static set instance(value: AboutPaintableFactory | null) {
        AboutPaintableFactory.js_instance = true;
        AboutPaintableFactory.jv_instance = value;
    }
    paintableArray: StaticArray<Paintable | null> | null = null;

    jfields_AboutPaintableFactory(): void {
    this.paintableArray = StaticArray.fromArray<Paintable | null>([NullPaintable.getInstance()]);
    }
    

    static getInstance(): AboutPaintableFactory | null {
        return AboutPaintableFactory.instance;
    }
    

    jinit_AboutPaintableFactory_0(): AboutPaintableFactory {
        super.jinit_JObject_0();
        this.jfields_AboutPaintableFactory();
        let INFO: StaticArray<string | null> | null = StaticArray.fromArray<string | null>(["Built with the", "AllBinary Platform", StringUtil.getInstance()!.EMPTY_STRING, "Comments or Questions:", "support@allbinary.com"]); if (JThrowable.pending !== null) return this;
        let DEVELOPERS: StaticArray<string | null> | null = StaticArray.fromArray<string | null>(["Developed By:", "Travis Berthelot"]);
        this.paintableArray = AboutPaintable.getInstance2(INFO, DEVELOPERS)!.getPaintableArrayInstance(); if (JThrowable.pending !== null) return this;
        return this;
    }
}

