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
// package org.allbinary.input.motion.gesture.configuration
// import org.allbinary.game.input.CompleteMotionGestureInputEvent
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.input.motion.gesture.MotionGestureToMotionGestureActionAssociation
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class MotionGestureConfiguration extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration";
    }
    diagonalMotionGestureAllowed: bool = false;
    diagonalTolerance: i32 = 0;
    minimumMotionGesture: i32 = 0;
    button: string | null = null;
    color: BasicColor | null = null;
    executingActions: bool = false;
    mouseButtonMask: i32 = 0;
    activeCommands: BasicArrayList | null = null;

    jfields_MotionGestureConfiguration(): void {
    this.diagonalMotionGestureAllowed = true;
    this.diagonalTolerance = 7;
    this.minimumMotionGesture = 9;
    this.button = StringUtil.getInstance()!.EMPTY_STRING;
    this.color = BasicColorFactory.getInstance()!.BLUE;
    this.executingActions = true;
    this.mouseButtonMask = 0;
    this.activeCommands = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_MotionGestureConfiguration_0(): MotionGestureConfiguration {
        super.jinit_JObject_0();
        this.jfields_MotionGestureConfiguration();
        return this;
    }
    

    addMotionGestureAction(list: BasicArrayList | null, commandAction: CompleteMotionGestureInputEvent | null): void {
        this.activeCommands!.add(new MotionGestureToMotionGestureActionAssociation().jinit_MotionGestureToMotionGestureActionAssociation_2(list, commandAction)); if (JThrowable.pending !== null) return;
    }
    

    clearMotionGestureAction(): void {
        this.activeCommands!.clear(); if (JThrowable.pending !== null) return;
    }
    

    getAssociateCommandActionsList(): BasicArrayList | null {
        return this.activeCommands;
    }
    

    isDiagonalMotionGestureAllowed(): bool {
        return this.diagonalMotionGestureAllowed;
    }
    

    isExecutingActionsAllowed(): bool {
        return this.executingActions;
    }
    

    setExecutingActionsAllowed(executingActionAllowed: bool): void {
        this.executingActions = executingActionAllowed;
    }
    

    setDiagonalMotionGestureAllowed(diagonalMotionGestureAllowed: bool): void {
        this.diagonalMotionGestureAllowed = diagonalMotionGestureAllowed;
    }
    

    getDiagonalTolerance(): i32 {
        return this.diagonalTolerance;
    }
    

    setDiagonalTolerance(diagonalTolerance: i32): void {
        this.diagonalTolerance = diagonalTolerance;
    }
    

    getMinimumMotionGesture(): i32 {
        return this.minimumMotionGesture;
    }
    

    setMinimumMotionGesture(minimumMotionGesture: i32): void {
        this.minimumMotionGesture = minimumMotionGesture;
    }
    

    getButton(): string | null {
        return this.button;
    }
    

    setButton(button: string | null): void {
        this.button = button;
    }
    

    getColor(): BasicColor | null {
        return this.color;
    }
    

    setColor(color: BasicColor | null): void {
        this.color = color;
    }
    

    getMouseButtonMask(): i32 {
        return this.mouseButtonMask;
    }
    

    setMouseButtonMask(mouseButtonMask: i32): void {
        this.mouseButtonMask = mouseButtonMask;
    }
}

