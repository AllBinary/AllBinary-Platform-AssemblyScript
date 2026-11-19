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
// package org.allbinary.input.motion.gesture
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Line
// import org.allbinary.graphics.PointFactory
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory
// import org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler
// import org.allbinary.input.motion.gesture.observer.MotionEventCircularPool
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.input.motion.gesture.observer.MovedMotionGesturesHandler
// import org.allbinary.input.motion.gesture.observer.ScrolledMotionGesturesHandler
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.J2SEMath
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.string.CommonStrings

@global export class MotionGestureRecognizer extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.MotionGestureRecognizer";
    }
    logUtil: LogUtil | null = null;
    j2seMath: J2SEMath | null = null;
    origin: GPoint | null = null;
    previous: GPoint | null = null;
    intermediate: GPoint | null = null;
    line: Line | null = null;
    motionGesturesHandler: BasicMotionGesturesHandler | null = null;
    movedMotionGesturesHandler: BasicEventHandler | null = null;
    scrolledMotionGesturesHandler: BasicEventHandler | null = null;
    motionEventCircularPool: MotionEventCircularPool | null = null;

    jfields_MotionGestureRecognizer(): void {
    this.logUtil = LogUtil.getInstance();
    this.j2seMath = J2SEMath.getInstance();
    this.origin = PointFactory.getInstance()!.ZERO_ZERO;
    this.previous = this.origin;
    this.intermediate = this.origin;
    this.line = new Line().jinit_Line_2(this.origin, this.origin);
    
    
    
    
    }
    

    jinit_MotionGestureRecognizer_1(id: i32): MotionGestureRecognizer {
        super.jinit_JObject_0();
        this.jfields_MotionGestureRecognizer();
        this.motionEventCircularPool = MotionEventCircularPool.createPool(id); if (JThrowable.pending !== null) return this;
        let motionGesturesHandler: BasicEventHandler | null = new BasicEventHandler().jinit_BasicEventHandler_0(); if (JThrowable.pending !== null) return this;
        let movedMotionGesturesHandler: BasicEventHandler | null = motionGesturesHandler;
        let scrolledMotionGesturesHandler: BasicEventHandler | null = motionGesturesHandler;
        do {
            motionGesturesHandler = BasicMotionGesturesHandler.getInstance(); if (JThrowable.pending !== null) break;
            movedMotionGesturesHandler = MovedMotionGesturesHandler.getInstance(); if (JThrowable.pending !== null) break;
            scrolledMotionGesturesHandler = ScrolledMotionGesturesHandler.getInstance(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.motionGesturesHandler = changetype<BasicMotionGesturesHandler | null>(motionGesturesHandler);
        this.movedMotionGesturesHandler = movedMotionGesturesHandler;
        this.scrolledMotionGesturesHandler = scrolledMotionGesturesHandler;
        return this;
    }
    

    processPressedMotionEvent(current: GPoint | null, deviceId: i32, button: i32): bool {
        this.intermediate = this.origin;
        this.previous = this.origin;
        let event: MotionGestureEvent | null = this.motionEventCircularPool!.getInstance1(TouchMotionGestureFactory.getInstance()!.PRESSED); if (JThrowable.pending !== null) return false;
        event!.setPreviousPoint(this.previous); if (JThrowable.pending !== null) return false;
        event!.setCurrentPoint(current); if (JThrowable.pending !== null) return false;
        this.motionGesturesHandler!.fireEvent(event); if (JThrowable.pending !== null) return false;
        return true;
    }
    

    processReleasedMotionEvent(current: GPoint | null, deviceId: i32, button: i32): bool {
        let event: MotionGestureEvent | null = this.motionEventCircularPool!.getInstance1(TouchMotionGestureFactory.getInstance()!.RELEASED); if (JThrowable.pending !== null) return false;
        event!.setPreviousPoint(this.previous); if (JThrowable.pending !== null) return false;
        event!.setCurrentPoint(current); if (JThrowable.pending !== null) return false;
        this.motionGesturesHandler!.fireEvent(event); if (JThrowable.pending !== null) return false;
        return true;
    }
    

    processDraggedMotionEvent(current: GPoint | null, deviceId: i32, buttonMask: i32): void {
        if (this.previous == this.origin || this.intermediate == this.origin) {
            this.previous = current;
            this.intermediate = current;
            return;
        }
        this.line!.setP1(this.previous); if (JThrowable.pending !== null) return;
        this.line!.setP2(current); if (JThrowable.pending !== null) return;
        let minimumMotionGesture: i32 = MotionGestureConfigurationFactory.getInstance()!.getMinimumMotionGesture(); if (JThrowable.pending !== null) return;
        if (this.j2seMath!.abs((<f32>(this.line!.getDeltaX()))) < (<f32>(minimumMotionGesture)) && this.j2seMath!.abs((<f32>(this.line!.getDeltaY()))) < (<f32>(minimumMotionGesture))) {
            this.intermediate = current;
            return;
        } if (JThrowable.pending !== null) return;
        let gradient: f64 = this.line!.getGradient(); if (JThrowable.pending !== null) return;
        let absGradient: f64 = (<f64>(this.j2seMath!.abs((<f32>(gradient))))); if (JThrowable.pending !== null) return;
        let conf: MotionGestureConfiguration | null = MotionGestureConfigurationFactory.getInstance(); if (JThrowable.pending !== null) return;
        let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return;
        let newMotionGesture: MotionGestureInput | null = touchMotionGestureFactory!.NO_MOTION;
        let diagonalToleranceHigher: f64 = 12.0;
        let diagonalToleranceLower: f64 = 12.0;
        if (conf!.isDiagonalMotionGestureAllowed()) {
            diagonalToleranceHigher = (<f64>((90 - conf!.getDiagonalTolerance()))); if (JThrowable.pending !== null) return;
            diagonalToleranceLower = (<f64>(conf!.getDiagonalTolerance())); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (absGradient > JMath.tan(JMath.toRadians(diagonalToleranceHigher))) {
            if (this.line!.getDeltaY() > 0.0) {
                newMotionGesture = touchMotionGestureFactory!.UP;
            } else {
                newMotionGesture = touchMotionGestureFactory!.DOWN;
            } if (JThrowable.pending !== null) return;
        } else {
            if (absGradient < JMath.tan(JMath.toRadians(diagonalToleranceLower))) {
                if (this.line!.getDeltaX() > 0.0) {
                    newMotionGesture = touchMotionGestureFactory!.LEFT;
                } else {
                    newMotionGesture = touchMotionGestureFactory!.RIGHT;
                } if (JThrowable.pending !== null) return;
            } else {
                if (gradient > 0.0) {
                    if (this.line!.getDeltaX() > 0.0) {
                        newMotionGesture = touchMotionGestureFactory!.DIAGONAL_UP_LEFT;
                    } else {
                        newMotionGesture = touchMotionGestureFactory!.DIAGONAL_DOWN_RIGHT;
                    } if (JThrowable.pending !== null) return;
                } else {
                    if (this.line!.getDeltaX() > 0.0) {
                        newMotionGesture = touchMotionGestureFactory!.DIAGONAL_DOWN_LEFT;
                    } else {
                        newMotionGesture = touchMotionGestureFactory!.DIAGONAL_UP_RIGHT;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.previous = current;
        this.intermediate = current;
        let event: MotionGestureEvent | null = this.motionEventCircularPool!.getInstance1(newMotionGesture); if (JThrowable.pending !== null) return;
        event!.setPreviousPoint(this.previous); if (JThrowable.pending !== null) return;
        event!.setCurrentPoint(current); if (JThrowable.pending !== null) return;
        this.motionGesturesHandler!.fireEvent(event); if (JThrowable.pending !== null) return;
        return;
    }
    

    processMovedMotionEvent(current: GPoint | null, deviceId: i32, button: i32): bool {
        let event: MotionGestureEvent | null = this.motionEventCircularPool!.getInstance1(TouchMotionGestureFactory.getInstance()!.NO_MOTION); if (JThrowable.pending !== null) return false;
        event!.setPreviousPoint(this.previous); if (JThrowable.pending !== null) return false;
        event!.setCurrentPoint(current); if (JThrowable.pending !== null) return false;
        this.movedMotionGesturesHandler!.fireEvent(event); if (JThrowable.pending !== null) return false;
        return true;
    }
    

    processScrolledMotionEvent(current: GPoint | null, deviceId: i32, button: i32): bool {
        let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return false;
        let newMotionGesture: MotionGestureInput | null = touchMotionGestureFactory!.NO_MOTION;
        if (button > 0) {
            newMotionGesture = touchMotionGestureFactory!.SCROLL_UP;
        } else if (button < 0) {
            newMotionGesture = touchMotionGestureFactory!.SCROLL_DOWN;
        }
        let event: MotionGestureEvent | null = this.motionEventCircularPool!.getInstance1(newMotionGesture); if (JThrowable.pending !== null) return false;
        event!.setPreviousPoint(this.previous); if (JThrowable.pending !== null) return false;
        event!.setCurrentPoint(current); if (JThrowable.pending !== null) return false;
        this.scrolledMotionGesturesHandler!.fireEvent(event); if (JThrowable.pending !== null) return false;
        return true;
    }
    

    getMotionGesturesHandler(): BasicMotionGesturesHandler | null {
        return this.motionGesturesHandler;
    }
}

