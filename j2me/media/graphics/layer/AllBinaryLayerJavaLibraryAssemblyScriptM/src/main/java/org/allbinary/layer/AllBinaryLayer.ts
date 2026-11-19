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
// package org.allbinary.layer
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.identification.BasicGroupFactory
// import org.allbinary.game.identification.Group
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureUtil
// import org.allbinary.TsUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.view.ViewPositionBase
// import org.allbinary.view.event.ViewPositionEvent

@global export class AllBinaryLayer extends Layer implements LayerInterface {

    jclassName(): string {
        return "org.allbinary.layer.AllBinaryLayer";
    }
    @lazy static jv_NULL_ALLBINARY_LAYER: AllBinaryLayer | null = null;
    @lazy static js_NULL_ALLBINARY_LAYER: bool = false;
    static get NULL_ALLBINARY_LAYER(): AllBinaryLayer | null {
        if (!AllBinaryLayer.js_NULL_ALLBINARY_LAYER) {
            AllBinaryLayer.js_NULL_ALLBINARY_LAYER = true;
            AllBinaryLayer.jv_NULL_ALLBINARY_LAYER = new AllBinaryLayer().jinit_AllBinaryLayer_3(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION);
        }
        return AllBinaryLayer.jv_NULL_ALLBINARY_LAYER;
    }
    static set NULL_ALLBINARY_LAYER(value: AllBinaryLayer | null) {
        AllBinaryLayer.js_NULL_ALLBINARY_LAYER = true;
        AllBinaryLayer.jv_NULL_ALLBINARY_LAYER = value;
    }
    @lazy static readonly TYPE: string | null = "Type: ";
    viewPositionEvent: ViewPositionEvent | null = null;
    halfWidth: i32 = 0;
    halfHeight: i32 = 0;
    name: string | null = null;
    viewPosition: ViewPositionBase | null = null;

    jfields_AllBinaryLayer(): void {
    this.viewPositionEvent = new ViewPositionEvent().jinit_ViewPositionEvent_1(this);
    this.halfWidth = 0;
    this.halfHeight = 0;
    
    this.viewPosition = ViewPositionBase.NULL_VIEW_POSITION;
    }
    

    jinit_AllBinaryLayer_3(name: string | null, rectangle: Rectangle | null, viewPosition: ViewPositionBase | null): AllBinaryLayer {
        super.jinit_Layer_2(rectangle!.getWidth(), rectangle!.getHeight());
        this.jfields_AllBinaryLayer();
        let localName: string | null = null;
        localName = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(name)!.append(CommonSeps.getInstance()!.COLON)!.append(JInteger.toHexString(TsUtil.getInstance()!.hashCode1(this)))); if (JThrowable.pending !== null) return this;
        this.name = localName;
        let point: GPoint | null = rectangle!.getPoint(); if (JThrowable.pending !== null) return this;
        this.setPosition(point!.getX(), point!.getY(), point!.getZ()); if (JThrowable.pending !== null) return this;
        this.setHalfWidth((this.getWidth() >> 1)); if (JThrowable.pending !== null) return this;
        this.setHalfHeight((this.getHeight() >> 1)); if (JThrowable.pending !== null) return this;
        this.viewPosition = viewPosition;
        this.viewPosition!.setAllbinaryLayer(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setPosition(x: i32, y: i32, z: i32): void {
        super.setPosition(x, y, z); if (JThrowable.pending !== null) return;
    }
    

    moveDXYZ(dx: i32, dy: i32, dz: i32): void {
        super.moveDXYZ(dx, dy, dz); if (JThrowable.pending !== null) return;
    }
    

    getXP(): i32 {
        return super.getXP();
    }
    

    getYP(): i32 {
        return super.getYP();
    }
    

    getZP(): i32 {
        return super.getZP();
    }
    

    getWidth(): i32 {
        return super.getWidth();
    }
    

    getHeight(): i32 {
        return super.getHeight();
    }
    

    setVisible(visible: bool): void {
        super.setVisible(visible); if (JThrowable.pending !== null) return;
    }
    

    isVisible(): bool {
        return super.isVisible();
    }
    

    paint(graphics: Graphics | null): void {
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    onChangeEvent(layerManagerEvent: ViewPositionEvent | null): void {
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    getX2(): i32 {
        return this.getXP() + this.getWidth();
    }
    

    getY2(): i32 {
        return this.getYP() + this.getHeight();
    }
    

    getZ2(): i32 {
        return (<i32>(((<i64>(this.getZP())) + this.getDepth())));
    }
    

    getName(): string | null {
        return this.name;
    }
    

    setHalfWidth(halfWidth: i32): void {
        this.halfWidth = halfWidth;
    }
    

    getHalfWidth(): i32 {
        return this.halfWidth;
    }
    

    setHalfHeight(halfHeight: i32): void {
        this.halfHeight = halfHeight;
    }
    

    getHalfHeight(): i32 {
        return this.halfHeight;
    }
    

    getHalfDepth(): i32 {
        return (<i32>(this.getDepth())) / 2;
    }
    

    getViewPosition(): ViewPositionBase | null {
        return this.viewPosition;
    }
    

    setViewPosition(viewPosition: ViewPositionBase | null): void {
        this.viewPosition = viewPosition;
    }
    

    getGroupInterface(): StaticArray<Group | null> | null {
        return BasicGroupFactory.getInstance()!.NONE_ARRAY;
    }
    

    implmentsTickableInterface(): bool {
        return false;
    }
    

    implmentsGameInputInterface(): bool {
        return false;
    }
    

    implmentsArtificialIntelligenceCompositeInterface(): bool {
        return false;
    }
    

    implmentsCollidableInterface(): bool {
        return false;
    }
    

    implementsThreedInterface(): bool {
        return OpenGLFeatureUtil.getInstance()!.isAnyThreed();
    }
    

    getType(): i32 {
        return -1;
    }
    

    getMultiPlayerType(): i32 {
        return -1;
    }
    

    toStringAppend(stringBuffer: StringMaker | null): void {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
        let positionStrings: PositionStrings | null = PositionStrings.getInstance(); if (JThrowable.pending !== null) return;
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.getName()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.COLON); if (JThrowable.pending !== null) return;
        stringBuffer!.append(AllBinaryLayer.TYPE); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getType()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(positionStrings!.X_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getXP()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(positionStrings!.Y_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getYP()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(positionStrings!.Z_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getZP()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonLabels!.WIDTH_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getWidth()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(this.getHeight()); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        this.toStringAppend(stringBuffer); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

