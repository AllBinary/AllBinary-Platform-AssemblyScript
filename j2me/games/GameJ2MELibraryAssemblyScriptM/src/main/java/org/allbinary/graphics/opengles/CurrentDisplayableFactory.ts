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
// package org.allbinary.graphics.opengles
// import javax.microedition.lcdui.Displayable
// import org.allbinary.J2MEUtil
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.game.displayable.canvas.DemoCanvas
// import org.allbinary.game.displayable.canvas.GameInputMappingCanvas
// import org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas
// import org.allbinary.game.displayable.canvas.GameRunnable
// import org.allbinary.game.displayable.canvas.NullDisplayable
// import org.allbinary.game.displayable.canvas.NullWaitGameRunnable
// import org.allbinary.game.layer.SWTUtil
// import org.allbinary.game.score.displayable.HighScoresCanvas
// import org.allbinary.graphics.GraphicsStrings
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.NullRunnable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CurrentDisplayableFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.CurrentDisplayableFactory";
    }
    @lazy static jv_instance: CurrentDisplayableFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CurrentDisplayableFactory | null {
        if (!CurrentDisplayableFactory.js_instance) {
            CurrentDisplayableFactory.js_instance = true;
            CurrentDisplayableFactory.jv_instance = new CurrentDisplayableFactory().jinit_CurrentDisplayableFactory_0();
        }
        return CurrentDisplayableFactory.jv_instance;
    }
    static set instance(value: CurrentDisplayableFactory | null) {
        CurrentDisplayableFactory.js_instance = true;
        CurrentDisplayableFactory.jv_instance = value;
    }
    commonStrings: CommonStrings | null = null;
    canvasStrings: CanvasStrings | null = null;
    stringUtil: StringUtil | null = null;
    SET_DISPLAYABLE: string | null = null;
    SET_RUNNABLE: string | null = null;
    CLEAR_RUNNABLE: string | null = null;
    SET_USED_RUNNABLE: string | null = null;
    RUNNABLE: string | null = null;
    RUNNABLE_WAS_ALREADY_IN_USE: string | null = null;
    DEFAULT_CHILD_NAME_LIST: BasicArrayList | null = null;
    displayable: Displayable | null = null;
    openGlReadydisplayable: Displayable | null = null;
    runnable: GameRunnable | null = null;
    usedRunnable: GameRunnable | null = null;

    jfields_CurrentDisplayableFactory(): void {
    this.commonStrings = CommonStrings.getInstance();
    this.canvasStrings = CanvasStrings.getInstance();
    this.stringUtil = StringUtil.getInstance();
    this.SET_DISPLAYABLE = "setDisplayable";
    this.SET_RUNNABLE = "setRunnable";
    this.CLEAR_RUNNABLE = "clearRunnable";
    this.SET_USED_RUNNABLE = "setUsedRunnable";
    this.RUNNABLE = "Runnable: ";
    this.RUNNABLE_WAS_ALREADY_IN_USE = "Runnable was already in use: ";
    this.DEFAULT_CHILD_NAME_LIST = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.displayable = NullDisplayable.getInstance();
    this.openGlReadydisplayable = NullDisplayable.getInstance();
    this.runnable = NullWaitGameRunnable.getInstance();
    this.usedRunnable = NullWaitGameRunnable.getInstance();
    }
    

    static getInstance(): CurrentDisplayableFactory | null {
        return CurrentDisplayableFactory.instance;
    }
    

    jinit_CurrentDisplayableFactory_0(): CurrentDisplayableFactory {
        super.jinit_JObject_0();
        this.jfields_CurrentDisplayableFactory();
        this.DEFAULT_CHILD_NAME_LIST!.add(this.canvasStrings!.ABOUT); if (JThrowable.pending !== null) return this;
        this.DEFAULT_CHILD_NAME_LIST!.add(this.canvasStrings!.OPTIONS); if (JThrowable.pending !== null) return this;
        this.DEFAULT_CHILD_NAME_LIST!.add(GameInputMappingCanvas.NAME); if (JThrowable.pending !== null) return this;
        this.DEFAULT_CHILD_NAME_LIST!.add(GameInputMappingInstructionsCanvas.NAME); if (JThrowable.pending !== null) return this;
        this.DEFAULT_CHILD_NAME_LIST!.add(HighScoresCanvas.NAME); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setMyCanvas(displayable: MyCanvas | null): void {
        if ((this.displayable instanceof MyCanvas)) {
            if (displayable!.hasChild(changetype<MyCanvas | null>(this.displayable))) {
                PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Child Displayable is already set for: ")!.append(this.stringUtil!.toString1(displayable))), this, this.SET_DISPLAYABLE); if (JThrowable.pending !== null) return;
                return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.setDisplayable(displayable); if (JThrowable.pending !== null) return;
    }
    

    setDisplayable(displayable: Displayable | null): void {
        this.displayable = displayable;
        this.setOpenGlReadydisplayable(displayable); if (JThrowable.pending !== null) return;
    }
    

    setOpenGlReadydisplayable(openGlReadydisplayable: Displayable | null): void {
        this.openGlReadydisplayable = openGlReadydisplayable;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    getOpenGlReadydisplayable(): Displayable | null {
        return this.openGlReadydisplayable;
    }
    

    setRunnable(runnable: GameRunnable | null): void {
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(runnable))), this, this.SET_RUNNABLE); if (JThrowable.pending !== null) return;
        this.runnable = runnable;
        if (this.usedRunnable != this.runnable) {
            this.update(); if (JThrowable.pending !== null) return;
        } else {
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.RUNNABLE_WAS_ALREADY_IN_USE)!.append(this.stringUtil!.toString1(runnable))), this, this.SET_RUNNABLE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    clearRunnable(): void {
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(NullRunnable.getInstance()))), this, this.CLEAR_RUNNABLE); if (JThrowable.pending !== null) return;
        this.setUsedRunnable(NullWaitGameRunnable.getInstance()); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        {
            let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringMaker!.append(this.stringUtil!.toString1(this.openGlReadydisplayable)); if (JThrowable.pending !== null) return;
            if (SWTUtil.isSWT && !features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)) {
                PreLogUtil.put(JObject.jtoString(stringMaker!.append(commonSeps!.SPACE)!.append(SWTUtil.SWT)!.append(commonSeps!.SPACE)!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(NullRunnable.getInstance()))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                this.setUsedRunnable(NullWaitGameRunnable.getInstance()); if (JThrowable.pending !== null) return;
            } else if (J2MEUtil.isHTML()) {
                PreLogUtil.put(JObject.jtoString(stringMaker!.append(commonSeps!.SPACE)!.append(GraphicsStrings.getInstance()!.HTML)!.append(commonSeps!.SPACE)!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(this.runnable))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                this.setUsedRunnable(this.runnable); if (JThrowable.pending !== null) return;
            } else if ((this.openGlReadydisplayable instanceof DemoCanvas) || (this.openGlReadydisplayable instanceof AllBinaryGameCanvas) || features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)) {
                PreLogUtil.put(JObject.jtoString(stringMaker!.append(commonSeps!.SPACE)!.append(JObject.jtoString(OpenGLFeatureFactory.getInstance()!.OPENGL))!.append(commonSeps!.SPACE)!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(this.runnable))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                this.setUsedRunnable(this.runnable); if (JThrowable.pending !== null) return;
            } else {
                PreLogUtil.put(JObject.jtoString(stringMaker!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(NullRunnable.getInstance()))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
                this.setUsedRunnable(NullWaitGameRunnable.getInstance()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        }
    }
    

    getDisplayable(): Displayable | null {
        return this.displayable;
    }
    

    getUsedRunnable(): GameRunnable | null {
        return this.usedRunnable;
    }
    

    setUsedRunnable(usedRunnable: GameRunnable | null): void {
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.RUNNABLE)!.append(this.stringUtil!.toString1(this.runnable))!.append(CommonSeps.getInstance()!.COLON_SEP)!.append(this.stringUtil!.toString1(usedRunnable))), this, this.SET_USED_RUNNABLE); if (JThrowable.pending !== null) return;
        this.usedRunnable = usedRunnable;
    }
}

