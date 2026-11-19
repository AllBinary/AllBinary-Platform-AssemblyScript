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
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable

@global export class FullScreenPaintableFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.FullScreenPaintableFactory";
    }
    @lazy static jv_instance: FullScreenPaintableFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FullScreenPaintableFactory | null {
        if (!FullScreenPaintableFactory.js_instance) {
            FullScreenPaintableFactory.js_instance = true;
            FullScreenPaintableFactory.jv_instance = new FullScreenPaintableFactory().jinit_FullScreenPaintableFactory_0();
        }
        return FullScreenPaintableFactory.jv_instance;
    }
    static set instance(value: FullScreenPaintableFactory | null) {
        FullScreenPaintableFactory.js_instance = true;
        FullScreenPaintableFactory.jv_instance = value;
    }
    paintable: Paintable | null = null;

    jfields_FullScreenPaintableFactory(): void {
    this.paintable = NullPaintable.getInstance();
    }

    jinit_FullScreenPaintableFactory_0(): FullScreenPaintableFactory {
        super.jinit_JObject_0();
        this.jfields_FullScreenPaintableFactory();
        return this;
    }
    

    static getInstance(): FullScreenPaintableFactory | null {
        return FullScreenPaintableFactory.instance;
    }
}

