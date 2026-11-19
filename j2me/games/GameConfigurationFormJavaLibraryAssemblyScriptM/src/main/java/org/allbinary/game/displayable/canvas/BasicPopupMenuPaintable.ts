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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.AndroidUtil
// import org.allbinary.J2MEUtil
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.animation.vector.RectangleFilledAnimation
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.layer.SWTUtil
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.draw.DrawVerticalStringUtil
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureUtil
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.threed.SWTJOGLProcessor

@global export class BasicPopupMenuPaintable extends Paintable implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.BasicPopupMenuPaintable";
    }
    @lazy static readonly NAME: string | null = "MENU";
    basicSetColorUtil: BasicColorSetUtil | null = null;
    drawStringUtil: DrawVerticalStringUtil | null = null;
    label: string | null = null;
    foregroundBasicColor: BasicColor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    rectangle: Rectangle | null = null;
    BORDER: i32 = 0;
    heightOffset: i32 = 0;
    offset: i32 = 0;
    animationInterface: Animation | null = null;

    jfields_BasicPopupMenuPaintable(): void {
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.drawStringUtil = DrawVerticalStringUtil.getInstance();
    
    
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    
    this.BORDER = 0;
    this.heightOffset = 0;
    this.offset = 0;
    this.animationInterface = null;
    }
    

    jinit_BasicPopupMenuPaintable_3(rectangle: Rectangle | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): BasicPopupMenuPaintable {
        super.jinit_Paintable_0();
        this.jfields_BasicPopupMenuPaintable();
        this.foregroundBasicColor = foregroundBasicColor;
        this.label = BasicPopupMenuPaintable.NAME;
        this.rectangle = rectangle;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
            this.animationInterface = NullAnimationFactory.getFactoryInstance()!.getInstance1(0); if (JThrowable.pending !== null) return this;
        } else {
            this.animationInterface = new RectangleFilledAnimation().jinit_RectangleFilledAnimation_3(this.rectangle!.getWidth(), this.rectangle!.getHeight(), BasicColorFactory.getInstance()!.TRANSPARENT_GREY); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.init(rectangle); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let isOpenGL: bool = features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL); if (JThrowable.pending !== null) return;
        this.drawStringUtil!.updateMeasurement(graphics, this.label); if (JThrowable.pending !== null) return;
        let BORDER: i32 = 0;
        if (J2MEUtil.isHTML() || isOpenGL) {
            BORDER = MyFontProcessor.defaultCharWidth(font) / 2; if (JThrowable.pending !== null) return;
        } else if (AndroidUtil.isAndroid() || J2MEUtil.isJ2SE() || SWTUtil.isSWT) {
            BORDER = MyFontProcessor.defaultCharWidth(font); if (JThrowable.pending !== null) return;
        } else {
            BORDER = MyFontProcessor.defaultCharWidth(font) * 2; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.BORDER = BORDER;
        this.heightOffset = this.rectangle!.getHeight() - (font!.getHeight() * JString.length0(BasicPopupMenuPaintable.NAME)); if (JThrowable.pending !== null) return;
        if (OpenGLFeatureUtil.getInstance()!.isAnyThreed()) {
            this.heightOffset -= font!.getHeight() + 2; if (JThrowable.pending !== null) return;
            if (AndroidUtil.isAndroid()) {
                this.heightOffset = font!.getHeight(); if (JThrowable.pending !== null) return;
            } else {
                this.heightOffset -= font!.getHeight() + 2; if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.offset = (this.heightOffset >> 1) + ((SWTJOGLProcessor.getInstance()!.isJOGL() ? 4 : 0)); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    init(rectangle: Rectangle | null): void {
        this.rectangle = rectangle;
        let width: i32 = this.rectangle!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = this.rectangle!.getHeight(); if (JThrowable.pending !== null) return;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
        } else {
            let rectangleFilledAnimation: RectangleFilledAnimation | null = changetype<RectangleFilledAnimation | null>(this.animationInterface);
            rectangleFilledAnimation!.setWidth(width); if (JThrowable.pending !== null) return;
            rectangleFilledAnimation!.setHeight(height); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let point: GPoint | null = this.rectangle!.getPoint(); if (JThrowable.pending !== null) return;
        let x: i32 = point!.getX(); if (JThrowable.pending !== null) return;
        let y: i32 = point!.getY(); if (JThrowable.pending !== null) return;
        let width: i32 = this.rectangle!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = this.rectangle!.getHeight(); if (JThrowable.pending !== null) return;
        this.animationInterface!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.foregroundBasicColor); if (JThrowable.pending !== null) return;
        this.drawStringUtil!.paintVerticle(graphics, this.label, x + this.BORDER, y + this.offset, 0); if (JThrowable.pending !== null) return;
        graphics!.drawRect(x, y, width, height); if (JThrowable.pending !== null) return;
    }
}

