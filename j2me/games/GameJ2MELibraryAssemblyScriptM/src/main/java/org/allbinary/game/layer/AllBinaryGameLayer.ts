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
// package org.allbinary.game.layer
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.image.opengles.OpenGLSurfaceChangedInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.view.ViewPositionBase
// import org.allbinary.view.event.ViewPositionEvent
// import org.allbinary.view.event.ViewPositionEventListenerInterface

@global export class AllBinaryGameLayer extends AllBinaryLayer implements ViewPositionEventListenerInterface, OpenGLSurfaceChangedInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.AllBinaryGameLayer";
    }
    commonStrings: CommonStrings | null = null;
    basicSetColorUtil: BasicColorSetUtil | null = null;
    RED: BasicColor | null = null;
    paintable: Paintable | null = null;
    gameKeyEventList: BasicArrayList | null = null;

    jfields_AllBinaryGameLayer(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.RED = BasicColorFactory.getInstance()!.RED;
    this.paintable = AllBinaryGameLayer.createPaintable();
    this.gameKeyEventList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static createPaintable(): Paintable | null {
        if (SWTUtil.isSWT) {
            return new SWTBlackPaintable().jinit_SWTBlackPaintable_0();
        } if (JThrowable.pending !== null) return null;
        return NullPaintable.getInstance();
    }
    

    jinit_AllBinaryGameLayer_3(name: string | null, layerInfo: Rectangle | null, viewPosition: ViewPositionBase | null): AllBinaryGameLayer {
        super.jinit_AllBinaryLayer_3(name, layerInfo, viewPosition);
        this.jfields_AllBinaryGameLayer();
        return this;
    }
    

    set(gl: GL | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    move(): void {
    }
    

    getGameKeyEventList(): BasicArrayList | null {
        return this.gameKeyEventList;
    }
    

    processInput(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    processTick(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onViewPositionChangeEvent(): void {
        this.onChangeEvent(this.viewPositionEvent); if (JThrowable.pending !== null) return;
    }
    

    onChangeEvent(layerManagerEvent: ViewPositionEvent | null): void {
        if (GameLayerUtil.isOnScreen(this)) {
            this.setVisible(true); if (JThrowable.pending !== null) return;
        } else {
            this.setVisible(false); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintFirst(graphics: Graphics | null): void {
        this.paintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintDebug(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.getViewPosition(); if (JThrowable.pending !== null) return;
        let viewX: i32 = viewPosition!.getX(); if (JThrowable.pending !== null) return;
        let viewY: i32 = viewPosition!.getY(); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.RED); if (JThrowable.pending !== null) return;
        graphics!.drawRect(viewX, viewY, this.getWidth(), this.getHeight()); if (JThrowable.pending !== null) return;
    }
    

    setWidth(width: i32): void {
        super.setLayerWidth(width); if (JThrowable.pending !== null) return;
        this.setHalfWidth(width >> 1); if (JThrowable.pending !== null) return;
    }
    

    setHeight(height: i32): void {
        super.setLayerHeight(height); if (JThrowable.pending !== null) return;
        this.setHalfHeight(height >> 1); if (JThrowable.pending !== null) return;
    }
}

