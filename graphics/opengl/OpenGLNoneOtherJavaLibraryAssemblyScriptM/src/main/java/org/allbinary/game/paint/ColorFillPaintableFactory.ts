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
// package org.allbinary.game.paint
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.logic.system.os.OperatingSystemFactory

@global export class ColorFillPaintableFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.paint.ColorFillPaintableFactory";
    }
    @lazy static jv_instance: ColorFillPaintableFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ColorFillPaintableFactory | null {
        if (!ColorFillPaintableFactory.js_instance) {
            ColorFillPaintableFactory.js_instance = true;
            ColorFillPaintableFactory.jv_instance = new ColorFillPaintableFactory().jinit_ColorFillPaintableFactory_0();
        }
        return ColorFillPaintableFactory.jv_instance;
    }
    static set instance(value: ColorFillPaintableFactory | null) {
        ColorFillPaintableFactory.js_instance = true;
        ColorFillPaintableFactory.jv_instance = value;
    }

    jinit_ColorFillPaintableFactory_0(): ColorFillPaintableFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ColorFillPaintableFactory | null {
        return ColorFillPaintableFactory.instance;
    }
    

    getInstance2(basicColor: BasicColor | null, forThreedCanvas: bool): ColorFillBasePaintable | null {
        let operatingSystem: GenericOperatingSystem | null = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) return null;
        if (operatingSystem!.isOverScan()) {
            return new OverScanColorFillPaintable().jinit_OverScanColorFillPaintable_1(basicColor);
        } else {
            return new ColorFillPaintable().jinit_ColorFillPaintable_1(basicColor);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

