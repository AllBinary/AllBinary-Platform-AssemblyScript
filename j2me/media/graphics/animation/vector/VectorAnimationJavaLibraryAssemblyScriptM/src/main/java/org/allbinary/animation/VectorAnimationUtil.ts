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
// package org.allbinary.animation
// import org.allbinary.graphics.GPoint
// import org.allbinary.util.BasicArrayList

@global export class VectorAnimationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.VectorAnimationUtil";
    }
    @lazy static jv_instance: VectorAnimationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): VectorAnimationUtil | null {
        if (!VectorAnimationUtil.js_instance) {
            VectorAnimationUtil.js_instance = true;
            VectorAnimationUtil.jv_instance = new VectorAnimationUtil().jinit_VectorAnimationUtil_0();
        }
        return VectorAnimationUtil.jv_instance;
    }
    static set instance(value: VectorAnimationUtil | null) {
        VectorAnimationUtil.js_instance = true;
        VectorAnimationUtil.jv_instance = value;
    }
    

    static getInstance(): VectorAnimationUtil | null {
        return VectorAnimationUtil.instance;
    }
    

    jinit_VectorAnimationUtil_0(): VectorAnimationUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    toAnimationArrayFromListOfPointListWithPointsPerFrame(vector: BasicArrayList | null, pointsPerFrame: i32): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return null;
        let points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = JArrays.new3<i32>(size, pointsPerFrame, 2);
        let nextBasicArrayList: BasicArrayList | null = null;
        let framePoints: StaticArray<StaticArray<i32> | null> | null = null;
        for (let index: i32 = 0; index < size; index++) {
            nextBasicArrayList = changetype<BasicArrayList | null>(vector!.objectArray![index]);
            framePoints = this.toFrameArrayFromPointBasicArrayList(nextBasicArrayList); if (JThrowable.pending !== null) return null;
            for (let pointIndex: i32 = 0; pointIndex < framePoints!.length; pointIndex++) {
                points![index]![pointIndex]![0] = framePoints![pointIndex]![0];
                points![index]![pointIndex]![1] = framePoints![pointIndex]![1];
            }
        } if (JThrowable.pending !== null) return null;
        return points;
    }
    

    toAnimationArrayFromListOfPointList(vector: BasicArrayList | null): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        let size: i32 = vector!.size(); if (JThrowable.pending !== null) return null;
        let points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = JArrays.new3<i32>(size, 0, 0);
        let nextBasicArrayList: BasicArrayList | null = null;
        let framePoints: StaticArray<StaticArray<i32> | null> | null = null;
        for (let index: i32 = 0; index < size; index++) {
            nextBasicArrayList = changetype<BasicArrayList | null>(vector!.objectArray![index]);
            framePoints = this.toFrameArrayFromPointBasicArrayList(nextBasicArrayList); if (JThrowable.pending !== null) return null;
            points![index] = JArrays.new2<i32>(framePoints!.length, 2);
            for (let pointIndex: i32 = 0; pointIndex < framePoints!.length; pointIndex++) {
                points![index]![pointIndex]![0] = framePoints![pointIndex]![0];
                points![index]![pointIndex]![1] = framePoints![pointIndex]![1];
            }
        } if (JThrowable.pending !== null) return null;
        return points;
    }
    

    toFrameArrayFromPointBasicArrayList(list: BasicArrayList | null): StaticArray<StaticArray<i32> | null> | null {
        let points: StaticArray<StaticArray<i32> | null> | null = JArrays.new2<i32>(list!.size(), 2); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let nextPoint: GPoint | null = changetype<GPoint | null>(list!.objectArray![index]);
            points![index]![0] = nextPoint!.getX(); if (JThrowable.pending !== null) return null;
            points![index]![1] = nextPoint!.getY(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return points;
    }
}

