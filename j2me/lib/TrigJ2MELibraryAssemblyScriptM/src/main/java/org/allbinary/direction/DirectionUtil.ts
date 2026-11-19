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
// package org.allbinary.direction
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory

@global export class DirectionUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.direction.DirectionUtil";
    }
    @lazy static jv_instance: DirectionUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DirectionUtil | null {
        if (!DirectionUtil.js_instance) {
            DirectionUtil.js_instance = true;
            DirectionUtil.jv_instance = new DirectionUtil().jinit_DirectionUtil_0();
        }
        return DirectionUtil.jv_instance;
    }
    static set instance(value: DirectionUtil | null) {
        DirectionUtil.js_instance = true;
        DirectionUtil.jv_instance = value;
    }
    directionArray: StaticArray<Angle | null> | null = null;
    directionArray2: StaticArray<Angle | null> | null = null;

    jfields_DirectionUtil(): void {
    this.directionArray = new StaticArray<Angle | null>(10);
    this.directionArray2 = new StaticArray<Angle | null>(10);
    }
    

    static getInstance(): DirectionUtil | null {
        return DirectionUtil.instance;
    }
    

    jinit_DirectionUtil_0(): DirectionUtil {
        super.jinit_JObject_0();
        this.jfields_DirectionUtil();
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return this;
        let directionFactory: DirectionFactory | null = DirectionFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.directionArray![directionFactory!.LEFT!.getValue()] = angleFactory!.LEFT; if (JThrowable.pending !== null) return this;
        this.directionArray![directionFactory!.RIGHT!.getValue()] = angleFactory!.RIGHT; if (JThrowable.pending !== null) return this;
        this.directionArray![directionFactory!.UP!.getValue()] = angleFactory!.UP; if (JThrowable.pending !== null) return this;
        this.directionArray![directionFactory!.DOWN!.getValue()] = angleFactory!.DOWN; if (JThrowable.pending !== null) return this;
        this.directionArray2![directionFactory!.LEFT!.getValue()] = angleFactory!.LEFT; if (JThrowable.pending !== null) return this;
        this.directionArray2![directionFactory!.RIGHT!.getValue()] = angleFactory!.RIGHT; if (JThrowable.pending !== null) return this;
        this.directionArray2![directionFactory!.UP!.getValue()] = angleFactory!.UP; if (JThrowable.pending !== null) return this;
        this.directionArray2![directionFactory!.DOWN!.getValue()] = angleFactory!.DOWN; if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAngle(direction: Direction | null): Angle | null {
        return this.directionArray2![direction!.getValue()];
    }
    

    getFrameAngle(direction: Direction | null): Angle | null {
        return this.directionArray![direction!.getValue()];
    }
}

