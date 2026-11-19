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
// package org.allbinary.game.part
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.math.PrimitiveLongUtil
// import org.allbinary.util.ABHashtable

@global export class CountedLayerInterfaceFactoryPart extends JObject implements PartInterface, UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.part.CountedLayerInterfaceFactoryPart";
    }
    @lazy static jv_NULL_COUNTED_LAYER_INTERFACE_FACTORY: CountedLayerInterfaceFactoryPart | null = null;
    @lazy static js_NULL_COUNTED_LAYER_INTERFACE_FACTORY: bool = false;
    static get NULL_COUNTED_LAYER_INTERFACE_FACTORY(): CountedLayerInterfaceFactoryPart | null {
        if (!CountedLayerInterfaceFactoryPart.js_NULL_COUNTED_LAYER_INTERFACE_FACTORY) {
            CountedLayerInterfaceFactoryPart.js_NULL_COUNTED_LAYER_INTERFACE_FACTORY = true;
            CountedLayerInterfaceFactoryPart.jv_NULL_COUNTED_LAYER_INTERFACE_FACTORY = new CountedLayerInterfaceFactoryPart().jinit_CountedLayerInterfaceFactoryPart_2(0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY);
        }
        return CountedLayerInterfaceFactoryPart.jv_NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    }
    static set NULL_COUNTED_LAYER_INTERFACE_FACTORY(value: CountedLayerInterfaceFactoryPart | null) {
        CountedLayerInterfaceFactoryPart.js_NULL_COUNTED_LAYER_INTERFACE_FACTORY = true;
        CountedLayerInterfaceFactoryPart.jv_NULL_COUNTED_LAYER_INTERFACE_FACTORY = value;
    }
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    animationInterface: Animation | null = null;
    total: i32 = 0;
    totalString: StaticArray<u16> | null = null;
    xOffset: i32 = 0;
    countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory | null = null;
    primitiveLongUtil: PrimitiveLongUtil | null = null;

    jfields_CountedLayerInterfaceFactoryPart(): void {
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.animationInterface = NullAnimationFactory.getFactoryInstance()!.getInstance1(0);
    this.total = 0;
    this.totalString = NullUtil.getInstance()!.NULL_CHAR_ARRAY;
    this.xOffset = 0;
    this.countedPickedUpLayerInterfaceFactory = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
    
    }
    

    jinit_CountedLayerInterfaceFactoryPart_2(total: i32, countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory | null): CountedLayerInterfaceFactoryPart {
        super.jinit_JObject_0();
        this.jfields_CountedLayerInterfaceFactoryPart();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(1000); if (JThrowable.pending !== null) return this;
        this.init(total, countedPickedUpLayerInterfaceFactory); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.setXOffset(font!.charsWidth(this.totalString, 0, this.primitiveLongUtil!.getCurrentTotalDigits()) + (font!.getSize() >> 1)); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    init(total: i32, countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory | null): void {
        this.setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory); if (JThrowable.pending !== null) return;
        this.total = total;
    }
    

    getInstance4(hashtable: ABHashtable | null, x: i32, y: i32, z: i32): AllBinaryLayer | null {
        if (this.total > 0) {
            this.setTotal(this.total - 1); if (JThrowable.pending !== null) return null;
            return this.getCountedPickedUpLayerInterfaceFactory()!.getNextInstance(hashtable, x, y, z);
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("No more left. Could use a listener to automatically remove")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getTotal(): i32 {
        return this.total;
    }
    

    setTotal(total: i32): void {
        this.total = total;
        this.totalString = this.primitiveLongUtil!.getCharArray(total); if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    getAnimationInterface(): Animation | null {
        return this.animationInterface;
    }
    

    setAnimationInterface(animationInterface: Animation | null): void {
        this.animationInterface = animationInterface;
    }
    

    getXOffset(): i32 {
        return this.xOffset;
    }
    

    setXOffset(totalStringWidth: i32): void {
        this.xOffset = totalStringWidth;
    }
    

    getTotalString(): StaticArray<u16> | null {
        return this.totalString;
    }
    

    getCountedPickedUpLayerInterfaceFactory(): CountedPickedUpLayerInterfaceFactory | null {
        return this.countedPickedUpLayerInterfaceFactory;
    }
    

    setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory | null): void {
        this.countedPickedUpLayerInterfaceFactory = countedPickedUpLayerInterfaceFactory;
    }
}

