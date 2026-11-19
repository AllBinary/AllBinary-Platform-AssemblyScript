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
// package org.allbinary.game.graphics.hud
// import javax.microedition.lcdui.Graphics
// import org.allbinary.J2MEUtil
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings

@global export class BasicHud extends JObject implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.graphics.hud.BasicHud";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    canvasStrings: CanvasStrings | null = null;
    basicSetColorUtil: BasicColorSetUtil | null = null;
    displayInfo: DisplayInfoSingleton | null = null;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    location: i32 = 0;
    direction: i32 = 0;
    bufferZone: i32 = 0;
    bufferZoneY: i32 = 0;
    hudGraphicsPosition: HudGraphicsPosition | null = null;
    x: i32 = 0;
    y: i32 = 0;
    basicColor: BasicColor | null = null;
    color: i32 = 0;
    updateMaxWidth: i32 = 0;
    updateMaxHeight: i32 = 0;
    offsetY: i32 = 0;

    jfields_BasicHud(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.canvasStrings = CanvasStrings.getInstance();
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.displayInfo = DisplayInfoSingleton.getInstance();
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.location = 0;
    this.direction = 0;
    this.bufferZone = 0;
    this.bufferZoneY = 0;
    this.hudGraphicsPosition = HudGraphicsPosition.NULL_HUD_GRAPHICS_POSITION;
    this.x = 0;
    this.y = 0;
    this.basicColor = BasicColorFactory.getInstance()!.BLACK;
    
    this.updateMaxWidth = 0;
    this.updateMaxHeight = 0;
    this.offsetY = 0;
    }
    

    jinit_BasicHud_4(location: i32, direction: i32, bufferZone: i32, basicColor: BasicColor | null): BasicHud {
        super.jinit_JObject_0();
        this.jfields_BasicHud();
        this.setLocation(location); if (JThrowable.pending !== null) return this;
        this.setDirection(direction); if (JThrowable.pending !== null) return this;
        this.setBufferZone(bufferZone); if (JThrowable.pending !== null) return this;
        this.onDisplayChangeEvent(DisplayInfoSingleton.getInstance()!.displayChangeEvent); if (JThrowable.pending !== null) return this;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        this.color = basicColor!.intValue(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        do {
            this.hudGraphicsPosition = this.getHudGraphicsPositionWH(this.displayInfo!.getLastWidth(), this.displayInfo!.getLastHeight(), this.updateMaxWidth, this.updateMaxHeight); if (JThrowable.pending !== null) break;
            this.x = this.hudGraphicsPosition!.getPoint()!.getX(); if (JThrowable.pending !== null) break;
            this.setY(this.hudGraphicsPosition!.getPoint()!.getY()); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    getLocation(): i32 {
        return this.location;
    }
    

    getDirection(): i32 {
        return this.direction;
    }
    

    getHudGraphicsPositionWH(width: i32, height: i32, maxWidth: i32, maxHeight: i32): HudGraphicsPosition | null {
        let x: i32 = 0;
        let y: i32 = 0;
        let anchor: i32 = 0;
        let basicHudFactory: BasicHudFactory | null = BasicHudFactory.getInstance(); if (JThrowable.pending !== null) return null;
        if (basicHudFactory!.BOTTOMLEFT == this.getLocation()) {
            x = this.bufferZone + 2;
            y = height - maxHeight - this.bufferZone;
            anchor = Graphics.BOTTOM & Graphics.LEFT;
        } else if (basicHudFactory!.BOTTOMRIGHT == this.getLocation()) {
            x = width - maxWidth;
            y = height - maxHeight - this.bufferZone;
            anchor = Graphics.BOTTOM & Graphics.RIGHT;
        } else if (basicHudFactory!.TOPLEFT == this.getLocation()) {
            x = this.bufferZone + 2;
            y = this.bufferZoneY;
            anchor = Anchor.TOP_LEFT;
        } else if (basicHudFactory!.TOPRIGHT == this.getLocation()) {
            x = width - maxWidth;
            y = this.bufferZoneY;
            anchor = Graphics.TOP & Graphics.RIGHT;
        } else if (basicHudFactory!.TOPCENTER == this.getLocation()) {
            x = ((width - maxWidth) / 2);
            y = this.bufferZoneY;
            anchor = Graphics.TOP & Graphics.HCENTER;
        } else if (basicHudFactory!.BOTTOMCENTER == this.getLocation()) {
            x = ((width - maxWidth) / 2);
            y = height - maxHeight - this.bufferZone;
            anchor = Graphics.BOTTOM & Graphics.HCENTER;
        } else if (basicHudFactory!.ABSOLUTE == this.getLocation()) {
            x = maxHeight;
            y = maxWidth;
            anchor = 0;
        } if (JThrowable.pending !== null) return null;
        return new HudGraphicsPosition().jinit_HudGraphicsPosition_2(this.getPoint(x, y), anchor);
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent | null): void {
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    getPoint(x: i32, y: i32): GPoint | null {
        return PointFactory.getInstance()!.createXY(x, y);
    }
    

    getBufferZone(): i32 {
        return this.bufferZone;
    }
    

    setBufferZone(bufferZone: i32): void {
        this.bufferZone = bufferZone;
        if (J2MEUtil.isHTML()) {
            this.bufferZoneY = this.bufferZone;
        } else {
            this.bufferZoneY = this.bufferZone + 5;
        } if (JThrowable.pending !== null) return;
    }
    

    setLocation(location: i32): void {
        this.location = location;
    }
    

    setDirection(direction: i32): void {
        this.direction = direction;
    }
    

    getHudGraphicsPosition(): HudGraphicsPosition | null {
        return this.hudGraphicsPosition;
    }
    

    getColor(): i32 {
        return this.color;
    }
    

    getX(): i32 {
        return this.x;
    }
    

    setX(x: i32): void {
        this.x = x;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    setY(y: i32): void {
        this.y = y;
    }
    

    getY(): i32 {
        return this.y;
    }
    

    paintSSO(graphics: Graphics | null, string: string | null, string2: string | null, offset: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP()); if (JThrowable.pending !== null) return;
        graphics!.drawString(string, this.x, this.getY(), this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
        graphics!.drawString(string2, this.x + offset, this.getY(), this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
    }
    

    paintSSOO(graphics: Graphics | null, string: string | null, string2: string | null, offset: i32, offset2: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.getColor()); if (JThrowable.pending !== null) return;
        graphics!.drawString(string, this.x + offset, this.getY(), this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
        graphics!.drawString(string2, this.x + offset2, this.getY(), this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
    }
    

    paintDXY(graphics: Graphics | null, charArray: StaticArray<u16> | null, offset: i32, len: i32, charArray2: StaticArray<u16> | null, offset2: i32, len2: i32, xOffset: i32, xOffset2: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP()); if (JThrowable.pending !== null) return;
        let y: i32 = this.getY(); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray, offset, len, this.x + xOffset, y, this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray2, offset2, len2, this.x + xOffset2, y, this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
    }
    

    paintDX(graphics: Graphics | null, charArray: StaticArray<u16> | null, offset: i32, len: i32, charArray2: StaticArray<u16> | null, offset2: i32, len2: i32, xOffset: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP()); if (JThrowable.pending !== null) return;
        let y: i32 = this.getY(); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray2, offset2, len2, this.x + xOffset, y, this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
    }
    

    paintOffsetAndLength(graphics: Graphics | null, charArray: StaticArray<u16> | null, offset: i32, len: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP()); if (JThrowable.pending !== null) return;
        let y: i32 = this.getY(); if (JThrowable.pending !== null) return;
        graphics!.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
    }
    

    paintString(graphics: Graphics | null, string: string | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP()); if (JThrowable.pending !== null) return;
        let y: i32 = this.getY() + this.offsetY; if (JThrowable.pending !== null) return;
        graphics!.drawString(string, this.x, y, this.hudGraphicsPosition!.getAnchor()); if (JThrowable.pending !== null) return;
    }
}

