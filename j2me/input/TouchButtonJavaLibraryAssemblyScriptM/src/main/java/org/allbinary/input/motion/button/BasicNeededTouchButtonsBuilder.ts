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
// package org.allbinary.input.motion.button
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class BasicNeededTouchButtonsBuilder extends BaseTouchInput {

    jclassName(): string {
        return "org.allbinary.input.motion.button.BasicNeededTouchButtonsBuilder";
    }
    logUtil: LogUtil | null = null;

    jfields_BasicNeededTouchButtonsBuilder(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_BasicNeededTouchButtonsBuilder_0(): BasicNeededTouchButtonsBuilder {
        super.jinit_BaseTouchInput_0();
        this.jfields_BasicNeededTouchButtonsBuilder();
        return this;
    }
    

    getList(): BasicArrayList | null {
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            let touchButtonLocationHelper: TouchButtonLocationHelper | null = new TouchButtonLocationHelper().jinit_TouchButtonLocationHelper_0(); if (JThrowable.pending !== null) break;
            let basicTouchButtonCellPositionFactory: BasicTouchButtonCellPositionFactory | null = new BasicTouchButtonCellPositionFactory().jinit_BasicTouchButtonCellPositionFactory_0(); if (JThrowable.pending !== null) break;
            let commonButtons: CommonButtons | null = CommonButtons.getInstance(); if (JThrowable.pending !== null) break;
            let animationInterface: Animation | null = NullAnimationFactory.getFactoryInstance()!.getInstance1(0); if (JThrowable.pending !== null) break;
            let UP: TouchButton | null = new TouchButton().jinit_TouchButton_7(BasicTouchInputFactory.getInstance()!.UP, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.SECOND_FROM_BOTTOM_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf()); if (JThrowable.pending !== null) break;
            let DOWN: TouchButton | null = new TouchButton().jinit_TouchButton_7(BasicTouchInputFactory.getInstance()!.DOWN, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_LEFT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf()); if (JThrowable.pending !== null) break;
            let LEFT: TouchButton | null = new TouchButton().jinit_TouchButton_7(BasicTouchInputFactory.getInstance()!.LEFT, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_SECOND_FROM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf()); if (JThrowable.pending !== null) break;
            let RIGHT: TouchButton | null = new TouchButton().jinit_TouchButton_7(BasicTouchInputFactory.getInstance()!.RIGHT, animationInterface, animationInterface, commonButtons!.NORMAL_BUTTON, basicTouchButtonCellPositionFactory!.BOTTOM_RIGHT, touchButtonLocationHelper!.getColumnsRemainderHalf(), touchButtonLocationHelper!.getRowsRemainderHalf()); if (JThrowable.pending !== null) break;
            list!.add(UP); if (JThrowable.pending !== null) break;
            list!.add(DOWN); if (JThrowable.pending !== null) break;
            list!.add(LEFT); if (JThrowable.pending !== null) break;
            list!.add(RIGHT); if (JThrowable.pending !== null) break;
            return list;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_LIST, e); if (JThrowable.pending !== null) return null;
            return BasicArrayListUtil.getInstance()!.getImmutableInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

