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
// import org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.layer.AllBinaryLayer

@global export class CountedLayersHudPaintable extends JObject implements PaintableInterface, UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.part.CountedLayersHudPaintable";
    }
    @lazy static XXStringWidth: i32 = 0;
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    partInterfaceArray: StaticArray<PartInterface | null> | null = null;
    countedTotalStringColor: i32 = 0;
    countedPartsBorder: i32 = 0;
    startIndex: i32 = 0;
    dropSize: i32 = 0;
    myFontProcessor: MyFontProcessor | null = null;
    height: i32 = 0;

    jfields_CountedLayersHudPaintable(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    
    
    
    
    
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.height = 0;
    }
    

    jinit_CountedLayersHudPaintable_5(partInterfaceArray: StaticArray<PartInterface | null> | null, dropSize: i32, startIndex: i32, countedTotalStringColor: i32, countedPartsBorder: i32): CountedLayersHudPaintable {
        super.jinit_JObject_0();
        this.jfields_CountedLayersHudPaintable();
        this.partInterfaceArray = partInterfaceArray;
        this.startIndex = startIndex;
        this.countedTotalStringColor = countedTotalStringColor;
        this.countedPartsBorder = countedPartsBorder;
        this.dropSize = dropSize;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.height = font!.getHeight(); if (JThrowable.pending !== null) return;
        if (this.dropSize > font!.getHeight()) {
            this.height = this.dropSize;
        } if (JThrowable.pending !== null) return;
        if (CountedLayersHudPaintable.XXStringWidth == 0) {
            let XXString: string | null = "XX";
            CountedLayersHudPaintable.XXStringWidth = font!.stringWidth(XXString); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let lastWidth: i32 = this.displayInfoSingleton!.getLastWidth(); if (JThrowable.pending !== null) return;
        let widthEdge: i32 = lastWidth - this.dropSize;
        let size: i32 = this.partInterfaceArray!.length;
        let count: i32 = 0;
        let y: i32 = 0;
        let countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart | null = null;
        let pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null = null;
        let layerInterface: AllBinaryLayer | null = null;
        let charArray: StaticArray<u16> | null = null;
        for (let index: i32 = this.startIndex; index < size; index++) {
            countedLayerInterfaceFactory = changetype<CountedLayerInterfaceFactoryPart | null>(this.partInterfaceArray![index]);
            if (countedLayerInterfaceFactory!.getTotal() > 0) {
                pickedUpLayerInterfaceFactoryInterface = countedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory(); if (JThrowable.pending !== null) return;
                layerInterface = pickedUpLayerInterfaceFactoryInterface!.getIconLayer(); if (JThrowable.pending !== null) return;
                y = 40 + (count * this.height);
                layerInterface!.setPosition(widthEdge, y, layerInterface!.getZP()); if (JThrowable.pending !== null) return;
                layerInterface!.paint(graphics); if (JThrowable.pending !== null) return;
                graphics!.setColor(this.countedTotalStringColor); if (JThrowable.pending !== null) return;
                countedLayerInterfaceFactory!.paint(graphics); if (JThrowable.pending !== null) return;
                charArray = countedLayerInterfaceFactory!.getTotalString(); if (JThrowable.pending !== null) return;
                graphics!.drawChars(charArray, 0, charArray!.length, widthEdge - countedLayerInterfaceFactory!.getXOffset(), y, 0); if (JThrowable.pending !== null) return;
                count++;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (count > 0) {
            graphics!.setColor(this.countedPartsBorder); if (JThrowable.pending !== null) return;
            graphics!.drawRect(lastWidth - (CountedLayersHudPaintable.XXStringWidth + this.dropSize), 40, CountedLayersHudPaintable.XXStringWidth + this.dropSize, (count * this.height) + 3); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
}

