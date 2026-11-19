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
// package org.allbinary.graphics.displayable
// import javax.microedition.lcdui.Displayable
// import org.allbinary.AndroidUtil
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent
// import org.allbinary.graphics.displayable.event.DisplayChangeEventHandler
// import org.allbinary.graphics.displayable.event.LastDisplayChangeEventHandler
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.graphics.threed.SWTJOGLProcessor
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DisplayInfoSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.DisplayInfoSingleton";
    }
    @lazy static jv_SINGLETON: DisplayInfoSingleton | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): DisplayInfoSingleton | null {
        if (!DisplayInfoSingleton.js_SINGLETON) {
            DisplayInfoSingleton.js_SINGLETON = true;
            DisplayInfoSingleton.jv_SINGLETON = new DisplayInfoSingleton().jinit_DisplayInfoSingleton_0();
        }
        return DisplayInfoSingleton.jv_SINGLETON;
    }
    static set SINGLETON(value: DisplayInfoSingleton | null) {
        DisplayInfoSingleton.js_SINGLETON = true;
        DisplayInfoSingleton.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    commonLabels: CommonLabels | null = null;
    commonSeps: CommonSeps | null = null;
    commonStrings: CommonStrings | null = null;
    ORIENTATION: string | null = null;
    ADJUSTING_FOR_SCALING_IN_PORTRAIT: string | null = null;
    ADJUSTING_FOR_SCALING_IN_LANDSCAPE: string | null = null;
    last: StaticArray<i32> | null = null;
    lastHalf: StaticArray<i32> | null = null;
    full: StaticArray<i32> | null = null;
    top: i32 = 0;
    left: i32 = 0;
    xOffset: i32 = 0;
    yOffset: i32 = 0;
    scaleLargestTo: f32 = 0.0;
    WIDTH: i32 = 0;
    HEIGHT: i32 = 0;
    CUSTOM_WIDTH: i32 = 0;
    CUSTOM_HEIGHT: i32 = 0;
    scalableListener: BaseScalable | null = null;
    displayRatio: f32 = 0.0;
    ratio: f32 = 0.0;
    SET_LAST_SIZE_METHOD_NAME: string | null = null;
    FULL_WIDTH: string | null = null;
    FULL_HEIGHT: string | null = null;
    LAST_WIDTH: string | null = null;
    LAST_HEIGHT: string | null = null;
    PORTRAIT: string | null = null;
    LANDSCAPE: string | null = null;
    displayChangeEvent: DisplayChangeEvent | null = null;
    FIRE_METHOD_NAME: string | null = null;
    REASON: string | null = null;
    UPDATE_FROM_ORIENTATION_CHANGE: string | null = null;
    list: BasicArrayList | null = null;
    DISPLAY_INFO: string | null = null;
    FULL: string | null = null;
    LAST: string | null = null;
    LAST_HALF: string | null = null;

    jfields_DisplayInfoSingleton(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonLabels = CommonLabels.getInstance();
    this.commonSeps = CommonSeps.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.ORIENTATION = "ORIENTATION";
    this.ADJUSTING_FOR_SCALING_IN_PORTRAIT = "Adjusting for Scaling in portrait display ratio: ";
    this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE = "Adjusting for Scaling in landscape display ratio: ";
    this.last = new StaticArray<i32>(4);
    this.lastHalf = new StaticArray<i32>(4);
    this.full = new StaticArray<i32>(4);
    this.top = 0;
    this.left = 0;
    this.xOffset = 0;
    this.yOffset = 0;
    this.scaleLargestTo = 0.0;
    this.WIDTH = 0;
    this.HEIGHT = 1;
    this.CUSTOM_WIDTH = 2;
    this.CUSTOM_HEIGHT = 3;
    this.scalableListener = new BaseScalable().jinit_BaseScalable_0();
    this.displayRatio = 0.0;
    this.ratio = (<f32>1.0);
    this.SET_LAST_SIZE_METHOD_NAME = "setLastSize";
    this.FULL_WIDTH = " FullWidth: ";
    this.FULL_HEIGHT = " FullHeight: ";
    this.LAST_WIDTH = "LastWidth: ";
    this.LAST_HEIGHT = " LastHeight: ";
    this.PORTRAIT = "Portrait";
    this.LANDSCAPE = "Landscape";
    this.displayChangeEvent = new DisplayChangeEvent().jinit_DisplayChangeEvent_1(this);
    this.FIRE_METHOD_NAME = "fire";
    this.REASON = "reason: ";
    this.UPDATE_FROM_ORIENTATION_CHANGE = "Updating from Orientation Change ";
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.DISPLAY_INFO = "Display Info: ";
    this.FULL = "full";
    this.LAST = "last";
    this.LAST_HALF = "lastHalf";
    }
    

    static getInstance(): DisplayInfoSingleton | null {
        return DisplayInfoSingleton.SINGLETON;
    }
    

    jinit_DisplayInfoSingleton_0(): DisplayInfoSingleton {
        super.jinit_JObject_0();
        this.jfields_DisplayInfoSingleton();
        let size: i32 = this.last!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.last![index] = 0;
            this.lastHalf![index] = 0;
            this.full![index] = 0;
        }
        if (AndroidUtil.isAndroid()) {
            this.scaleLargestTo = (<f32>640.0);
        } else {
            this.scaleLargestTo = (<f32>1080.0);
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getLastHalf(): StaticArray<i32> | null {
        return this.lastHalf;
    }
    

    getLast(): StaticArray<i32> | null {
        return this.last;
    }
    

    getFull(): StaticArray<i32> | null {
        return this.full;
    }
    

    getScaleLargestTo(): f32 {
        return this.scaleLargestTo;
    }
    

    setScaleLargestTo(scaleLargestTo: i32): void {
        this.scaleLargestTo = (<f32>(scaleLargestTo));
    }
    

    setLastSize(aLastWidth: i32, aLastHeight: i32, reason: string | null): void {
        if (this.full![this.WIDTH] != aLastWidth || this.full![this.HEIGHT] != aLastHeight) {
            this.setLastSizeForce(aLastWidth, aLastHeight, reason); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setLastSizeForce(aLastWidth: i32, aLastHeight: i32, reason: string | null): void {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)), this, this.SET_LAST_SIZE_METHOD_NAME); if (JThrowable.pending !== null) return;
        let aFullWidth: i32 = aLastWidth;
        let aFullHeight: i32 = aLastHeight;
        stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.FULL_WIDTH)!.appendint(aFullWidth)!.append(this.FULL_HEIGHT)!.appendint(aFullHeight)!.append(this.toString())), this, this.SET_LAST_SIZE_METHOD_NAME); if (JThrowable.pending !== null) return;
        let operatingSystemInterface: GenericOperatingSystem | null = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) return;
        if (operatingSystemInterface!.isOverScan()) {
            aLastWidth = aLastWidth * operatingSystemInterface!.getOverScanXPercent() / 100; if (JThrowable.pending !== null) return;
            aLastHeight = aLastHeight * operatingSystemInterface!.getOverScanYPercent() / 100; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (operatingSystemInterface!.isScalable()) {
            if (this.isPortraitWH(aLastWidth, aLastHeight)) {
                if ((<f32>(aLastHeight)) > this.scaleLargestTo) {
                    this.displayRatio = this.scaleLargestTo / (<f32>(aLastHeight));
                    this.ratio = (<f32>(aLastHeight)) / this.scaleLargestTo;
                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                    this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(this.displayRatio)), this, this.SET_LAST_SIZE_METHOD_NAME); if (JThrowable.pending !== null) return;
                    aLastWidth = JMath.toInt(((<f32>(aLastWidth)) * this.displayRatio));
                    aLastHeight = JMath.toInt(((<f32>(aLastHeight)) * this.displayRatio));
                    this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                } else {
                    this.ratio = (<f32>1.0);
                    this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } else {
                if ((<f32>(aLastWidth)) > this.scaleLargestTo) {
                    this.displayRatio = this.scaleLargestTo / (<f32>(aLastWidth));
                    this.ratio = (<f32>(aLastWidth)) / this.scaleLargestTo;
                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                    this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(this.displayRatio)), this, this.SET_LAST_SIZE_METHOD_NAME); if (JThrowable.pending !== null) return;
                    aLastWidth = JMath.toInt(((<f32>(aLastWidth)) * this.displayRatio));
                    aLastHeight = JMath.toInt(((<f32>(aLastHeight)) * this.displayRatio));
                    this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                } else {
                    this.ratio = (<f32>1.0);
                    this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.LAST_WIDTH)!.appendint(aLastWidth)!.append(this.LAST_HEIGHT)!.appendint(aLastHeight)), this, this.SET_LAST_SIZE_METHOD_NAME); if (JThrowable.pending !== null) return;
        this.xOffset = aFullWidth - aLastWidth;
        this.yOffset = aFullHeight - aLastHeight;
        this.left = this.scalableListener!.getLeft(this.xOffset); if (JThrowable.pending !== null) return;
        this.top = this.scalableListener!.getTop(this.yOffset); if (JThrowable.pending !== null) return;
        this.full![this.WIDTH] = aFullWidth;
        this.full![this.HEIGHT] = aFullHeight;
        this.last![this.WIDTH] = aLastWidth;
        this.lastHalf![this.WIDTH] = (this.last![this.WIDTH] >> 1);
        this.last![this.HEIGHT] = aLastHeight;
        this.lastHalf![this.HEIGHT] = (this.last![this.HEIGHT] >> 1);
        SWTJOGLProcessor.getInstance()!.setCustom(aLastWidth, aLastHeight, this.ratio); if (JThrowable.pending !== null) return;
        this.add(this.SET_LAST_SIZE_METHOD_NAME); if (JThrowable.pending !== null) return;
    }
    

    isPortraitWH(lastWidth: i32, lastHeight: i32): bool {
        if (lastHeight > lastWidth) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    isPortrait(): bool {
        return this.isPortraitWH(this.last![this.WIDTH], this.last![this.HEIGHT]);
    }
    

    add(reason: string | null): void {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.REASON)!.append(reason)), this, this.FIRE_METHOD_NAME); if (JThrowable.pending !== null) return;
        stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(this.toStringAppend(stringMaker), this, this.FIRE_METHOD_NAME); if (JThrowable.pending !== null) return;
        this.list!.add(reason); if (JThrowable.pending !== null) return;
    }
    

    process(): void {
        do {
            if (this.list!.size() > 0) {
                this.processForced(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.list!.clear(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.FIRE_METHOD_NAME, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processForced(): void {
        do {
            let swtJOGLProcessor: SWTJOGLProcessor | null = SWTJOGLProcessor.getInstance(); if (JThrowable.pending !== null) break;
            swtJOGLProcessor!.clear(); if (JThrowable.pending !== null) break;
            DisplayChangeEventHandler.getInstance()!.fireEvent(this.displayChangeEvent); if (JThrowable.pending !== null) break;
            LastDisplayChangeEventHandler.getInstance()!.fireEvent(this.displayChangeEvent); if (JThrowable.pending !== null) break;
            swtJOGLProcessor!.onSurfaceChanged(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.FIRE_METHOD_NAME, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    update(displayable: Displayable | null, reason: string | null): void {
        let aLastWidth: i32 = displayable!.getWidth(); if (JThrowable.pending !== null) return;
        let aLastHeight: i32 = displayable!.getHeight(); if (JThrowable.pending !== null) return;
        let aFullWidth: i32 = aLastWidth;
        let aFullHeight: i32 = aLastHeight;
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append(reason)!.append(this.LAST_WIDTH)!.appendint(aLastWidth)!.append(this.LAST_HEIGHT)!.appendint(aLastHeight)!.append(this.commonSeps!.SPACE)!.append(this.toString())), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
        if (aLastWidth > 0 && aLastHeight > 0) {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
            if (!features!.isDefault(openGLFeatureFactory!.OPENGL) || this.last![this.WIDTH] != aLastWidth || this.last![this.HEIGHT] != aLastHeight) {
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.UPDATE_FROM_ORIENTATION_CHANGE)), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                let operatingSystemInterface: GenericOperatingSystem | null = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) return;
                if (operatingSystemInterface!.isOverScan()) {
                    aLastWidth = aLastWidth * operatingSystemInterface!.getOverScanXPercent() / 100; if (JThrowable.pending !== null) return;
                    aLastHeight = aLastHeight * operatingSystemInterface!.getOverScanYPercent() / 100; if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                if (operatingSystemInterface!.isScalable()) {
                    if (this.isPortraitWH(aLastWidth, aLastHeight)) {
                        if ((<f32>(aLastHeight)) > this.scaleLargestTo) {
                            this.displayRatio = this.scaleLargestTo / (<f32>(aLastHeight));
                            this.ratio = (<f32>(aLastHeight)) / this.scaleLargestTo;
                            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                            this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT)!.appendfloat(this.displayRatio)), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                            aLastWidth = JMath.toInt(((<f32>(aLastWidth)) * this.displayRatio));
                            aLastHeight = JMath.toInt(((<f32>(aLastHeight)) * this.displayRatio));
                            this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                        } else {
                            this.ratio = (<f32>1.0);
                            this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                        } if (JThrowable.pending !== null) return;
                    } else {
                        if ((<f32>(aLastWidth)) > this.scaleLargestTo) {
                            this.displayRatio = this.scaleLargestTo / (<f32>(aLastWidth));
                            this.ratio = (<f32>(aLastWidth)) / this.scaleLargestTo;
                            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                            this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE)!.appendfloat(this.displayRatio)), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                            aLastWidth = JMath.toInt(((<f32>(aLastWidth)) * this.displayRatio));
                            aLastHeight = JMath.toInt(((<f32>(aLastHeight)) * this.displayRatio));
                            this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                        } else {
                            this.ratio = (<f32>1.0);
                            this.scalableListener!.scale(this.ratio); if (JThrowable.pending !== null) return;
                        } if (JThrowable.pending !== null) return;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.UPDATE_FROM_ORIENTATION_CHANGE)!.append(this.LAST_WIDTH)!.appendint(aLastWidth)!.append(this.LAST_HEIGHT)!.appendint(aLastHeight)), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                this.xOffset = aFullWidth - aLastWidth;
                this.yOffset = aFullHeight - aLastHeight;
                this.left = this.scalableListener!.getLeft(this.xOffset); if (JThrowable.pending !== null) return;
                this.top = this.scalableListener!.getTop(this.yOffset); if (JThrowable.pending !== null) return;
                this.full![this.WIDTH] = aFullWidth;
                this.full![this.HEIGHT] = aFullHeight;
                this.last![this.WIDTH] = aLastWidth;
                this.lastHalf![this.WIDTH] = (this.last![this.WIDTH] >> 1);
                this.last![this.HEIGHT] = aLastHeight;
                this.lastHalf![this.HEIGHT] = (this.last![this.HEIGHT] >> 1);
                SWTJOGLProcessor.getInstance()!.setCustom(aLastWidth, aLastHeight, this.ratio); if (JThrowable.pending !== null) return;
                this.add(this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        return this.toStringAppend(stringBuffer);
    }
    

    toStringAppend(stringBuffer: StringMaker | null): string | null {
        stringBuffer!.append(this.DISPLAY_INFO); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.FULL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.WIDTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.full![this.WIDTH]); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.FULL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.full![this.HEIGHT]); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.LAST); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.WIDTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.last![this.WIDTH]); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.LAST); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.last![this.HEIGHT]); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.LAST_HALF); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.WIDTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.lastHalf![this.WIDTH]); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.LAST_HALF); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.lastHalf![this.HEIGHT]); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append((this.isPortrait() ? this.PORTRAIT : this.LANDSCAPE)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getTop(): i32 {
        return this.top;
    }
    

    getLeft(): i32 {
        return this.left;
    }
    

    getLastWidth(): i32 {
        return this.last![this.WIDTH];
    }
    

    getLastHeight(): i32 {
        return this.last![this.HEIGHT];
    }
    

    getLastHalfWidth(): i32 {
        return this.lastHalf![this.WIDTH];
    }
    

    getLastHalfHeight(): i32 {
        return this.lastHalf![this.HEIGHT];
    }
    

    getCustomLastWidth(): i32 {
        return this.last![this.CUSTOM_WIDTH];
    }
    

    getCustomLastHeight(): i32 {
        return this.last![this.CUSTOM_HEIGHT];
    }
    

    getRawLastWidth(): i32 {
        return this.last![this.WIDTH];
    }
    

    getRawLastHeight(): i32 {
        return this.last![this.HEIGHT];
    }
    

    setCustom(width: i32, height: i32): void {
        this.last![this.CUSTOM_WIDTH] = width;
        this.lastHalf![this.CUSTOM_WIDTH] = (this.last![this.CUSTOM_WIDTH] >> 1);
        this.last![this.CUSTOM_HEIGHT] = height;
        this.lastHalf![this.CUSTOM_HEIGHT] = (this.last![this.CUSTOM_HEIGHT] >> 1);
    }
    

    setScalableListener(scalableListener: BaseScalable | null): void {
        this.scalableListener = scalableListener;
    }
    

    getScalableListener(): ScalableListener | null {
        return this.scalableListener;
    }
    

    getRatio(): f32 {
        return this.ratio;
    }
    

    getDisplayRatio(): f32 {
        return this.displayRatio;
    }
    

    setOffset(left: i32, top: i32): void {
        this.left = left;
    }
    

    getxOffset(): i32 {
        return this.xOffset;
    }
    

    getyOffset(): i32 {
        return this.yOffset;
    }
}

